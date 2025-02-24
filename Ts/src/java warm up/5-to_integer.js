const args = process.argv.slice(2);
if (isNaN(parseInt(args[0], 10))) {
  console.log("not a number");
} else {
 console.log(`my number : ${args[0]}`);
}