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
echo "Committing image fixes and clean filenames..."
git commit -m "Fix image filenames and Vercel compatibility" || echo "Nothing new to commit"
echo ""
echo "Pushing to GitHub..."
git push -u origin main --force
echo ""
echo "DONE!"
