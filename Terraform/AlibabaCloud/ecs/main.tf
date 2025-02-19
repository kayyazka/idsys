provider "alicloud" {
  region = var.alicloud_region
  profile = "development"
}
resource "alicloud_instance" "main" {
  count                 = var.count_instance
  instance_name         = var.instance_name
  instance_type         = var.instance_type
  image_id              = var.image_id
  key_name              = var.key_name
  vswitch_id            = element(var.private_vswitch_ids, count.index)
  security_groups       = var.security_group_ids 
  system_disk_category  = var.system_disk_category
  system_disk_size      = var.system_disk_size
  system_disk_name      = format("%s-disk-%s", var.environment, var.instance_name )
  internet_max_bandwidth_out = 0


  dynamic "data_disks" {
    for_each = var.additional_data_disks
    content {
      name        = format("%s-%s-%s-%d", var.environment, var.project, var.instance_name, count.index + var.count_start )
      size        = data_disks.value.size
      category    = data_disks.value.category
      description = data_disks.value.description
    }
  }
}

output "private_ip" {
  value = alicloud_instance.main[*].private_ip
}

output "instance_id" {
  value = alicloud_instance.main[*].id
}