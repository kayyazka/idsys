 provider "aws" {
  region  = var.aws_region
  profile = "development"
  }
  
  resource "aws_instance" "vm" {
  ami                       = var.ami
  instance_type             = var.instance_type
  count                     = var.count_instance
  key_name                  = "ssh-key"
  subnet_id                 = element(var.subnets , count.index)
  vpc_security_group_ids    = var.security_groups
  user_data                 = data.template_file.startup_script.rendered
 


  root_block_device {
    volume_size           = var.root_disk
    volume_type           = var.root_disk_type
    delete_on_termination = true
  
  }

  iam_instance_profile = "CloudWatchAgentServerRole"
  provisioner "file" {
      source      =  var.create_extra_disk ? "${path.module}/config/config-volume-true.json" : "${path.module}/config/config-volume-false.json"
      destination = "/tmp/config.json"

      connection {
        type        = "ssh"
        user        = "ubuntu"
        private_key = "${file("~/ssh-key.pem")}"
        host        = "${self.public_ip}"
      }
    }
}

resource "aws_eip" "eip" {
  count             = var.count_instance 
  instance          = element(aws_instance.vm.*.id,count.index)
  domain            = "vpc"

  lifecycle {
    prevent_destroy = false
  }
  
}


resource "aws_eip_association" "eip_association" {
  count         = length(aws_eip.eip)
  instance_id   = element(aws_instance.vm.*.id, count.index)
  allocation_id = element(aws_eip.eip.*.id, count.index)
}

resource "aws_volume_attachment" "volume_attachment" {
  device_name       = "xvdf"
  volume_id         = element(aws_ebs_volume.additional_disk.*.id, count.index)
  instance_id       = element(aws_instance.vm.*.id, count.index)
  count             = var.create_extra_disk ? var.count_instance: 0 
  
}

resource "aws_ebs_volume" "additional_disk" {
  availability_zone = element(aws_instance.vm.*.availability_zone, count.index)
  size              = var.additional_disk
  type              = var.additional_disk_type
  count             = var.create_extra_disk ? var.count_instance: 0 

}

data "template_file" "startup_script" {
      template =  var.create_extra_disk ? "${file("${format("%s/config/startup-volume-true.sh", path.module)}")}" : "${file("${format("%s/config/startup-volume-false.sh", path.module)}")}"
      vars =  {
        }
  }

output "public_ip" {
  value = aws_eip.eip.*.public_ip
}

output "private_ip" {
  value = aws_instance.vm.*.private_ip
}

output "rendered" {
  value = data.template_file.startup_script.rendered

}
