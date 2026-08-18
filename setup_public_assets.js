const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const publicDir = path.join(rootDir, 'public');
const logoSource = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\f0e366ca-12fc-4fe3-ab1c-95239378ddac\\media__1786472037489.png';
const almondSourceDir = path.join(rootDir, 'almond animation');
const productSourceDir = path.join(rootDir, 'product images');

// Ensure target directories exist
const almondTargetDir = path.join(publicDir, 'assets', 'almond-sequence');
const productTargetDir = path.join(publicDir, 'products');

fs.mkdirSync(almondTargetDir, { recursive: true });
fs.mkdirSync(productTargetDir, { recursive: true });

// 1. Copy Logo
const targetLogo = path.join(publicDir, 'logo.png');
if (fs.existsSync(logoSource)) {
  fs.copyFileSync(logoSource, targetLogo);
  console.log('Logo copied to public/logo.png');
} else if (!fs.existsSync(targetLogo)) {
  console.warn('Logo source file not found at:', logoSource);
}

// 2. Copy Almond sequence frames
if (fs.existsSync(almondSourceDir)) {
  const files = fs.readdirSync(almondSourceDir);
  let count = 0;
  for (const file of files) {
    fs.copyFileSync(path.join(almondSourceDir, file), path.join(almondTargetDir, file));
    count++;
  }
  console.log(`Copied ${count} frames to public/assets/almond-sequence/`);
} else {
  console.warn('Almond sequence directory not found');
}

// 3. Copy Product Images
if (fs.existsSync(productSourceDir)) {
  const files = fs.readdirSync(productSourceDir);
  let count = 0;
  for (const file of files) {
    fs.copyFileSync(path.join(productSourceDir, file), path.join(productTargetDir, file));
    count++;
  }
  console.log(`Copied ${count} product images to public/products/`);
} else {
  console.warn('Product images directory not found');
}
