provider "alicloud" {
  region = var.alicloud_region
  profile = "development"
}

resource "alicloud_vpc" "main" {
  cidr_block = var.vpc_cidr
  vpc_name   = format("%s-%s", var.environment, var.name)
  description = "VPC for ${var.environment}"


}

data "alicloud_zones" "main" {
  available_resource_creation = "VSwitch"
}

resource "alicloud_vswitch" "main" {
  count         = 3
  vpc_id        = alicloud_vpc.main.id
  cidr_block    = var.vswitch_cidr[count.index]
  zone_id       = data.alicloud_zones.main.zones[count.index].id
  vswitch_name  = format("%s-shared-vswitch-%s", var.environment,data.alicloud_zones.main.zones[count.index].id)

}


output "vpc_id" {
  value = alicloud_vpc.main.id
}


output "vswitch_names_and_ips" {
  value = [
    for vswitch in alicloud_vswitch.main : {
      name        = vswitch.vswitch_name
      cidr_block  = vswitch.cidr_block
      id          = vswitch.id
    }
  ]
  description = "List of VSwitch names and their corresponding CIDR blocks (IP addresses)"
}

output "zone_names" {
  value = [for zone in data.alicloud_zones.main.zones : zone.id]
}
