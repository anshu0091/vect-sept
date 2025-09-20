@echo off
echo ========================================
echo    Vectorium Deployment Setup
echo ========================================
echo.

echo [1/4] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [2/4] Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo.
echo [3/4] Testing build locally...
echo Starting preview server...
echo Press Ctrl+C to stop the preview and continue
call npm run preview

echo.
echo [4/4] Deployment options:
echo.
echo 🚀 Choose your deployment method:
echo.
echo 1. Vercel (Recommended)
echo    - Run: npm i -g vercel
echo    - Run: vercel login
echo    - Run: vercel --prod
echo.
echo 2. Netlify
echo    - Run: npm i -g netlify-cli
echo    - Run: netlify login
echo    - Run: netlify deploy --prod --dir=dist
echo.
echo 3. Manual upload
echo    - Upload the 'dist' folder to your web server
echo.
echo 📊 Don't forget to:
echo    - Set up Google Analytics (run: npm run setup:ga)
echo    - Configure Google Search Console
echo    - Test all URLs after deployment
echo.
pause
