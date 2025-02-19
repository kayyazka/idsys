
variable "aws_region" {
  type    = string
  default = ""
}

variable "vpc" {
  type    = string
  default = ""
}

variable "identifier" {
  type    = string
  default = ""
}

variable "publicly_accessible" {
  type    = string
  default = "false"
}

variable "subnet_group_name" {
  type   = string
  default = ""
}

variable "availability_zone" {
  type        = list(string)
  default     = []
  description = "List of Availability Zones"
}
variable "security_group" {
 type    = list(string)
 default = [""]
}

variable "instance_class" {
  type    = string
  default = ""
}


variable "engine" {
 type    = string
 default = ""

} 

variable "engine_version" {
 type    = string
 default = ""
} 

variable "sg_default" {
  type    = string
  default = ""
}

variable "db_name" {
  type    = string
  default = ""
}

variable "db_username" {
  type    =  string
}

variable "db_password" {
  type    = string
  default = ""
  sensitive = true
}

variable "name" {
  type    = string
  default = ""
}

variable "environment" {
  type    = string
  default = ""
}

variable "project" {
  type    = string
  default = ""
}

variable "allocated_storage" {
  type    = string
  default = ""
}

variable "max_allocated_storage" {
  type    = string
  default = ""
}

variable "storage_type" {
  type    = string
  default = ""
}

