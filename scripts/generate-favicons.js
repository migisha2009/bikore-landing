const sharp = require('sharp');
const path = require('path');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' }
];

async function generateFavicons() {
  try {
    for (const { size, name } of sizes) {
      await sharp('public/favicon.svg')
        .resize(size, size)
        .png()
        .toFile(`public/${name}`);
      console.log(`Generated ${name} (${size}x${size})`);
    }
    
    // Generate favicon.ico (32x32)
    await sharp('public/favicon.svg')
      .resize(32, 32)
      .png()
      .toFile('public/favicon.ico');
    console.log('Generated favicon.ico');
    
    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
