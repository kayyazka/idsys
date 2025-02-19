variable "alicloud_region" {
  default = ""
}

variable "name" {
  default = ""
}

variable "environment" {
  default = ""
}

variable "nat_gateway_count" {
  default = ""
}

variable "eip_bind_mode" {
  default = ""
}


variable "eip_count" {
  default = ""
}

variable "bandwidth" {
  type        = number
  default     = 5
}

variable "internet_charge_type" {
  default     = ""
}

variable "address_name" {
  default     = ""
}

variable "project" {
  default = ""
}

variable "payment_type" {
  default     = ""
}

variable "tags" {
  default     = {}
  type        = map(string)
}

variable "vpc_id" {
  default = ""
}

variable "specification" {
  default = "small"
}

variable "source_vswitch_id" {
  type        = list(string)
  default     = [""]
  description = "List of Availability Zones"
}

# variable "source_vswitch_id" {
#   default     = ""
#   description = "List of Availability Zones"
# }

variable "count_eip" {
  default = ""
}

variable "vswitch_id" {
  type        = list(string)
  default     = []
  description = "List of Availability Zones"
}

variable "access_mode" {
  default = "route"
}

variable "vswitch_cidr" {
  type        = list(string)
  default     = []
  description = "List of Availability Zones"
}

variable "service" {
   # Available options: "Small", "Middle", "Large", or "XLarge"
  default = ""
}





