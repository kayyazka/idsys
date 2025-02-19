variable "aws_region" {
  default = ""
}

variable "vpc" {
  default = ""
}

variable "kubernetes_version" {
  default = ""
}

variable "name" {
  default = ""
}

variable "environment" {
  default = ""
}

variable "project" {
  default = ""
}

variable "tags" {
  default     = {}
  type        = map(string)
}

variable "name_nodes" {
  default = ""
}


variable "private_availability_zone_1a" {
  default = ""
}

variable "private_availability_zone_1b" {
  default = ""
}

variable "public_availability_zone_1a" {
  default = ""
}

variable "public_availability_zone_1b" {
  default = ""
}

variable "instance_types" {
  type   = list(string)
  default = []
}

variable "instance_types_migrate" {
  type   = list(string)
  default = []
}

variable "subnets" {
  type   = list(string)
  default = []
}
variable "private_subnets" {
  type   = list(string)
  default = []
}

variable "public_subnets" {
  type   = list(string)
  default = []
}

variable "desired_size" {
  default = ""
}

variable "max_size" {
  default = ""
}

variable "min_size" {
  default = ""
}

variable "disk_size" {
  default = ""
}

