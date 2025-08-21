#!/bin/bash
set -e

echo "==> Installing Jenkins plugins..."
jenkins-plugin-cli --plugin-file /usr/share/jenkins/ref/plugins.txt

echo "==> Starting Jenkins..."
exec /usr/local/bin/jenkins.sh
