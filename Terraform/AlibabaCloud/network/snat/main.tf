provider "alicloud" {
  region  = var.alicloud_region
  profile = "development"
}


 resource "alicloud_snat_entry" "main" {
  count              = length(var.snat_table_id) 
  snat_table_id      = var.snat_table_id[count.index]
  source_vswitch_id  = var.source_vswitch_id[count.index]
  snat_ip            = var.snat_ip[count.index]
}


output "snat_entry_details" {
  value = [
    for snat in alicloud_snat_entry.main : {
      snat_table_id     = snat.snat_table_id
      source_vswitch_id = snat.source_vswitch_id
      snat_ip           = snat.snat_ip
    }
  ]
  description = "Details of all SNAT entries"
}
