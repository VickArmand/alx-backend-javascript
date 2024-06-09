class Utils{
  static calculateNumber = (type, a, b) => {
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
}

module.exports = Utils;
