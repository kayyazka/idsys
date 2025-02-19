variable "aws_region" {
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

variable "vpc_cidr" {
  default = ""
}

variable "public_subnets" {
  type    = list
  default = [] 
}


variable "name_public_subnet" {
  default = ""
}

variable "name_private_subnet" {
  default = ""
}

variable "name_public_route_table" {
  default = ""
}

variable "name_private_route_table" {
  default = ""
}

variable "availability_zones" {
  type        = list(string)
  default     = []
  description = "List of Availability Zones"
}


variable "private_subnets" {
  type    = list
  default = [] 
}

variable "nat_gateway_id" {
  type    = list(string)
  default = []  
}

variable "nat_gateway_publicsubnet_id" {
  type    = list(string)
  default = []  
}