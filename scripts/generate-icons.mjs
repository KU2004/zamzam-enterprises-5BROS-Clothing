import { mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
const { writeFile } = await import('node:fs/promises');
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const sourceSvg = path.join(projectRoot, 'src/assets/logo.svg');
const publicDir = path.join(projectRoot, 'public');

if (!existsSync(sourceSvg)) {
  throw new Error(`Logo source not found: ${sourceSvg}`);
}

mkdirSync(publicDir, { recursive: true });

const base = sharp(sourceSvg);
const pngBuffer = await base.clone().resize(32, 32).png().toBuffer();
const icoBuffer = await pngToIco([{ buffer: pngBuffer, size: 32 }]);

await Promise.all([
  base.clone().resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png')),
  base.clone().resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png')),
  base.clone().resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png')),
  base.clone().resize(192, 192).png().toFile(path.join(publicDir, 'android-chrome-192x192.png')),
  base.clone().resize(512, 512).png().toFile(path.join(publicDir, 'android-chrome-512x512.png')),
  base.clone().resize(512, 512).png().toFile(path.join(publicDir, 'icon.png')),
  base.clone().resize(1024, 1024).png().toFile(path.join(publicDir, 'logo.png')),
  writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer),
]);

console.log('Generated favicon assets in public/');
