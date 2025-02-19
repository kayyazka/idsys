variable "alicloud_region" {
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

variable "vpc_cidr" {
  default = ""
}



variable "vswitch_cidr" {
  type        = list(string)
  default     = []
  description = "List of Availability Zones"
}




