const fs = require('node:fs');
const path = require('node:path');

const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'ascii');
stream.on('data', (chunk) => console.log(chunk));
