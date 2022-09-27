const automation = "|/-\|/-\|"
let delay = 0

for (let symbol of automation) {
  setTimeout(() => {
    process.stdout.write('\r' + symbol + '     ')
  },delay);
  delay += 400
};