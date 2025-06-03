 provider "aws" {
  region  = var.aws_region
  profile = "development"
  }
  
 resource "aws_vpc" "main" {                
    cidr_block       = var.vpc_cidr    
    instance_tenancy = "default"
    enable_dns_hostnames = "true"
 
 }

 # Create Internet Gateway and attach it to VPC
 resource "aws_internet_gateway" "igw" {    
    vpc_id =  aws_vpc.main.id     
 
 }

#Route table for Public Subnet's
 resource "aws_route_table" "public_route_table" {    
    vpc_id  =  aws_vpc.main.id
    
 }

 resource "aws_route" "public_route" {
  route_table_id            = aws_route_table.public_route_table.id
  destination_cidr_block    = "0.0.0.0/0"
  gateway_id                = aws_internet_gateway.igw.id
}
 
 #Route table for Private Subnet's
 resource "aws_route_table" "private_route_table" {   
    vpc_id = aws_vpc.main.id
    count   = length(var.private_subnets)
  
 }
 
 resource "aws_route" "private_route" {
      count                     = length(var.private_subnets) 
      route_table_id            = aws_route_table.private_route_table[count.index].id
      destination_cidr_block    = "0.0.0.0/0"
      nat_gateway_id            = element(var.nat_gateway_id, count.index % length(var.nat_gateway_id))
       
}
 #Route table Association with Public Subnet's
 resource "aws_route_table_association" "public_route_tableassociation" {
      count = length(var.public_subnets)
      subnet_id = aws_subnet.publicsubnets[count.index].id
      route_table_id = aws_route_table.public_route_table.id
 }
 
 #Route table Association with Private Subnet's
 resource "aws_route_table_association" "private_route_tableTassociation" {
      count = length(var.private_subnets)
      subnet_id = aws_subnet.privatesubnets[count.index].id
      route_table_id = aws_route_table.private_route_table[count.index].id
 }
 resource "aws_eip" "natIP" {
      count = length(var.public_subnets)
      domain = "vpc"
 }
 
 #Creating the NAT Gateway using subnet_id and allocation_id
 resource "aws_nat_gateway" "nat_gw" {
      allocation_id = aws_eip.natIP[count.index].id
      subnet_id = element(var.nat_gateway_publicsubnet_id, count.index % length(var.nat_gateway_publicsubnet_id))

      depends_on = [aws_internet_gateway.igw]

      count = length(var.nat_gateway_publicsubnet_id)

 }

 # Create a Public Subnets.
 resource "aws_subnet" "publicsubnets" {  
   vpc_id                   = aws_vpc.main.id
   count                    = length(var.public_subnets)
   cidr_block               = var.public_subnets[count.index]  
   availability_zone       = element(var.availability_zones, count.index) 
   map_public_ip_on_launch  = true
    
 }

 # Create a Private Subnet                  
 resource "aws_subnet" "privatesubnets" {

   vpc_id             =  aws_vpc.main.id
   count              = length(var.private_subnets)
   cidr_block         = var.private_subnets[count.index]  
   availability_zone  = element(var.availability_zones, count.index)  
     
 }
 
output "vpc_id" {
  value = aws_vpc.main.id
}

output "aws_internet_gateway_id" {
  value = aws_internet_gateway.igw.id
}

output "aws_nat_gateway_ip" {
  value = aws_nat_gateway.nat_gw.*.public_ip
}

output "public_subnets" {
  value = aws_subnet.publicsubnets.*.id
}

output "private_subnets" {
  value = aws_subnet.privatesubnets.*.id
}

