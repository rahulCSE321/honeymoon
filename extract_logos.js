const sharp = require('sharp');
const path = require('path');

async function extractLogos() {
  // In slice_6 bottom / slice_7 top:
  // Let's crop y = 14800 to 15300
  await sharp('./preview.png')
    .extract({ left: 200, top: 14700, width: 2540, height: 400 })
    .toFile('./public/images/partner_logos_strip.png');
  console.log('Logos strip extracted');
}

extractLogos();

