const fs = require('node:fs');
const { copyFile, rm } = require('node:fs/promises');
const path = require('node:path');
const dest = path.join(__dirname, 'files-copy');
const src = path.join(__dirname, 'files');
fs.mkdir(dest, { recursive: true }, () => {
  fs.readdir(src, (err, files) => {
    files.forEach((file) => {
      fs.stat(path.join(src, file), (err, stats) => {
        if (stats.isFile())
          copyFile(path.join(src, file), path.join(dest, file));
      });
    });
    fs.readdir(dest, (err, oldfiles) => {
      oldfiles.forEach((file) => {
        if (files.indexOf(file) === -1) rm(path.join(dest, file));
      });
    });
  });
});
