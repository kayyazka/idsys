
variable "region" {
  type    = string
  default = ""
}


variable "environment" {
  type    = string
  default = ""
}

variable "name" {
  type    = string
  default = ""
}

variable "vpc_id" {
  type    = string
  default = ""
}

variable "subnets" {
  type    = list(string)
  default = [ ]
}


variable "containerPort" {
  type    = number
}

variable "hostPort" {
  type    = number
}

variable "cpu" {
  type    = string
  default = ""
}

variable "memory" {
  type    = string
  default = ""
}

variable "image_app" {
  type    = string
  default = ""
}

variable "image_id" {
  type    = string
  default = ""
}

variable "launch_type" {
  type    = string
  default = "EC2"
}


variable "instance_type" {
  type    = string
  default = ""
}

variable "desired_capacity" {
  type    = string
  default = ""
}

variable "max_size" {
  type    = string
  default = ""
}

variable "min_size" {
  type    = string
  default = ""
}


