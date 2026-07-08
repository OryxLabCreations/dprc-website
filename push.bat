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

git diff --cached --quiet
if %errorlevel%==0 (
  echo.
  echo No changes to commit.
  echo.
  pause
  exit /b
)

git commit -m "%msg%"
git push

echo.
echo Done. If Vercel is connected, the website will redeploy automatically.
pause