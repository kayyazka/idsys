#!/bin/bash

# Wait for Jenkins to start
sleep 60

# Execute Jenkins CLI command
docker exec jenkins java -jar /usr/share/jenkins/jenkins-cli.jar -s http://localhost:8080/ -auth admin:admin install-plugin $(cat /usr/share/jenkins/ref/plugins.txt)
