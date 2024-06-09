/**
 * this is a test file containing tests for
 * calculateNumber function
 */
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('sum-test-with-type', () => {
  it('positive-numbers', () => {
    expect(calculateNumber('SUM', 2.5, 3.5)).to.be.equal(7);
  });
  it('positive-numbers-2', () => {
    expect(calculateNumber('SUM', 8.4, 2.1)).to.be.equal(10);
  });
  it('negative-numbers', () => {
    expect(calculateNumber('SUM', -2.5, -3.5)).to.be.equal(-5);
  });
  it('negative-numbers-2', () => {
    expect(calculateNumber('SUM', -5.3, -8.6)).to.be.equal(-14);
  });
});
describe('subtract-test-with-type', () => {
  it('positive-numbers', () => {
    expect(calculateNumber('SUBTRACT', 2.5, 3.5)).to.be.equal(-1);
  });
  it('positive-numbers-2', () => {
    expect(calculateNumber('SUBTRACT', 2.1, 8.4)).to.be.equal(-6);
  });
  it('negative-numbers', () => {
    expect(calculateNumber('SUBTRACT', -3.5, -2.5)).to.be.equal(-1);
  });
});
describe('divide-test-with-type', () => {
  it('positive-numbers', () => {
    expect(calculateNumber('DIVIDE', 2.5, 3.5)).to.be.equal(0.75);
  });
  it('positive-numbers-2', () => {
    expect(calculateNumber('DIVIDE', 8.4, 2.1)).to.be.equal(4);
  });
  it('negative-numbers', () => {
    expect(calculateNumber('DIVIDE', -2.5, -3.5)).to.be.equal((2/3));
  });
  it('negative-numbers-2', () => {
    expect(calculateNumber('DIVIDE', -8.6, 0)).to.be.equal('Error');
  });
});
describe('invalid-test-with-type', () => {
  it('positive-numbers', () => {
    expect(calculateNumber('MOD', 2.5, 3.5)).to.be.equal('Invalid Operation');
  });
  it('positive-numbers-2', () => {
    expect(calculateNumber('POW', 8.4, 2.1)).to.be.equal('Invalid Operation');
  });
  it('positive-numbers-2', () => {
    expect(calculateNumber('MULTIPLY', 8.4, 2.1)).to.be.equal('Invalid Operation');
  });
});