const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = './public/images';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function extractPhotos() {
  // Let's extract each photo based on coordinates in preview.png (2940 x 20336)
  // Let's find coordinates by slicing candidates and verifying
  
  // 1. Hero gift photo:
  // In slice_0 and slice_1: y spans around 2750 to 8000? Let's check where the hero image container is.
  // In slice_0 (0 to 2033), the bottom of slice_0 is y=1400..2033.
  // In slice_1 (2033 to 4066), the top of slice_1 is y=2033..3800.
  // Total container: y = 1400 to 3950, left = 200 to 2740.
  await sharp('./preview.png')
    .extract({ left: 210, top: 1400, width: 2520, height: 2560 })
    .toFile(path.join(outDir, 'hero_full_banner.jpg'));

  // 2. Step 1, 2, 3:
  // Step cards are around y = 4300 to 5200 in preview.png.
  // In slice_2 (4066 to 6099):
  // Let's sample the top of slice_2 to find where the 3 photos are:
  // Card 1: left ~ 200..950, y ~ 4100..4900
  // Card 2: left ~ 1070..1820
  // Card 3: left ~ 1940..2690
  await sharp('./preview.png')
    .extract({ left: 260, top: 4080, width: 730, height: 600 })
    .toFile(path.join(outDir, 'step_1_couple.jpg'));

  await sharp('./preview.png')
    .extract({ left: 1105, top: 4080, width: 730, height: 600 })
    .toFile(path.join(outDir, 'step_2_woman.jpg'));

  await sharp('./preview.png')
    .extract({ left: 1950, top: 4080, width: 730, height: 600 })
    .toFile(path.join(outDir, 'step_3_giftbox.jpg'));

  console.log('Step images extracted');
}

extractPhotos();

