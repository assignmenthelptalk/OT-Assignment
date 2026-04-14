import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, 'temp_headers');
const outputDir = path.join(__dirname, '../public/images/headers');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.html'));

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ 
    viewport: { width: 960, height: 480 },
    deviceScaleFactor: 2 
  });

  for (const file of files) {
    const inputPath = `file:///${path.join(inputDir, file).replace(/\\/g, '/')}`;
    const outputPath = path.join(outputDir, file.replace('.html', '.png'));

    console.log(`Processing: ${file}`);
    await page.goto(inputPath, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Allow fonts/images to stabilize
    await page.screenshot({ path: outputPath, type: 'png' });
  }

  await browser.close();
  console.log("All conversions complete. Results are in: " + outputDir);
})();
