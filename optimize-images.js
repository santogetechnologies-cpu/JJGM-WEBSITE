const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const lifestyleDir = path.join(__dirname, 'public', 'lifestyle');

console.log('🔍 Checking lifestyle images...\n');

const files = fs.readdirSync(lifestyleDir);
const jpgFiles = files.filter(f => f.endsWith('.jpg'));

jpgFiles.forEach(file => {
  const filePath = path.join(lifestyleDir, file);
  const stats = fs.statSync(filePath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`${file}: ${sizeMB} MB`);
  
  // If file is larger than 1MB, we should optimize it
  if (stats.size > 1024 * 1024) {
    console.log(`  ⚠️  File too large for Git (${sizeMB} MB)`);
  }
});

console.log('\n💡 Solution: Use ImageMagick or online compressor to reduce image sizes to under 1MB each');
console.log('Alternative: Convert to WebP format for better compression');
