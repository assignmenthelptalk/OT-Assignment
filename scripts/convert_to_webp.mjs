import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const directory = path.join(__dirname, '../public/images/headers');

const files = fs.readdirSync(directory).filter(f => f.endsWith('.png'));

console.log(`Found ${files.length} PNG files to convert...`);

(async () => {
  for (const file of files) {
    const input = path.join(directory, file);
    const output = path.join(directory, file.replace('.png', '.webp'));
    
    console.log(`Converting: ${file} -> ${path.basename(output)}`);
    await sharp(input)
      .webp({ quality: 85 })
      .toFile(output);
  }
  console.log('Conversion complete.');
})();
