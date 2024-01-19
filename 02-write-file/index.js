const fs = require('node:fs');
const path = require('node:path');
const readline = require('readline');
const os = require('node:os');
const rl = readline.createInterface(process.stdin, process.stdout);
const stream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
rl.setPrompt(
  'Введите содержимое файла, для выхода нажмите "ctrl + c" или введите "exit"\n',
);
rl.prompt();
rl.on('line', (line) => {
  if (line === 'exit') {
    console.log('Файл сохранён.');
    rl.close();
  } else stream.write(line + os.EOL);
}).on('SIGINT', () => {
  console.log('Файл сохранён.');
  rl.close();
});
