const sharp = require('sharp');

async function extractLogosCorrect() {
  await sharp('./preview.png')
    .extract({ left: 200, top: 14000, width: 2540, height: 600 })
    .toFile('./public/images/partner_section.png');
}

extractLogosCorrect();

