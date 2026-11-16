const sharp = require('sharp');
const fs = require('fs');

async function analyze() {
  const image = sharp('./preview.png');
  // Let's sample pixel colors at x = 100 (which is in the outer margin) at various Y points
  const raw = await sharp('./preview.png')
    .resize({ width: 294 }) // downscale 10x
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = raw;
  console.log(`Downscaled size: ${info.width}x${info.height}, channels: ${info.channels}`);

  // Let's sample background colors at column 10
  const sampledColors = [];
  for (let y = 0; y < info.height; y += Math.floor(info.height / 20)) {
    const idx = (y * info.width + 10) * info.channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    sampledColors.push({ y: y * 10, hex: `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}` });
  }
  console.log('Sampled outer background colors:', sampledColors);
}

analyze();

