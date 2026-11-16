const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = './public/images';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function extractAll() {
  // 1. Hero Gift Photo (clean without floating badges if possible, or the full card content)
  // Let's check hero card bounds:
  // Container: left: 206, top: 1400, width: 2528, height: 2544
  await sharp('./preview.png')
    .extract({ left: 206, top: 1400, width: 2528, height: 2544 })
    .toFile(path.join(outDir, 'hero_full_banner.jpg'));

  // 2. Step 1 photo:
  // Card left is 206. Card width is 808.
  // The inner photo is at left: 275, top: 3950? Wait, let's check slice_1 bottom:
  // In slice_1 (top 2033..4066), the tops of step cards appear around y=3800..4000?
  // Let's check slice_1 and slice_2 overlap:
  await sharp('./preview.png')
    .extract({ left: 274, top: 3980, width: 672, height: 490 })
    .toFile(path.join(outDir, 'step_1.jpg'));

  await sharp('./preview.png')
    .extract({ left: 1134, top: 3980, width: 672, height: 490 })
    .toFile(path.join(outDir, 'step_2.jpg'));

  await sharp('./preview.png')
    .extract({ left: 1994, top: 3980, width: 672, height: 490 })
    .toFile(path.join(outDir, 'step_3.jpg'));

  // 3. Feature 1 (Beach sunset surfboard):
  // Located in slice_2/slice_3 (around y = 5600..7500)
  // Right side framed photo:
  await sharp('./preview.png')
    .extract({ left: 1650, top: 5750, width: 900, height: 1100 })
    .toFile(path.join(outDir, 'feature_1_beach.jpg'));

  // 4. Feature 2 (Woman on phone):
  // Left side framed photo in slice_3/slice_4 (around y = 7700..9500)
  await sharp('./preview.png')
    .extract({ left: 390, top: 7800, width: 900, height: 1100 })
    .toFile(path.join(outDir, 'feature_2_phone.jpg'));

  // 5. Feature 3 (Couple on phone):
  // Right side framed photo in slice_4/slice_5 (around y = 9800..11600)
  await sharp('./preview.png')
    .extract({ left: 1650, top: 9850, width: 900, height: 1100 })
    .toFile(path.join(outDir, 'feature_3_couple.jpg'));

  // 6. Feature 4 (Airport couple):
  // Left side framed photo in slice_5/slice_6 (around y = 11900..13700)
  await sharp('./preview.png')
    .extract({ left: 390, top: 11900, width: 900, height: 1100 })
    .toFile(path.join(outDir, 'feature_4_airport.jpg'));

  // 7. Testimonial active couple photo (Amalfi):
  // In slice_6 (y ~ 13800..15200)
  await sharp('./preview.png')
    .extract({ left: 1560, top: 14100, width: 600, height: 500 })
    .toFile(path.join(outDir, 'testimonial_amalfi.jpg'));

  // 8. FAQ Support woman on phone:
  // In slice_7/slice_8 (y ~ 16600..18200)
  await sharp('./preview.png')
    .extract({ left: 240, top: 16800, width: 740, height: 800 })
    .toFile(path.join(outDir, 'faq_support.jpg'));

  // 9. Contact section beach walk couple:
  // In slice_8/slice_9 (y ~ 18800..20000)
  await sharp('./preview.png')
    .extract({ left: 1480, top: 19100, width: 1250, height: 950 })
    .toFile(path.join(outDir, 'contact_beach.jpg'));

  console.log('Extraction complete');
}

extractAll();

