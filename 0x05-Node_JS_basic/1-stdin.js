/**
 * 1-stdin.js will be executed through command line:
 * It should display the message
 * Welcome to Holberton School, what is your name? (followed by a new line)
 * The user should be able to input their name on a new line
 * The program should display Your name is: INPUT
 * When the user ends the program, it should display This important software is now closing (followed by a new line)
 */
const process = require('process');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', data => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
