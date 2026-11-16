const sharp = require('sharp');

async function findLime6() {
  const { data, info } = await sharp('./screenshot_sections/slice_6.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const colors = [];
  for (let y = 0; y < info.height; y += 20) {
    for (let x = 0; x < info.width; x += 20) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      if (r > 180 && g > 220 && b < 100) {
        colors.push(`#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
      }
    }
  }
  console.log(`Found ${colors.length} lime points. Sample:`, colors.slice(0, 5));
}

findLime6();

