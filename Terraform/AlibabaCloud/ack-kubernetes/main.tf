provider "alicloud" {
  region  = "ap-southeast-5"
  profile = "development"
}


resource "alicloud_cs_managed_kubernetes" "main" {
  name                              = format("%s-k8s", var.environment )
  cluster_spec                      = var.cluster_spec
  new_nat_gateway                   = false
  slb_internet_enabled              = var.api_slb_internet_enabled
  vswitch_ids                       = var.vswitch_ids
  pod_cidr                          = var.pod_cidr 
  service_cidr                      = var.service_cidr
  version                           = var.k8s_version 
  security_group_id                 = alicloud_security_group.sg.id

  # Specify Flannel as the network plugin
  addons {
    name = "flannel"

  }

}

data "alicloud_enhanced_nat_available_zones" "enhanced" {
}

data "alicloud_instance_types" "cloud_efficiency" {
  availability_zone                 = data.alicloud_enhanced_nat_available_zones.enhanced.zones.0.zone_id
  cpu_core_count                    = 4
  memory_size                       = 8
  kubernetes_node_role              = "Worker"
  system_disk_category              =  var.system_disk_category 
}

resource "alicloud_cs_kubernetes_node_pool" "node_pool" {
  cluster_id                        = alicloud_cs_managed_kubernetes.main.id
  vswitch_ids                       = var.vswitch_ids
  instance_types                    = var.instance_types
  node_pool_name                    = format("%s-node-pool-%s", var.environment, )
  system_disk_category              =  var.system_disk_category 
  system_disk_size                  = 100
  key_name                          = "ssh-key"
  scaling_policy                    = "release" 

   scaling_config {
    min_size                        = var.node_min_size 
    max_size                        = var.node_max_size 
    type                            = "cpu"
    is_bond_eip                     = false   
    enable                          = true    

   }

}

resource "alicloud_security_group" "sg" {
  security_group_name         = format("%s-k8s-sg-%s", var.environment, )
  vpc_id                      = var.vpc_id
  description                 = "Security group for Kubernetes cluster"
}

resource "alicloud_security_group_rule" "allow_ssh_ingress" {
    type              = "ingress"
    ip_protocol       = "tcp"
    nic_type          = "intranet"
    policy            = "accept"
    port_range        = "22/22"
    priority          = 1
    security_group_id = alicloud_security_group.sg.id
    cidr_ip           = "172.31.0.0/16" 
}

resource "alicloud_security_group_rule" "allow_k8s_api" {
  security_group_id = alicloud_security_group.sg.id
  type             = "ingress"
  ip_protocol      = "tcp"
  port_range       = "6443/6443"
  policy          = "accept"
  cidr_ip         = "0.0.0.0/0"  
  priority        = 1
}


# Egress Rule: Allow all outbound traffic
resource "alicloud_security_group_rule" "allow_all_egress" {
  type              = "egress"
  ip_protocol       = "all"
  port_range        = "-1/-1"
  security_group_id = alicloud_security_group.sg.id
  cidr_ip           = "0.0.0.0/0"
}

# Create a cluster permission for user.
resource "alicloud_cs_kubernetes_permissions" "admin" {

  for_each = toset(var.ram_users)

  uid = each.value

  permissions {
    cluster     = alicloud_cs_managed_kubernetes.main.id
    role_type   = "cluster"
    role_name   = "admin"
    namespace   = ""
    is_custom   = false
    is_ram_role = false
  }
}



# Output the Kubernetes Cluster Name
output "k8s_cluster_name" {
  value = alicloud_cs_managed_kubernetes.main.name
}

output "kubeconfig" {
  value = alicloud_cs_managed_kubernetes.main.kube_config
}

output "cluster_id" {
  value = alicloud_cs_managed_kubernetes.main.id
}

output "node_pool_id" {
  value = alicloud_cs_kubernetes_node_pool.node_pool.id
}

output "security_group_id" {
  value = alicloud_security_group.sg.id
}

