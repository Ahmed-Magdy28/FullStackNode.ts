export function add(a, b) {
  console.log(a + b)
}

const num1 = parseInt(process.argv.slice(2)[0], 10);
const num2 = parseInt(process.argv.slice(3)[0], 10);
if (isNaN(num1) || isNaN(num2)) {
  console.log(NaN)
} else {
  add(num1, num2)
}