const fs = require('node:fs');
const path = require('node:path');
const dir = path.join(__dirname, 'secret-folder');
fs.readdir(dir, (err, files) => {
  files.forEach((file) => {
    const filedir = path.join(dir, file);
    fs.stat(path.join(dir, file), (err, stats) => {
      if (stats.isFile())
        console.log(
          path.basename(filedir, path.extname(filedir)) +
            ' - ' +
            path.extname(filedir).slice(1) +
            ' - ' +
            stats.size +
            'B',
        );
    });
  });
});
