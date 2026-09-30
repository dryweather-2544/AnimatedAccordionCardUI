@echo off
REM Production Build Script for Static Presentation
REM This creates a version that will NEVER auto-refresh

echo ==========================================
echo Building Static Production Version...
echo ==========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo WARNING: node_modules not found. Installing dependencies first...
    call npm install
    if errorlevel 1 call pnpm install
    echo.
)

REM Run the production build
echo Building production bundle...
call npm run build
if errorlevel 1 call pnpm build

REM Check if build was successful
if exist "dist" (
    echo.
    echo ==========================================
    echo BUILD SUCCESSFUL!
    echo ==========================================
    echo.
    echo Your static files are in: .\dist\
    echo Main file: .\dist\index.html
    echo.
    echo TO USE FOR PRESENTATIONS:
    echo    1. Open: .\dist\index.html in your browser
    echo    2. Bookmark the page ^(Ctrl + D^)
    echo    3. It will NEVER auto-refresh
    echo    4. Works 100%% offline
    echo.
    echo TO SHARE:
    echo    - Zip the entire 'dist' folder
    echo    - Send to anyone
    echo    - They just open index.html
    echo.
    echo TO HOST ONLINE:
    echo    - Upload 'dist' folder to any web host
    echo    - Works on Netlify, Vercel, GitHub Pages, etc.
    echo.
    
    set /p REPLY="Open the static version now? (y/n) "
    if /i "%REPLY%"=="y" (
        start dist\index.html
        echo Opened in browser!
    )
    
    echo.
    echo ==========================================
    echo Ready for your presentation!
    echo ==========================================
) else (
    echo.
    echo Build failed. Check the error messages above.
    exit /b 1
)

pause
