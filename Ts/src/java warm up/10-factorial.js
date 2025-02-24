function fac(num) {
  if (num < 0 || isNaN(num)) {
    return "invalid number";
  }
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * fac(num - 1);
}
let num = parseInt(process.argv.slice(2)[0], 10);
if (num.length < 1) {
  console.log("no numb");
} else {
  console.log(fac(num));
}
