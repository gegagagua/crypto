# Node.js Version Guide

## 🎯 Recommended Setup (Current)

### Production & Development
- **Node Version**: 18 LTS or 20 LTS (recommended)
- **Vite**: 7.x (latest)
- **Laravel Vite Plugin**: 2.x (latest)

## 📦 Current Configuration

```json
{
  "engines": {
    "node": ">=18.0.0"
  },
  "devDependencies": {
    "vite": "^7.0.4",
    "laravel-vite-plugin": "^2.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

## ✅ Build Results (Node 20)

```
vite v7.1.9 building for production...
✓ 74 modules transformed
✓ public/build/assets/app.css  52.76 kB │ gzip: 11.07 kB
✓ public/build/assets/app.js  269.15 kB │ gzip: 79.99 kB
✓ built in 886ms
```

## 🚀 Installation

### Using Latest Node (Recommended)

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
```

## 📋 Node Version Support

| Node Version | Status | Vite Version | Notes |
|--------------|--------|--------------|-------|
| 16.x | ⚠️ Deprecated | 5.x | End of Life |
| 17.x | ⚠️ Not Recommended | 5.x | Use Node 18+ |
| 18.x | ✅ **Recommended** | 7.x | LTS until 2025 |
| 20.x | ✅ **Best** | 7.x | LTS until 2026 |
| 22.x | ✅ Supported | 7.x | Latest |

## 🔧 For Node 17.9.1 Server (Legacy)

If your server only has Node 17.9.1, see `NODE_COMPATIBILITY.md` for downgrade instructions.

### Quick Downgrade for Node 17:

```bash
# Update package.json versions
# vite: "^5.4.11"
# laravel-vite-plugin: "^1.0.5"

# Install
npm install --legacy-peer-deps

# Build
npm run build
```

## 🎯 Deployment Recommendations

### Option 1: Upgrade Node on Server (Best)
```bash
# Using nvm
nvm install 20
nvm use 20
nvm alias default 20

# Verify
node --version  # Should show v20.x.x
```

### Option 2: Use Node 17 (If upgrade not possible)
See `DEPLOYMENT_NODE17.md` for full instructions.

## 📝 Current Setup Summary

- ✅ **Development**: Node 18+ with Vite 7.x
- ✅ **Production**: Node 18+ recommended
- ✅ **Build**: Fast and optimized
- ✅ **Hot Module Replacement**: Working
- ✅ **All features**: Fully supported

## 🔄 Switching Between Versions

### To Latest (Current)
```bash
# package.json
"vite": "^7.0.4"
"laravel-vite-plugin": "^2.0.0"
"engines": { "node": ">=18.0.0" }

# Install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### To Node 17 Compatible
```bash
# package.json
"vite": "^5.4.11"
"laravel-vite-plugin": "^1.0.5"
"engines": { "node": ">=16.0.0" }

# Install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

## ✨ Benefits of Node 18+

- ✅ Better performance
- ✅ Latest Vite features
- ✅ Faster builds
- ✅ Better error messages
- ✅ Native fetch API
- ✅ Improved ESM support
- ✅ Long-term support

## 📞 Support

**Current configuration works with:**
- ✅ Node 18.x (LTS)
- ✅ Node 20.x (LTS) - **Recommended**
- ✅ Node 22.x (Latest)

**For Node 17.9.1 support:**
- See `NODE_COMPATIBILITY.md`
- See `DEPLOYMENT_NODE17.md`
