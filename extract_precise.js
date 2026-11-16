const sharp = require('sharp');
const path = require('path');

const outDir = './public/images';

async function extractPrecise() {
  // 1. Step 1, 2, 3
  await sharp('./preview.png')
    .extract({ left: 275, top: 3960, width: 660, height: 490 })
    .toFile(path.join(outDir, 'step_1_kiss.jpg'));

  await sharp('./preview.png')
    .extract({ left: 1140, top: 3960, width: 660, height: 490 })
    .toFile(path.join(outDir, 'step_2_girl.jpg'));

  await sharp('./preview.png')
    .extract({ left: 2005, top: 3960, width: 660, height: 490 })
    .toFile(path.join(outDir, 'step_3_box.jpg'));

  // 2. Feature 1: Beach Surfboard (tilted frame + photo)
  // Let's extract the clean tilted frame or the inner photo
  await sharp('./preview.png')
    .extract({ left: 1640, top: 5650, width: 920, height: 1160 })
    .toFile(path.join(outDir, 'feat_1_surf.png'));

  // 3. Feature 2: Curly hair phone
  await sharp('./preview.png')
    .extract({ left: 380, top: 7230, width: 920, height: 1160 })
    .toFile(path.join(outDir, 'feat_2_phone.png'));

  // 4. Feature 3: Couple phone
  await sharp('./preview.png')
    .extract({ left: 1640, top: 8750, width: 920, height: 1160 })
    .toFile(path.join(outDir, 'feat_3_couple.png'));

  // 5. Feature 4: Airport couple
  await sharp('./preview.png')
    .extract({ left: 380, top: 10320, width: 920, height: 1160 })
    .toFile(path.join(outDir, 'feat_4_airport.png'));

  // 6. Testimonial Amalfi couple
  await sharp('./preview.png')
    .extract({ left: 1570, top: 12380, width: 580, height: 570 })
    .toFile(path.join(outDir, 'testimonial_amalfi.jpg'));

  // 7. FAQ Support woman
  await sharp('./preview.png')
    .extract({ left: 245, top: 15250, width: 735, height: 920 })
    .toFile(path.join(outDir, 'faq_support.jpg'));

  // 8. Contact beach walk couple
  await sharp('./preview.png')
    .extract({ left: 1490, top: 17350, width: 1250, height: 1350 })
    .toFile(path.join(outDir, 'contact_beach.jpg'));

  // 9. Hero wood surface and gift
  // The wooden background with red gift:
  await sharp('./preview.png')
    .extract({ left: 215, top: 1420, width: 2510, height: 2180 })
    .toFile(path.join(outDir, 'hero_gift_clean.jpg'));

  console.log('Precise extraction complete!');
}

extractPrecise();

