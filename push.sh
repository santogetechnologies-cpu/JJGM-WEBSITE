#!/bin/bash
cd "$(dirname "$0")"
echo "Setting remote..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/santogetechnologies-cpu/JJGM-WEBSITE.git
echo "Remote set:"
git remote -v
echo ""
echo "Staging files..."
git add .
echo ""
echo "Committing layout & overlay updates..."
git commit -m "Remove hero text overlay, fit animation edge-to-edge on wide screens, show Partner With Us card at end of animation" || echo "Nothing new to commit"
echo ""
echo "Pushing to GitHub..."
git push -u origin main --force
echo ""
echo "DONE!"
