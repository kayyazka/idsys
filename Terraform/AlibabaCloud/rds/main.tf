provider "alicloud" {
  region  = var.alicloud_region
  profile = "development"
}



resource "alicloud_db_instance" "default" {
  instance_name            = var.name
  db_instance_storage_type = var.db_instance_storage_type
  deletion_protection      = var.deletion_protection
  engine                   = var.engine
  engine_version           = var.engine_version
  force_restart            = var.force_restart
  instance_charge_type     = var.instance_charge_type
  instance_storage         = var.instance_storage
  instance_type            = var.instance_type
  security_ips             = var.security_ips
  security_group_ids       = var.security_group_ids
  security_ip_mode         = var.security_ip_mode
  vswitch_id               = var.vswitch_id

}

resource "alicloud_db_database" "default" {
  instance_id   = alicloud_db_instance.default.id
  name          = var.db_name
  character_set = var.character_set
}

resource "alicloud_db_account" "account" {
  db_instance_id   = alicloud_db_instance.default.id
  account_name     = "username"
  account_password = "password"
}


