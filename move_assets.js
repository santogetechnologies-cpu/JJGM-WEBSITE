const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'almond animation assets');
const targetDir = path.join(__dirname, 'public', 'assets', 'almond-sequence');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(sourceDir)) {
  const files = fs.readdirSync(sourceDir);
  let count = 0;
  for (const file of files) {
    fs.renameSync(path.join(sourceDir, file), path.join(targetDir, file));
    count++;
  }
  console.log(`Successfully moved ${count} images to public/assets/almond-sequence/`);
  
  // Optionally remove the empty old folder
  try {
    fs.rmdirSync(sourceDir);
  } catch (e) {}
} else {
  console.log('Source directory not found. The files might already be in the right place!');
}
