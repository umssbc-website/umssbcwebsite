@echo off
REM Starts the site and the local editor, then opens both in your browser.
REM Close the two black windows to stop.
cd /d "%~dp0"
start "UMaine SSC - editor server" cmd /k npm run cms
start "UMaine SSC - site" cmd /k npm run dev
timeout /t 6 /nobreak >nul
start "" http://localhost:4321/
start "" http://localhost:4321/admin/
