const fs = require('fs');
const pug = require('pug');

let html = pug.renderFile('src/index.pug');

fs.writeFileSync('dist/index.html', html);
