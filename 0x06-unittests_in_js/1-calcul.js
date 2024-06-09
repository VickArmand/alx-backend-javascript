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
  const a1 = Math.round(a);
  const b1 = Math.round(b);
  let c = 0;
  switch(type) {
    case 'SUM':
      c = (a1 + b1);
      break;
    case 'SUBTRACT':
      c = a1 - b1;
      break;
    case 'DIVIDE':
      if (b1 === 0)
        c = 'Error';
      else {
        c = a1 / b1;
      }
      break;
    default:
      c  = 'Invalid Operation';
      break;
  }
  return c;
}
