# Development Guide - Hot Reloading Setup

## 🚀 **Hot Reloading is Now Configured!**

Your Vue application now has automatic hot reloading set up. When you make changes to Vue components, they will automatically update in the browser without needing to run build commands.

## 📋 **How to Start Development**

### **Option 1: Using the Development Script (Recommended)**
```bash
# Start both Laravel and Vite servers
./dev.sh
```

### **Option 2: Using npm Scripts**
```bash
# Start both servers with concurrently
npm run dev:full

# Or start them separately in different terminals
npm run dev          # Terminal 1: Vite server
php artisan serve    # Terminal 2: Laravel server
```

### **Option 3: Manual Start**
```bash
# Terminal 1: Start Vite development server
npm run dev

# Terminal 2: Start Laravel server
php artisan serve --host=0.0.0.0 --port=8000
```

## 🔄 **How Hot Reloading Works**

### **What Gets Auto-Updated:**
- ✅ **Vue Components** - Changes to `.vue` files
- ✅ **JavaScript** - Changes to `.js` files
- ✅ **CSS** - Changes to `.css` files
- ✅ **Templates** - Changes to Vue templates

### **What Doesn't Get Auto-Updated:**
- ❌ **Laravel PHP** - Changes to PHP files
- ❌ **Database** - Database changes
- ❌ **Configuration** - `.env` file changes

## 🌐 **Access Your Application**

- **Main App**: `http://localhost:8000`
- **Vite Dev Server**: `http://localhost:5173` (for assets)
- **Laravel API**: `http://localhost:8000/api`

## 🛠️ **Development Workflow**

### **1. Start Development Servers**
```bash
./dev.sh
```

### **2. Make Changes to Vue Components**
- Edit any `.vue` file in `resources/js/components/`
- Changes will automatically appear in browser
- No need to run `npm run build`

### **3. Make Changes to Styles**
- Edit CSS files in `resources/css/`
- Changes will automatically appear in browser

### **4. Make Changes to Laravel Backend**
- Edit PHP files in `app/`, `routes/`, etc.
- Refresh browser to see changes

## 🔧 **Troubleshooting**

### **If Hot Reloading Stops Working:**
```bash
# Stop all servers (Ctrl+C)
# Restart development servers
./dev.sh
```

### **If Vite Server Won't Start:**
```bash
# Check if port 5173 is available
lsof -i :5173

# Kill any process using port 5173
kill -9 $(lsof -t -i:5173)

# Restart Vite
npm run dev
```

### **If Laravel Server Won't Start:**
```bash
# Check if port 8000 is available
lsof -i :8000

# Kill any process using port 8000
kill -9 $(lsof -t -i:8000)

# Restart Laravel
php artisan serve
```

## 📁 **File Structure for Development**

```
resources/
├── js/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.vue      # 🔄 Auto-updates
│   │   │   └── Register.vue   # 🔄 Auto-updates
│   │   ├── Dashboard.vue      # 🔄 Auto-updates
│   │   ├── Exchange.vue       # 🔄 Auto-updates
│   │   ├── Marketplace.vue    # 🔄 Auto-updates
│   │   └── MyAsset.vue        # 🔄 Auto-updates
│   ├── router/
│   │   └── index.js           # 🔄 Auto-updates
│   ├── store/
│   │   └── modules/
│   │       └── auth.js        # 🔄 Auto-updates
│   └── app.js                 # 🔄 Auto-updates
├── css/
│   └── app.css                # 🔄 Auto-updates
└── views/
    └── app.blade.php          # ❌ Manual refresh needed
```

## 🎯 **Best Practices**

### **For Vue Development:**
1. **Keep Vite running** - Don't stop the `npm run dev` process
2. **Edit Vue files** - Changes will auto-update
3. **Check browser console** - For any errors
4. **Use Vue DevTools** - For debugging

### **For Laravel Development:**
1. **Keep Laravel server running** - Don't stop `php artisan serve`
2. **Edit PHP files** - Refresh browser to see changes
3. **Check Laravel logs** - `storage/logs/laravel.log`

## 🚀 **Production Build**

When you're ready to deploy:

```bash
# Build for production
npm run build

# The built files will be in public/build/
```

## 📱 **Testing Your Changes**

1. **Start development servers**: `./dev.sh`
2. **Open browser**: `http://localhost:8000`
3. **Edit a Vue component** (e.g., `Login.vue`)
4. **Save the file**
5. **Watch browser auto-update** - No refresh needed!

## 🎉 **You're All Set!**

Your development environment is now configured for maximum productivity:
- ✅ **Hot Reloading** - Automatic updates
- ✅ **Fast Development** - No manual builds
- ✅ **Easy Debugging** - Vue DevTools support
- ✅ **Full Stack** - Laravel + Vue working together

Happy coding! 🚀

