#### Create Service Account ####
resource "google_service_account" "sa-gke" {
  project       = var.project
  account_id    = var.account_id
  display_name  = "Service Account"
}

#### Create the cluster ####
resource "google_container_cluster" "gke" {
  project            = var.project
  name               = var.cluster_name
  location           = var.location

  network            = var.network
  subnetwork         = var.subnetwork
  node_locations     = var.node_locations
  
  initial_node_count       = var.initial_node_count 
  remove_default_node_pool = true

  release_channel {
    channel  = "STABLE"
  }

  ip_allocation_policy{
      cluster_secondary_range_name = var.secondary_ip_range_name
      services_secondary_range_name = var.service_ip_range_name
  }

  private_cluster_config {
    enable_private_endpoint = false
    enable_private_nodes = true
    master_ipv4_cidr_block = var.master_ipv4_cidr_block
  }

}

resource "google_container_node_pool" "gke-eventori" {
  name                = var.node_pool_name
  cluster             = google_container_cluster.gke.name
  project             = var.project
  location            = var.location
  node_count          = var.node_count
  
  #### Auto scaling Node Worker ####
  autoscaling {  
      min_node_count = var.min_node_count
      max_node_count = var.max_node_count
    }

  max_pods_per_node = var.max_pods_per_node

  management   {
    auto_repair   = true
    auto_upgrade  = true
  }

  node_config {
    machine_type    = var.machine_type
    disk_size_gb    = var.disk_size_gb
    disk_type       = var.disk_type
    image_type      = var.image_type
    labels          = {
        role = var.labels_role
      }
  
    service_account = google_service_account.sa-gke.email
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }
}
