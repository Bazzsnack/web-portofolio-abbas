import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '../public/assets/portfolio');

async function convertToWebp() {
  const files = fs.readdirSync(targetDir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const filePath = path.join(targetDir, file);
      const ext = path.extname(file);
      const newFilePath = path.join(targetDir, file.replace(ext, '.webp'));
      console.log(`Converting ${file} to .webp...`);
      await sharp(filePath).webp().toFile(newFilePath);
      console.log(`Deleting original ${file}...`);
      fs.unlinkSync(filePath);
    }
  }
}

convertToWebp().catch(console.error);
