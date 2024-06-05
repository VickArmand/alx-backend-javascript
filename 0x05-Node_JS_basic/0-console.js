// create a function named displayMessage
// that prints in STDOUT the string argument.
const process = require('process');
module.exports = function displayMessage (message) {
  process.stdout.write(message);
};
