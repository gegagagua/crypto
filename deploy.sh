#!/bin/bash

# Deployment script for Node 17.9.1 server
# Usage: ./deploy.sh

set -e  # Exit on error

echo "🚀 Starting deployment for Node 17.9.1..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node version
NODE_VERSION=$(node --version)
echo "📌 Node version: $NODE_VERSION"

if [[ ! "$NODE_VERSION" =~ ^v17\. ]] && [[ ! "$NODE_VERSION" =~ ^v18\. ]] && [[ ! "$NODE_VERSION" =~ ^v20\. ]]; then
    echo -e "${RED}⚠️  Warning: Node version $NODE_VERSION may not be compatible${NC}"
    echo -e "${YELLOW}Recommended: Node 17.9.1 or higher${NC}"
fi

echo ""

# Clean old dependencies
echo "🧹 Cleaning old dependencies..."
rm -rf node_modules package-lock.json
echo -e "${GREEN}✅ Cleaned${NC}"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Build assets
echo "🔨 Building assets..."

# Try normal build first
if npm run build 2>/dev/null; then
    echo -e "${GREEN}✅ Build successful (normal mode)${NC}"
elif NODE_OPTIONS=--openssl-legacy-provider npm run build; then
    echo -e "${GREEN}✅ Build successful (legacy OpenSSL mode)${NC}"
else
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo ""

# Verify build
if [ -d "public/build" ]; then
    echo -e "${GREEN}✅ Build directory exists${NC}"
    echo "📁 Build contents:"
    ls -lh public/build/ | head -10
    echo ""
    
    # Check manifest
    if [ -f "public/build/manifest.json" ]; then
        echo -e "${GREEN}✅ Manifest file exists${NC}"
    else
        echo -e "${YELLOW}⚠️  Warning: manifest.json not found${NC}"
    fi
else
    echo -e "${RED}❌ Build directory not found!${NC}"
    exit 1
fi

echo ""

# Laravel optimizations
echo "⚡ Running Laravel optimizations..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
echo -e "${GREEN}✅ Laravel optimized${NC}"
echo ""

# Generate Swagger docs
echo "📚 Generating API documentation..."
php artisan l5-swagger:generate
echo -e "${GREEN}✅ Swagger docs generated${NC}"
echo ""

echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "  1. Make sure your web server is configured"
echo "  2. Point document root to: public/"
echo "  3. Access your app at: $APP_URL"
echo ""
echo "API Documentation: $APP_URL/api/documentation"
