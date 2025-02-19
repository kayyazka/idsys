
provider "alicloud" {
  region  = var.alicloud_region
  profile = "development"
}


resource "alicloud_nat_gateway" "main" {
    count                         = length(var.vswitch_id)
    vpc_id                        = var.vpc_id
    nat_gateway_name              = format("%s-nat-gateway", var.environment)
    description                   = "NAT Gateway"
    nat_type                      = "Enhanced" # Options: "Enhanced" or "Basic"
    vswitch_id                    = var.vswitch_id[count.index]
    payment_type                  = "PayAsYouGo"

}

resource "alicloud_eip" "eip" {
  bandwidth                     = var.bandwidth
  internet_charge_type          = var.internet_charge_type
  payment_type                  = var.payment_type
  count                         = var.count_eip
  address_name                  = format("%s-%s-%s-eip-%d", var.environment, var.project, var.address_name, count.index)

}



resource "alicloud_eip_association" "main" {
  count         = var.count_eip
  allocation_id = alicloud_eip.eip[count.index].id
  instance_id   = alicloud_nat_gateway.main[count.index].id

}




output "nat_gateway_id" {
  value = [for nat in alicloud_nat_gateway.main : nat.id]
  
}

output "snat_table_ids" {
  value = [for nat in alicloud_nat_gateway.main : nat.snat_table_ids]
  description = "List of SNAT table IDs associated with the NAT Gateways"
}



output "eip_addresses" {
  value = [for eip in alicloud_eip.eip : eip.ip_address]
  description = "List of EIP addresses"
}


output "nat_eip_addresses" {
  value = alicloud_nat_gateway.main
  description = "List of EIP addresses"
}


