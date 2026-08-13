import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Automatic asset sync for JJGM & CO website
const rootDir = __dirname;
const publicDir = path.join(rootDir, 'public');
const logoSource = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\f0e366ca-12fc-4fe3-ab1c-95239378ddac\\media__1786472037489.png';
const almondSourceDir = path.join(rootDir, 'almond animation assets');
const productSourceDir = path.join(rootDir, 'product images');

const almondTargetDir = path.join(publicDir, 'assets', 'almond-sequence');
const productTargetDir = path.join(publicDir, 'products');

try {
  fs.mkdirSync(almondTargetDir, { recursive: true });
  fs.mkdirSync(productTargetDir, { recursive: true });

  if (fs.existsSync(logoSource)) {
    fs.copyFileSync(logoSource, path.join(publicDir, 'logo.png'));
  }

  if (fs.existsSync(almondSourceDir)) {
    const files = fs.readdirSync(almondSourceDir);
    for (const file of files) {
      const src = path.join(almondSourceDir, file);
      const dest = path.join(almondTargetDir, file);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
      }
    }
  }

  if (fs.existsSync(productSourceDir)) {
    const files = fs.readdirSync(productSourceDir);
    for (const file of files) {
      const src = path.join(productSourceDir, file);
      const dest = path.join(productTargetDir, file);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
      }
    }
  }
} catch (err) {
  console.error('Asset sync error:', err);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
