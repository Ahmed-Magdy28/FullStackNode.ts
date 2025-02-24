function callMeMoby(x, func) {
  for (let index = 0; index < x; index++) {
    func(); // Call the function
  }
}

module.exports = { callMeMoby }; // Correct CommonJS export
