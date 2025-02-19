provider "google" {
  project = var.project
  region  = var.region
}

resource "google_compute_disk" "additional_disk" {
  count   = var.create_extra_disk ? var.count_instance: 0 
  name    = format("%s-%d", var.instance_name, count.index + var.count_start)
  type    = var.type_additional_disk
  size    = var.additional_disk
  zone    = element(var.zone, count.index)
  
}

#### variabel create_extra_disk for enable attched disk ###
resource "google_compute_attached_disk" "attached_disk" {
  count     = var.create_extra_disk ? var.count_instance: 0 
  disk      = element(google_compute_disk.additional_disk.*.self_link, count.index)
  instance  = element(google_compute_instance.vm.*.self_link, count.index)
  zone      = element(var.zone, count.index)
  lifecycle {
    ignore_changes = []
  }

}

resource "google_compute_address" "static" {
  name      = format("%s-%s-%s", var.environment, var.instance_name,  var.count_start)

}

resource "google_compute_instance" "vm" {
  name                          = format("%s-%s-%d", var.environment, var.instance_name, count.index + var.count_start)
  #name                          = format("%s-%s-%d", var.environment, var.instance_name, count.index)
  count                         = var.count_instance
  machine_type                  = var.machine_type
  zone                          = element(var.zone, count.index)
  allow_stopping_for_update     = true

  ### Tag added to instances for firewall and networking ###
  tags = var.tags

  boot_disk {
    initialize_params {
    #image   = "ubuntu-os-cloud/ubuntu-2004-lts"
    image  = "projects/eventori-308912/global/images/${var.image}"
    size   = var.root_disk
    type   = var.type_root_disk
  }
} 
  
  lifecycle {
    ignore_changes = [attached_disk]
 }

  network_interface {
    subnetwork          = var.subnet
    #subnetwork_project  = var.subnetwork_project 
    network             = var.network      

    ### IP Public access ###
    access_config {
     nat_ip =  google_compute_address.static.address
    }
 }
 
 labels = {
    name                  = format("%s-%s-%d", var.environment, var.instance_name, count.index + var.count_start)
    environment           = var.environment
    service_group         = var.service_group
    service_name          = var.service_name
    service_type          = var.service_type
    skip_alert            = var.skip_alert
  }

   metadata_startup_script = data.template_file.startup_script.rendered

  }

  data "template_file" "startup_script" {
      template = "${file("${format("%s/config/${var.startup_script}", path.module)}")}"
      vars =  {
        }
    }