#### Create Network ####
resource "google_compute_network" "vpc" {
  name                    = var.vpc_name
  project                 = var.project
  routing_mode            = "GLOBAL"
  auto_create_subnetworks = false
}
resource "google_compute_subnetwork" "private" {
  name                      = var.subnet_name
  project                   = var.project
  ip_cidr_range             = var.ip_cidr_range
  region                    = var.region
  private_ip_google_access  = true
  network                   = google_compute_network.vpc.self_link 

  secondary_ip_range {
    range_name              = var.secondary_ip_range_name
    ip_cidr_range           = var.secondary_ip_ranges
  }

  secondary_ip_range {
    range_name              = var.service_ip_range_name
    ip_cidr_range           = var.service_ip_range
  }
}

###### Create a cloud router  ######
resource "google_compute_router" "router" {
  name                    = var.router_name
  project                 = var.project
  region                  = var.region
  network                 = google_compute_network.vpc.self_link
}
###### Create a cloud NAT ######
resource "google_compute_router_nat" "nat" {
  name                                = var.nat_name
  project                             = var.project
  region                              = var.region
  router                              = google_compute_router.router.name
  nat_ip_allocate_option              = "AUTO_ONLY"
  source_subnetwork_ip_ranges_to_nat  = "LIST_OF_SUBNETWORKS"
  
  
  depends_on = [google_compute_subnetwork.private]
  
  subnetwork {
    name                     = google_compute_subnetwork.private.self_link

    source_ip_ranges_to_nat = ["ALL_IP_RANGES"]
  }
  
  subnetwork {
    name                     = "subnet-prod-infra"

    source_ip_ranges_to_nat = ["ALL_IP_RANGES"]
  }

  subnetwork {
    name                     = "subnet-prod-frontend"

    source_ip_ranges_to_nat = ["ALL_IP_RANGES"]
  }

  subnetwork {
    name                     = "subnet-prod-backend"

    source_ip_ranges_to_nat = ["ALL_IP_RANGES"]
  }


  subnetwork {
    name                     = "subnet-prod-db"

    source_ip_ranges_to_nat = ["ALL_IP_RANGES"]
  }
  
  log_config {
    enable = true
    filter = "ERRORS_ONLY"
  }
}

resource "google_compute_firewall" "rules" {
    project     = var.project
    name        = var.firewall_name
    #network = google_compute_network.vpc.name
    network     = var.vpc_name
    description = "Creates firewall rule"
    
    allow {
      protocol = "icmp"
    }

    allow {
      protocol = "tcp"
      ports    = ["22", "80", "443", "8080","22122"]
    }
    
    source_ranges = [ "0.0.0.0/0"]
}