const sharp = require('sharp');

async function findHeroCard() {
  const { data, info } = await sharp('./screenshot_sections/slice_0.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let y = 1250; y < 1600; y += 2) {
    const idx = (y * info.width + 1470) * info.channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    if (r > 80 || g > 80 || b > 80) {
      console.log(`Hero image container starts at y=${y} in slice_0: rgb(${r},${g},${b})`);
      break;
    }
  }

  // Also let's find the bottom of hero card in slice_1
  const s1 = await sharp('./screenshot_sections/slice_1.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let y = 1500; y < 2000; y += 2) {
    const idx = (y * s1.info.width + 1470) * s1.info.channels;
    const r = s1.data[idx], g = s1.data[idx+1], b = s1.data[idx+2];
    if (r < 50 && g < 50 && b < 50) {
      console.log(`Hero image container ends at y=${y} in slice_1: rgb(${r},${g},${b})`);
      break;
    }
  }
}

findHeroCard();

