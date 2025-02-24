const print = "c is fun";
const num = parseInt(process.argv.slice(2))
if (isNaN(num) || num < 0) {
  console.log("no number of occurrence")
} else {
  for (let index = 0; index < num; index++) {
    console.log(print)

  }
} 