const sharp = require('sharp');

async function inspect() {
  const meta = await sharp('./preview.png').metadata();
  console.log('Image dimensions:', meta.width, 'x', meta.height);
}

inspect();

