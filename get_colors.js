const sharp = require('sharp');

async function getColors() {
  const meta = await sharp('./preview.png').metadata();
  console.log('Metadata:', meta.width, meta.height);

  // Let's sample specific coordinates in preview.png (2940 x 20336)
  // 1. Neon lime in testimonial card (slice_6, y ~ 12500, x ~ 500)
  // 2. Main background (x: 200, y: 200)
  // 3. Step card background (slice_2, y ~ 5000, x ~ 400)
  // 4. Feature card background (slice_3, y ~ 7000, x ~ 500)
  // 5. Form card background (slice_8, y ~ 17000, x ~ 500)

  const image = sharp('./preview.png');

  async function samplePixel(x, y) {
    const buf = await sharp('./preview.png')
      .extract({ left: x, top: y, width: 1, height: 1 })
      .raw()
      .toBuffer();
    const hex = `#${buf[0].toString(16).padStart(2,'0')}${buf[1].toString(16).padStart(2,'0')}${buf[2].toString(16).padStart(2,'0')}`;
    return hex;
  }

  console.log('Top BG (200, 200):', await samplePixel(200, 200));
  console.log('Hero button (1470, 1140):', await samplePixel(1470, 1140));
  console.log('Lime button (1470, 5260):', await samplePixel(1470, 5260));
  console.log('Lime testimonial card (500, 12600):', await samplePixel(500, 12600));
  console.log('Step card bg (500, 4800):', await samplePixel(500, 4800));
  console.log('Feature card 1 left bg (500, 6800):', await samplePixel(500, 6800));
  console.log('Form card bg (500, 17500):', await samplePixel(500, 17500));
  console.log('Footer bg (500, 19500):', await samplePixel(500, 19500));
}

getColors();

