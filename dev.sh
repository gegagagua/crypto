#!/bin/bash

# Development script to run both Laravel and Vite servers
echo "🚀 Starting development servers..."

# Start Vite in background
echo "📦 Starting Vite development server..."
npm run dev &
VITE_PID=$!

# Wait a moment for Vite to start
sleep 3

# Start Laravel server
echo "🔧 Starting Laravel development server..."
php artisan serve --host=0.0.0.0 --port=8000 &
LARAVEL_PID=$!

# Function to cleanup on exit
cleanup() {
    echo "🛑 Stopping servers..."
    kill $VITE_PID 2>/dev/null
    kill $LARAVEL_PID 2>/dev/null
    exit
}

# Trap Ctrl+C
trap cleanup INT

echo "✅ Development servers started!"
echo "🌐 Laravel: http://localhost:8000"
echo "⚡ Vite: http://localhost:5173"
echo "🔄 Hot reloading is enabled - changes will auto-update!"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for both processes
wait

