const sharp = require('sharp');

async function findLime() {
  const { data, info } = await sharp('./screenshot_sections/slice_2.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let y = 0; y < info.height; y += 10) {
    for (let x = 0; x < info.width; x += 10) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      if (r > 180 && g > 220 && b < 100) {
        console.log(`Found lime in slice_2 at x=${x}, y=${y}: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
        return;
      }
    }
  }
}

findLime();

