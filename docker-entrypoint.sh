#!/bin/sh
set -e

# Function to handle signals and gracefully stop Strapi
shutdown() {
  echo "Stopping Strapi gracefully..."
  pm2 stop all
  pm2 delete all
  exit 0
}

# Trap SIGTERM and SIGINT signals to call shutdown function
trap 'shutdown' SIGTERM SIGINT

# Start Strapi using PM2
echo "Starting Strapi server..."
pm2-runtime start npm -- start

# Tail the PM2 logs to keep the container running
tail -f /dev/null
