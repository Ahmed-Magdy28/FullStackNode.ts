const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(0);
} else if (args.length < 2) {
  console.log(1);
} else {
  let biggest = parseInt(args[0], 10);
  let bigger = biggest;
  for (let index = 0; index < args.length; index++) {
    const element = parseInt(args[index]);
    if (element > biggest) {
      bigger = biggest;
      biggest = element;
    }
  }
  console.log(bigger);
}