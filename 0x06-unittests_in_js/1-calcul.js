/**
 * calculateNumber - round a and b and
 * return the sum of it 
 * type can be SUM, SUBTRACT, or DIVIDE (string)
 * When type is SUM, round the two numbers, and add a and b
 * When type is SUBTRACT, round the two numbers, and subtract b from a
 * When type is DIVIDE, round the two numbers, and
 * divide a with b - if the rounded value of b is equal to 0,
 * return the string Error
 */
module.exports = function calculateNumber(type, a, b) {
  switch(type) {
    case 'SUM':
      return (Math.round(a) + Math.round(b));
    case 'SUBTRACT':
      return (Math.round(b) - Math.round(a));
    case 'DIVIDE':
      a1 = Math.round(a);
      b1 = Math.round(b);
      if (b1 === 0)
        return 'Error';
      return a1 / b1;
    default:
      return 'Invalid Operation';
  }
}
