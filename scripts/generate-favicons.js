const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = [
  { width: 16, height: 16, name: 'favicon-16x16.png' },
  { width: 32, height: 32, name: 'favicon-32x32.png' },
  { width: 180, height: 180, name: 'apple-touch-icon.png' },
  { width: 192, height: 192, name: 'android-chrome-192x192.png' },
  { width: 512, height: 512, name: 'android-chrome-512x512.png' },
];

async function generateFavicons() {
  const inputFile = path.join(process.cwd(), 'public', 'logo.png');
  
  try {
    // Generate PNG favicons
    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size.width, size.height)
        .toFile(path.join(process.cwd(), 'public', size.name));
      console.log(`Generated ${size.name}`);
    }

    // Generate ICO file (contains 16x16 and 32x32)
    const ico16 = await sharp(inputFile)
      .resize(16, 16)
      .toBuffer();
    
    const ico32 = await sharp(inputFile)
      .resize(32, 32)
      .toBuffer();

    // Use the 32x32 version for favicon.ico
    await sharp(ico32)
      .toFile(path.join(process.cwd(), 'public', 'favicon.ico'));
    
    console.log('Generated favicon.ico');

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 