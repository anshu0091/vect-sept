@echo off
echo ========================================
echo    Vectorium Vercel Deployment
echo ========================================
echo.

echo [1/6] Cleaning previous builds...
if exist dist rmdir /s /q dist
if exist .vercel rmdir /s /q .vercel
echo ✅ Cleaned

echo.
echo [2/6] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed

echo.
echo [3/6] Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✅ Build successful

echo.
echo [4/6] Verifying build output...
if not exist dist\index.html (
    echo ❌ Build output missing index.html
    pause
    exit /b 1
)
if not exist dist\sitemap.xml (
    echo ❌ Build output missing sitemap.xml
    pause
    exit /b 1
)
if not exist dist\robots.txt (
    echo ❌ Build output missing robots.txt
    pause
    exit /b 1
)
echo ✅ Build output verified

echo.
echo [5/6] Installing Vercel CLI...
call npm install -g vercel
if %errorlevel% neq 0 (
    echo ⚠️  Vercel CLI installation failed, trying alternative...
    call npx vercel --version
    if %errorlevel% neq 0 (
        echo ❌ Cannot access Vercel CLI
        echo Please install manually: npm install -g vercel
        pause
        exit /b 1
    )
)
echo ✅ Vercel CLI ready

echo.
echo [6/6] Deploying to Vercel...
echo.
echo 🚀 Starting deployment...
echo If this is your first time, you'll need to:
echo 1. Login to Vercel
echo 2. Link your project
echo 3. Configure your domain
echo.
call vercel --prod
if %errorlevel% neq 0 (
    echo ❌ Deployment failed
    echo.
    echo Common solutions:
    echo - Run: vercel login
    echo - Run: vercel link
    echo - Check your vercel.json configuration
    pause
    exit /b 1
)

echo.
echo ✅ Deployment successful!
echo.
echo 📊 Next steps:
echo 1. Set up Google Analytics (run: npm run setup:ga)
echo 2. Configure Google Search Console
echo 3. Test your live site
echo 4. Verify all URLs are working
echo.
pause
