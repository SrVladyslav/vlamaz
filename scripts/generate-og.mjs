import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const W = 1200, H = 630;

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="78%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#F9AD05" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#F9AD05" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#1F1F21"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <text x="72" y="250" font-family="Arial, sans-serif" font-size="48" font-weight="700" fill="#FCFCFC">Vladyslav Mazurkevych</text>
  <text x="72" y="305" font-family="Arial, sans-serif" font-size="30" font-weight="500" fill="#F9AD05">AI &amp; Full-Stack Software Engineer</text>
  <text x="72" y="355" font-family="Arial, sans-serif" font-size="23" font-weight="400" fill="#CECECE">Computer Engineer · NLP &amp; Data Science · Founder</text>
  <rect x="72" y="410" width="230" height="4" fill="#F9AD05"/>
  <text x="72" y="450" font-family="Arial, sans-serif" font-size="24" font-weight="500" fill="#FCFCFC">vlamaz.com</text>
</svg>
`;

const mascotSize = 460;
const mascot = await sharp(path.join(ROOT, 'public/images/vlamaz.webp'))
  .resize(mascotSize, mascotSize, { fit: 'inside' })
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: mascot, left: W - mascotSize - 30, top: Math.round((H - mascotSize) / 2) }])
  .png()
  .toFile(path.join(ROOT, 'public/images/og-default.png'));

console.log('done');
