const sharp = require('sharp');

async function findHeroTop() {
  const { data, info } = await sharp('./screenshot_sections/slice_0.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Let's check column x = 1470 (center) between y = 1000 and 1600
  for (let y = 1000; y < 1600; y += 2) {
    const idx = (y * info.width + 1470) * info.channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    // Wooden photo has bright tones (r > 150, g > 130, b > 120) or card border
    if (r > 80 || g > 80 || b > 80) {
      console.log(`Hero card starts at y=${y} in slice_0: rgb(${r},${g},${b})`);
      break;
    }
  }
}

findHeroTop();

