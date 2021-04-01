@echo off
echo # onwin > README.md
git init
git add .
git commit -m "‮"
git branch -M master
git remote add origin https://github.com/Pixelsuft/onwin.git
git push -u origin master