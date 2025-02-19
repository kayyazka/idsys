#!/bin/bash
sudo apt-get update -y
sudo timedatectl set-timezone Asia/Jakarta
sudo apt-get install net-tools -y
sudo mkfs -t xfs /dev/xvdf
sudo mkdir /data
sudo mount /dev/xvdf /data
sudo echo "/dev/xvdf  /data xfs  defaults  0  0" >> /etc/fstab
sudo wget https://s3.amazonaws.com/amazoncloudwatch-agent/debian/amd64/latest/amazon-cloudwatch-agent.deb
sudo dpkg -i -E ./amazon-cloudwatch-agent.deb
sudo mv /tmp/config.json /opt/aws/amazon-cloudwatch-agent/bin/config.json
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/opt/aws/amazon-cloudwatch-agent/bin/config.json 
echo " Manageby Terrafom by $(whoami) @ $(date)" | sudo tee /tmp/startup.txt
