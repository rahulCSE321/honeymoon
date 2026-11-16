const sharp = require('sharp');

async function findEdges() {
  const { data, info } = await sharp('./preview.png')
    .extract({ left: 0, top: 2000, width: 2940, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  let left = 0, right = 2940;
  for (let x = 0; x < info.width; x++) {
    const idx = x * info.channels;
    if (data[idx] > 50 || data[idx+1] > 50 || data[idx+2] > 50) {
      left = x;
      break;
    }
  }
  for (let x = info.width - 1; x >= 0; x--) {
    const idx = x * info.channels;
    if (data[idx] > 50 || data[idx+1] > 50 || data[idx+2] > 50) {
      right = x;
      break;
    }
  }
  console.log(`Hero container X bounds: left=${left}, right=${right}, width=${right - left}`);
}

findEdges();

