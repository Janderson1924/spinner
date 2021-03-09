let delay = 0;
const newChar = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

for (const char of newChar) {
delay += 200;
setTimeout(() => {
  process.stdout.write(`\r${char}     `);
}, delay);
}

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);