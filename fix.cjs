const fs = require('fs');
let content = fs.readFileSync('c:/dev/marvelart/src/app/classes/page.jsx', 'utf8');

content = content.replace(/\\n/g, '\n');
content = content.replace(/\uFFFD/g, '-');

fs.writeFileSync('c:/dev/marvelart/src/app/classes/page.jsx', content, 'utf8');
console.log('Fixed');
