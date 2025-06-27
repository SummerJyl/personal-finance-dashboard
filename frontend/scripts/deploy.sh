#!/bin/bash

echo "Starting deploy to GitHub Pages..."

# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages using gh-pages package
npx gh-pages -d dist

echo "Deployment to GitHub Pages complete!"



# /* Execute: chmod +x deploy.sh */

# Run: ./deploy.sh */