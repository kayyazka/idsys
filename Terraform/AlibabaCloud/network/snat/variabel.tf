variable "alicloud_region" {
  default = ""
}



variable "snat_table_id" {
  type        = list(string)
  default     = [""]
  description = "List of SNAT table IDs"
}

variable "source_vswitch_id" {
  type        = list(string)
  default     = [""]
  description = "List of source vswitch IDs"
}

variable "snat_ip" {
  type        = list(string)
  default     = [""]
  description = "List of EIP addresses for NAT gateway"
}

