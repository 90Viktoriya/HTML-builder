const fs = require('node:fs');
const path = require('node:path');
const dir = path.join(__dirname, 'styles');
const dest = path.join(__dirname, 'project-dist');
const writeStream = fs.createWriteStream(path.join(dest, 'bundle.css'));
fs.readdir(dir, (err, files) => {
  let content = Array(files.length).fill('');
  files.forEach((file, index) => {
    const filedir = path.join(dir, file);
    fs.stat(path.join(dir, file), (err, stats) => {
      if (stats.isFile() && path.extname(filedir) === '.css') {
        const stream = fs.createReadStream(filedir, 'ascii');
        stream.on('data', (chunk) => {
          content[index] += chunk;
        });
        stream.on('end', () => {
          content.forEach((element) => {
            writeStream.write(element);
          });
        });
      }
    });
  });
});
