const spinner = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
let interval = 0;
for (const element of spinner) {
  setTimeout(() => {
    process.stdout.write(element + '   ');
  }, interval += 200);
}
setTimeout(() => {
  process.stdout.write('\n');
}, interval += 200);