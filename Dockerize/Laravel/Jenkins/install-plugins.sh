#!/bin/bash
set -e


echo "== Installing Jenkins plugins =="
jenkins-plugin-cli --plugin-file /usr/share/jenkins/ref/plugins.txt

echo "== Installing docker =="
apt-get update  -y 
apt-get install -y docker.io
docker -v

echo "== Starting Jenkins =="
exec /usr/local/bin/jenkins.sh




