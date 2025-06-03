
resource "aws_security_group" "ecs_service_sg" {
  name        = format("%s-%s-ecs-security-group", var.name, var.environment)
  description = "Allow HTTP inbound traffic"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = var.containerPort
    to_port     = var.containerPort
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_ecs_cluster" "main" {
  name = format("%s-%s-ecs-cluster", var.name, var.environment)
}

resource "aws_ecs_service" "web" {
  name            = format("%s-%s-ecs-service", var.name, var.environment)
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.web.arn
  desired_count   = 1
  launch_type     = var.launch_type

  # network_configuration {
  #   subnets         = var.subnets
  #   security_groups = [aws_security_group.ecs_service_sg.id]
  
  # }
  depends_on = [aws_ecs_task_definition.web]

}

resource "aws_ecs_task_definition" "web" {
  family                   = format("%s-%s-ecs-task", var.name, var.environment)
  requires_compatibilities = ["EC2"]
  network_mode             = "bridge"
  cpu                      = var.cpu
  memory                   = var.memory
  container_definitions = jsonencode([
    {
      name  = var.name
      image = var.image_app
      portMappings = [
        {
          containerPort = var.containerPort
          hostPort      = var.hostPort
          protocol      = "tcp"
        }
      ]
    }
  ])
}

### EC2 launch template

resource "aws_launch_template" "ecs_lt" {
    name_prefix   = format("%s-%s-launch_template", var.name, var.environment)
    image_id     = var.image_id 
    instance_type = var.instance_type
    key_name      = "ssh-key"

  iam_instance_profile {
    name = aws_iam_instance_profile.ecs_instance_profile.name
  }

  network_interfaces {
    security_groups = [aws_security_group.ecs_service_sg.id]
  }
  
  user_data = base64encode(<<-EOF
              #!/bin/bash
              echo ECS_CLUSTER=${aws_ecs_cluster.main.name} >> /etc/ecs/ecs.config
              EOF
            )
}


##### Autoscaling Group
resource "aws_autoscaling_group" "ecs_asg" {
  name                 = format("%s-%s-ecs-autoscaling-group",var.name, var.environment)
  desired_capacity     = var.desired_capacity
  max_size             = var.max_size
  min_size             = var.min_size
  vpc_zone_identifier  = var.subnets
  launch_template {
    id      = aws_launch_template.ecs_lt.id
    version = "$Latest"
  }

  instance_refresh {
    strategy = "Rolling"
    preferences {
      min_healthy_percentage = 50  
      instance_warmup        = 300 
    }
  }

  tag {
    key                 = "Name"
    value               = format("%s-%s-ecs-instance", var.name, var.environment)
    propagate_at_launch = true
  }

}

output "ecs_autoscaling_group_name" {
  description = "The name of the ECS Auto Scaling Group"
  value       = aws_autoscaling_group.ecs_asg.name
}
