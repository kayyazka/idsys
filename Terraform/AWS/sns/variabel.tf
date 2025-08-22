
variable "region" {
  type    = string
  default = ""
}

variable "name_topic" {
  type    = string
  default = ""
}

variable "environment" {
  type    = string
  default = ""
}


variable "email_addresses" {
  type    = list(string)
  default = [ ]
}
