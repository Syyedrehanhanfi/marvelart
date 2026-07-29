const sharp = require('sharp');
const fs = require('fs');

const svg = `
<svg width="1200" height="1200" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8C678"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#AA7C11"/>
    </linearGradient>
    <linearGradient id="charcoal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#333333"/>
      <stop offset="100%" stop-color="#111111"/>
    </linearGradient>
  </defs>

  <g stroke="url(#charcoal)" stroke-width="6" fill="none" opacity="0.6">
    <circle cx="600" cy="450" r="320" stroke-dasharray="10, 20"/>
    <circle cx="600" cy="450" r="290"/>
    <path d="M 600 130 C 720 250, 830 300, 890 450 C 830 600, 720 650, 600 770 C 480 650, 370 600, 310 450 C 370 300, 480 250, 600 130 Z" />
    <path d="M 600 180 C 690 280, 780 330, 840 450 C 780 570, 690 620, 600 720 C 510 620, 420 570, 360 450 C 420 330, 510 280, 600 180 Z" opacity="0.5" />
    
    <circle cx="600" cy="70" r="12" fill="url(#charcoal)"/>
    <circle cx="600" cy="830" r="12" fill="url(#charcoal)"/>
    <circle cx="220" cy="450" r="12" fill="url(#charcoal)"/>
    <circle cx="980" cy="450" r="12" fill="url(#charcoal)"/>
  </g>

  <text x="600" y="550" font-family="'Times New Roman', Times, serif" font-size="500" font-weight="bold" fill="url(#gold)" text-anchor="middle" letter-spacing="-20">M</text>

  <text x="600" y="980" font-family="Arial, sans-serif" font-size="80" font-weight="400" letter-spacing="35" fill="url(#gold)" text-anchor="middle">MEHNDI</text>
  <text x="600" y="1080" font-family="Arial, sans-serif" font-size="80" font-weight="400" letter-spacing="35" fill="url(#gold)" text-anchor="middle">MARVEL</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/logo/logo-transparent.png')
  .then(() => console.log('Logo generated successfully'))
  .catch(err => console.error(err));
