#!/bin/bash

echo "========================================"
echo "    Vectorium Deployment Setup"
echo "========================================"
echo

echo "[1/4] Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo
echo "[2/4] Building for production..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo
echo "[3/4] Testing build locally..."
echo "Starting preview server..."
echo "Press Ctrl+C to stop the preview and continue"
npm run preview

echo
echo "[4/4] Deployment options:"
echo
echo "🚀 Choose your deployment method:"
echo
echo "1. Vercel (Recommended)"
echo "   - Run: npm i -g vercel"
echo "   - Run: vercel login"
echo "   - Run: vercel --prod"
echo
echo "2. Netlify"
echo "   - Run: npm i -g netlify-cli"
echo "   - Run: netlify login"
echo "   - Run: netlify deploy --prod --dir=dist"
echo
echo "3. Manual upload"
echo "   - Upload the 'dist' folder to your web server"
echo
echo "📊 Don't forget to:"
echo "   - Set up Google Analytics (run: npm run setup:ga)"
echo "   - Configure Google Search Console"
echo "   - Test all URLs after deployment"
echo
