   provider "aws" {
  region  = var.aws_region
  profile = "development"
  }
  
 resource "aws_iam_role" "infra" {
  name = format("%s-k8s-iam-role-%s", var.environment, var.project)

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "eks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "AmazonEKSClusterPolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.infra.name
}

resource "aws_eks_cluster" "infra" {
  name            = format("%s-k8s-%s", var.environment, var.project)
  role_arn        = aws_iam_role.infra.arn
  version         = var.kubernetes_version

  vpc_config {
    subnet_ids              = var.subnets
  }



  depends_on = [aws_iam_role_policy_attachment.AmazonEKSClusterPolicy]
}

output "name_aws_eks_cluster" {
  value = aws_eks_cluster.infra.name
}

output "endpoint" {
  value = aws_eks_cluster.infra.endpoint
}

output "kubeconfig-certificate-authority-data" {
  value = aws_eks_cluster.infra.certificate_authority[0].data
}


resource "aws_iam_role" "nodes" {
  #name = var.name_nodes
  name = format("%s-node-k8s-%s", var.environment, var.project)

  assume_role_policy = jsonencode({
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "ec2.amazonaws.com"
      }
    }]
    Version = "2012-10-17"
  })
}

resource "aws_iam_role_policy_attachment" "AmazonEKSWorkerNodePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role       = aws_iam_role.nodes.name
}

resource "aws_iam_role_policy_attachment" "AmazonEKS_CNI_Policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role       = aws_iam_role.nodes.name
}

resource "aws_iam_role_policy_attachment" "AmazonEC2ContainerRegistryReadOnly" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.nodes.name
}

resource "aws_eks_node_group" "private-nodes" {
  cluster_name    = aws_eks_cluster.infra.name
  node_group_name = format("%s-node-k8s-%s", var.environment, var.project)
  node_role_arn   = aws_iam_role.nodes.arn

  subnet_ids      = var.subnets
  capacity_type   = "ON_DEMAND"
  instance_types  = var.instance_types 
  disk_size       = var.disk_size

  remote_access {
    ec2_ssh_key = "ssh-key"
    source_security_group_ids = [aws_security_group.sg.id]
  }

  scaling_config {
    desired_size = var.desired_size 
    max_size     = var.max_size
    min_size     = var.min_size
  }

  update_config {
    max_unavailable = 1
  }

  labels = {
    role = "general"
  }


  depends_on = [
    aws_iam_role_policy_attachment.AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.AmazonEC2ContainerRegistryReadOnly,
  ]
}


data "tls_certificate" "eks" {
  url = aws_eks_cluster.infra.identity[0].oidc[0].issuer
}


resource "aws_iam_openid_connect_provider" "eks" {
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [data.tls_certificate.eks.certificates[0].sha1_fingerprint]
  url             = aws_eks_cluster.infra.identity[0].oidc[0].issuer
}


data "aws_iam_policy_document" "infra_oidc_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"

    condition {
      test     = "StringEquals"
      variable = "${replace(aws_iam_openid_connect_provider.eks.url, "https://", "")}:sub"
      values   = ["system:serviceaccount:default:aws-infra"]
    }

    principals {
      identifiers = [aws_iam_openid_connect_provider.eks.arn]
      type        = "Federated"
    }
  }
}

resource "aws_iam_role" "infra_oidc" {
  assume_role_policy = data.aws_iam_policy_document.infra_oidc_assume_role_policy.json
  name               = format("%s-oidc-%s", var.environment, var.project)
}

output "infra_policy_arn" {
  value = aws_iam_role.infra_oidc.arn
}

resource "aws_iam_policy" "infra-policy" {
  name = format("%s-k8s-%s-policy", var.environment, var.project)

  policy = jsonencode({
    Statement = [{
      Action = [
        "s3:ListAllMyBuckets",
        "s3:GetBucketLocation"
      ]
      Effect   = "Allow"
      Resource = "arn:aws:s3:::*"
    }]
    Version = "2012-10-17"
  })
}

resource "aws_iam_role_policy_attachment" "infra_attach" {
  role       = aws_iam_role.infra_oidc.name
  policy_arn = aws_iam_policy.infra-policy.arn
}


##### autoscaling node  worker ###

data "aws_iam_policy_document" "eks_cluster_autoscaler_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"

    condition {
      test     = "StringEquals"
      variable = "${replace(aws_iam_openid_connect_provider.eks.url, "https://", "")}:sub"
      values   = ["system:serviceaccount:kube-system:cluster-autoscaler"]
    }

    principals {
      identifiers = [aws_iam_openid_connect_provider.eks.arn]
      type        = "Federated"
    }
  }
}

resource "aws_iam_role" "eks_cluster_autoscaler" {
  assume_role_policy = data.aws_iam_policy_document.eks_cluster_autoscaler_assume_role_policy.json
  name               = format("%s-k8s-autoscaler-%s", var.environment, var.project)
}

output "eks_cluster_autoscaler_arn" {
  value = aws_iam_role.eks_cluster_autoscaler.arn
}

resource "aws_iam_policy" "eks_cluster_autoscaler" {
  name = format("%s-k8s-autoscaler-%s", var.environment, var.project)

  policy = jsonencode({
    Statement = [{
      Action = [
                "autoscaling:DescribeAutoScalingGroups",
                "autoscaling:DescribeAutoScalingInstances",
                "autoscaling:DescribeLaunchConfigurations",
                "autoscaling:DescribeTags",
                "autoscaling:SetDesiredCapacity",
                "autoscaling:TerminateInstanceInAutoScalingGroup",
                "ec2:DescribeLaunchTemplateVersions"
            ]
      Effect   = "Allow"
      Resource = "*"
    }]
    Version = "2012-10-17"
  })
}

resource "aws_iam_role_policy_attachment" "eks_cluster_autoscaler_attach" {
  role       = aws_iam_role.eks_cluster_autoscaler.name
  policy_arn = aws_iam_policy.eks_cluster_autoscaler.arn
}


### Creating Security Group For NodeGroups ###
resource "aws_security_group" "sg" {
  name        = format("%s-security-group-%s", var.environment, var.project)
  description = "Node Group security group"
  vpc_id      = var.vpc

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group_rule" "allow" {
  description              = "Allow nodes to communicate with each other"
  type                     = "ingress"
  from_port                = 0
  to_port                  = 0
  protocol                 = "-1"
  security_group_id        = aws_security_group.sg.id
  source_security_group_id = aws_security_group.sg.id
}

resource "aws_security_group_rule" "ssh" {
  description              = "SSH Rule"
  type                     = "ingress"
  from_port                = 22
  to_port                  = 22
  protocol                 = "tcp"
  security_group_id        = aws_security_group.sg.id
  source_security_group_id = aws_security_group.sg.id
}

resource "aws_security_group_rule" "all-traffic" {
  type              = "ingress"
  from_port         = 0
  to_port           = 0
  protocol          = -1
  cidr_blocks       =  ["10.0.0.0/16"]
  security_group_id =  aws_security_group.sg.id
}
