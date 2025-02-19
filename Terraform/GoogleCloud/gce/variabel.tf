variable "project" {
  default = ""
}

variable "region" {
  default = ""
}

variable "zone" {
    type        = list(string)
    default = []
}

variable tags {
  description = "Tag added to instances for firewall and networking"
  type        = list(string)
  default     = []
}

variable "subnetwork_project" {
  default = "" 
}

variable "network" {
  default = "" 
}

variable "subnet" {
  default = "" 
}

variable "instance_name" {
  default = ""
}

variable "instance_name_header" {
  default = ""
}
variable "count_start" {
  default = ""
}
variable "count_instance" {
  default = ""
}

variable "machine_type" {
  default = ""
}

variable "image" {
  default = ""
}

variable "root_disk" {
  default = ""
}

variable "type_root_disk" {
  default = ""
}

variable "create_extra_disk" {
  description = "variabel create_extra_disk for enable attched disk"
  default = "false"
}

variable "additional_disk" {
  default = ""
}

variable "environment" {
  default = ""
}

variable "service_group" {
  default = ""
}
variable "service_name" {
  default = ""
}
variable "service_type" {
  default = ""
}
variable "skip_alert" {
  default = ""
}
variable "type_additional_disk" {
  default = ""
}
variable "startup_script" {
  default     = ""
}
