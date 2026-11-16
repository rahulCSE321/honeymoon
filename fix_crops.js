const sharp = require('sharp');
const path = require('path');

async function fixContactBeach() {
  // Let's crop contact beach photo cleanly:
  // Container top is around y = 17500 in preview.png
  await sharp('./preview.png')
    .extract({ left: 1490, top: 17520, width: 1245, height: 1360 })
    .toFile('./public/images/contact_beach_clean.jpg');

  // Let's also crop step_1_kiss cleanly:
  await sharp('./preview.png')
    .extract({ left: 275, top: 3975, width: 660, height: 490 })
    .toFile('./public/images/step_1_clean.jpg');

  // Hero clean banner:
  await sharp('./preview.png')
    .extract({ left: 214, top: 1416, width: 2512, height: 2110 })
    .toFile('./public/images/hero_banner.jpg');
}

fixContactBeach();

