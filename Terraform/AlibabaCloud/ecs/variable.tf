variable "vpc_id" {
  default = ""
}



variable "environment" {
  default = ""
}

variable "tags" {
  default     = {}
  type        = map(string)
}


variable "private_vswitch_ids" {
  type   = list(string)
  default = []
}

variable "alicloud_region" {
  default    = "ap-southeast-5" # Indonesia
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

variable "payment_type" {
  default     = ""
}

variable "system_disk_category" {
  default = ""
  
}

variable "system_disk_size" {
  default = ""
  
}

variable "internet_max_bandwidth_out" {
  default = ""
}

variable "instance_name" {
  default = ""
}

variable "instance_type" {
  default = ""
}

variable "image_id" {
  default = ""
}

variable "security_group_ids" {
  default = ""
}

variable "user_data_file" {
  description = "Path to the user-data script file."
  type        = string
  default     = ""
} 

variable "user_data_inline" {
  description = "Inline user-data script content (optional)"
  type        = string
  default     = ""
  
}

variable "count_start" {
  default = ""
}

variable "count_instance" {
  default = ""
}

variable "key_name" {
  default = ""
}

variable "project" {
  default = ""
}

variable "additional_data_disks" {
  description = "List of additional data disks attribute "
  type = list(object({
    size        = number
    category    = string
    description = string
  }))
  default = []
}