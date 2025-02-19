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

variable "cluster_spec" {
  default = "ack.pro.small"
}

variable "k8s_version" {
  default = ""
}

variable "system_disk_category" {
  default = ""
}

variable "pod_cidr" {
  default = ""
}

variable "service_cidr" {
  default = ""
}

# variable "version" {
#   default = ""
# }

variable "vswitch_ids" {
  type        = list(string)
  default     = []
  description = "List of Availability Zones"
}

variable "instance_types" {
  type        = list(string)
  default     = []
  description = "List of Availability Zones"
}

variable "eip_count" {
  default = ""
}

variable "node_desired_size" {
  default = ""
}

variable "node_min_size" {
  default = ""
}

variable "node_max_size" {
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

variable "api_slb_internet_enabled" {
  default = true 
}

variable "vswitch_cidr" {
  type        = list(string)
  default     = []
  description = "List of Availability Zones"
}


variable "ram_users" {
  type    = list(string)
  default = [""] 
}



