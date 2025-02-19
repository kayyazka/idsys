variable "profile" {
  type = string
}

variable "project" {
  type = string
}

variable "environment" {
  type = string
}


variable "alicloud_region" {
  type    = string
  default = ""
}

variable "name" {
  type = string
}

variable "db_instance_storage_type" {
  type    = string
  default = "local_ssd"
}

variable "deletion_protection" {
  type    = bool
  default = false
}

variable "engine" {
  type = string
}

variable "engine_version" {
  type = string
}

variable "force_restart" {
  type    = bool
  default = false
}

variable "instance_charge_type" {
  type    = string
  default = "Postpaid"
}

variable "instance_storage" {
  type    = number
  default = 20
}

variable "instance_type" {
  type = string
}

variable "security_ips" {
  type    = list(any)
  default = ["0.0.0.0/0"]
}

variable "security_group_ids" {
  type = list(any)
}

variable "security_ip_mode" {
  type    = string
  default = "normal"
}

variable "tags" {
  default = {}
  type    = map(string)
}

variable "vswitch_id" {
  type        = string
  description = "use comma delimiter (,)"
}

variable "db_name" {
  type        = string
  description = "Name of database"
}

variable "character_set" {
  type = string
}

variable "account_secret_file" {
  type = string
}

variable "backup" {
  type    = bool
  default = false
}

variable "backup_time" {
  type    = string
  default = "00:00Z-01:00Z"
}

variable "backup_days" {
  type    = list(any)
  default = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
}

variable "backup_retention" {
  type        = number
  default     = 3
  description = "number of day"
}
