 provider "aws" {
  region  = var.aws_region
  profile = "development"
  }




resource "aws_db_instance" "db-mysql-rds" {
    identifier                = format("%s-%s", var.environment, var.name)
    vpc_security_group_ids    = var.security_group 
    instance_class            = var.instance_class
    allocated_storage         = var.allocated_storage
    max_allocated_storage     = var.max_allocated_storage
    storage_type              = var.storage_type  
    engine                    = var.engine
    engine_version            = var.engine_version
    skip_final_snapshot       = true
    apply_immediately         = true
    publicly_accessible       = var.publicly_accessible
    db_name                   = var.db_name
    username                  = var.db_username
    password                  = "****"
    db_subnet_group_name      = var.subnet_group_name


}

