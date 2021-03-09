let delay = 0;
const newChar = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

for (const char of newChar) {  
  setTimeout(() => {
    process.stdout.write(`\r${char}     `);
  }, delay);
  delay += 200;
}
