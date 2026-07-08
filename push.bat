@echo off
cd /d "%~dp0"

echo.
echo Pushing Desert Palm Racquet Club website...
echo.

git status

echo.
set /p msg=Commit message: 

if "%msg%"=="" set msg=Update DPRC website

git add .
git commit -m "%msg%"
git push

echo.
echo Done. If Vercel is connected, the website will redeploy automatically.
pause