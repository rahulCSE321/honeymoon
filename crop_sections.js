const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Let's create sections directory to inspect chunks of the screenshot
const dir = './screenshot_sections';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function cropSections() {
  const meta = await sharp('./preview.png').metadata();
  const W = meta.width;
  const H = meta.height;

  // Let's divide into 10 vertical slices so we can inspect every single part at high resolution
  const sliceCount = 10;
  const sliceH = Math.floor(H / sliceCount);

  for (let i = 0; i < sliceCount; i++) {
    const top = i * sliceH;
    const height = (i === sliceCount - 1) ? (H - top) : sliceH;
    await sharp('./preview.png')
      .extract({ left: 0, top, width: W, height })
      .toFile(path.join(dir, `slice_${i}.png`));
    console.log(`Saved slice_${i}.png (y: ${top} to ${top + height})`);
  }
}

cropSections();

