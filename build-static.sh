#!/bin/bash

# Production Build Script for Static Presentation
# This creates a version that will NEVER auto-refresh

echo "=========================================="
echo "Building Static Production Version..."
echo "=========================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules not found. Installing dependencies first..."
    npm install || pnpm install
    echo ""
fi

# Run the production build
echo "🔨 Building production bundle..."
npm run build || pnpm build

# Check if build was successful
if [ -d "dist" ]; then
    echo ""
    echo "=========================================="
    echo "✅ BUILD SUCCESSFUL!"
    echo "=========================================="
    echo ""
    echo "📁 Your static files are in: ./dist/"
    echo "📄 Main file: ./dist/index.html"
    echo ""
    echo "🎯 TO USE FOR PRESENTATIONS:"
    echo "   1. Open: ./dist/index.html in your browser"
    echo "   2. Bookmark the page (Cmd/Ctrl + D)"
    echo "   3. It will NEVER auto-refresh"
    echo "   4. Works 100% offline"
    echo ""
    echo "📤 TO SHARE:"
    echo "   - Zip the entire 'dist' folder"
    echo "   - Send to anyone"
    echo "   - They just open index.html"
    echo ""
    echo "🌐 TO HOST ONLINE:"
    echo "   - Upload 'dist' folder to any web host"
    echo "   - Works on Netlify, Vercel, GitHub Pages, etc."
    echo ""
    
    # Ask if they want to open it now
    read -p "🚀 Open the static version now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # Try to open in default browser
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            open dist/index.html
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            # Linux
            xdg-open dist/index.html
        elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
            # Windows
            start dist/index.html
        else
            echo "📂 Please manually open: dist/index.html"
        fi
        echo "✅ Opened in browser!"
    fi
    
    echo ""
    echo "=========================================="
    echo "🎉 Ready for your presentation!"
    echo "=========================================="
else
    echo ""
    echo "❌ Build failed. Check the error messages above."
    exit 1
fi
