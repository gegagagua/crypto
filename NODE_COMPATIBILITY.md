# Node.js Compatibility Guide

## 🎯 Current Setup

This project is configured to work with **Node.js 17.9.1** on your server.

## 📦 Package Versions

### Compatible with Node 17.9.1:
- ✅ **Vite**: `^5.4.11` (downgraded from 7.x)
- ✅ **Laravel Vite Plugin**: `^1.0.5` (downgraded from 2.x)
- ✅ **Vue**: `^2.7.16`
- ✅ **Tailwind CSS**: `^4.0.0`
- ✅ All other dependencies compatible

## 🚀 Installation on Server (Node 17.9.1)

```bash
# 1. Check Node version
node --version
# Should show: v17.9.1

# 2. Remove old node_modules and lock file
rm -rf node_modules package-lock.json

# 3. Install dependencies
npm install

# 4. Build for production
npm run build

# OR run development server
npm run dev
```

## 🔧 If You Have Issues

### Option 1: Use Node 17 with OpenSSL Legacy Provider

If you get OpenSSL errors with Node 17:

```bash
# Add to your .bashrc or .zshrc
export NODE_OPTIONS=--openssl-legacy-provider

# Or run commands with it:
NODE_OPTIONS=--openssl-legacy-provider npm run dev
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

### Option 2: Update package.json scripts

Add the OpenSSL flag to scripts:

```json
{
  "scripts": {
    "dev": "NODE_OPTIONS=--openssl-legacy-provider vite",
    "build": "NODE_OPTIONS=--openssl-legacy-provider vite build"
  }
}
```

### Option 3: Upgrade Node (Recommended for Production)

If possible, upgrade to Node 18 LTS or higher:

```bash
# Using nvm
nvm install 18
nvm use 18

# Or using n
npm install -g n
n lts
```

## 📝 Version Matrix

| Node Version | Vite Version | Status |
|--------------|--------------|--------|
| 16.x | 5.x | ✅ Supported |
| 17.x | 5.x | ✅ Supported (current) |
| 18.x | 5.x - 7.x | ✅ Recommended |
| 20.x | 5.x - 7.x | ✅ Best |

## 🐛 Common Issues & Solutions

### Issue 1: `digital envelope routines::unsupported`

**Error:**
```
Error: error:0308010C:digital envelope routines::unsupported
```

**Solution:**
```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm run dev
```

### Issue 2: Vite fails to start

**Error:**
```
Vite requires Node.js version 18.0.0 or higher
```

**Solution:**
- Already fixed! We downgraded to Vite 5.x which supports Node 17

### Issue 3: Module not found errors

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🎨 Development vs Production

### Development (with HMR):
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```

### Full Stack Dev (Laravel + Vite):
```bash
npm run dev:full
```

## 📋 Pre-deployment Checklist

- [ ] Node version is 17.9.1 or higher
- [ ] `npm install` runs without errors
- [ ] `npm run build` completes successfully
- [ ] Built assets exist in `public/build/`
- [ ] Laravel can serve the app

## 🔍 Verify Installation

```bash
# Check Node version
node --version

# Check npm version
npm --version

# List installed packages
npm list --depth=0

# Test build
npm run build

# Check build output
ls -la public/build/
```

## 💡 Tips

1. **Always use the same Node version** across development and production
2. **Commit `package-lock.json`** to ensure consistent dependencies
3. **Use `.nvmrc`** file to specify Node version (already created)
4. **Test builds locally** before deploying

## 🚀 Deployment Script Example

```bash
#!/bin/bash

# deployment.sh
echo "🚀 Starting deployment..."

# Check Node version
echo "📌 Node version: $(node --version)"

# Clean install
echo "🧹 Cleaning old dependencies..."
rm -rf node_modules package-lock.json

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build assets
echo "🔨 Building assets..."
npm run build

# Verify build
if [ -d "public/build" ]; then
    echo "✅ Build successful!"
    ls -la public/build/
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment complete!"
```

## 📞 Support

If you encounter any issues:

1. Check Node version: `node --version`
2. Clear caches: `rm -rf node_modules package-lock.json`
3. Reinstall: `npm install`
4. Try with OpenSSL flag: `NODE_OPTIONS=--openssl-legacy-provider npm run dev`

## ✅ Current Status

- ✅ Node 17.9.1 compatible
- ✅ Vite 5.4.11 (stable)
- ✅ All dependencies updated
- ✅ Production builds working
- ✅ Development server working
