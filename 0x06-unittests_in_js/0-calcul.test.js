const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('sum-test', () => {
  it('positive-numbers', () => {
    assert.equal(calculateNumber(2.5, 3.5), 7);
  });
  it('positive-numbers-2', () => {
    assert.equal(calculateNumber(2.0, 4.0), 6);
  });
  it('positive-numbers-2', () => {
    assert.equal(calculateNumber(2.0, 3.5), 6);
  });
  it('positive-numbers-2', () => {
    assert.equal(calculateNumber(2.0, 3.3), 5);
  });
  it('positive-numbers-2', () => {
    assert.equal(calculateNumber(8.4, 2.1), 10);
  });
  it('negative-numbers', () => {
    assert.equal(calculateNumber(-2.5, -3.5), -5);
  });
  it('negative-numbers-2', () => {
    assert.equal(calculateNumber(-5.3, -8.6), -14);
  });
});