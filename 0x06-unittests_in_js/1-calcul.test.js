/**
 * this is a test file containing tests for
 * calculateNumber function
 */
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('sum-test-with-type', () => {
  it('positive-numbers', () => {
    assert.equal(calculateNumber('SUM', 2.5, 3.5), 7);
  });
  it('positive-numbers-2', () => {
    assert.equal(calculateNumber('SUM', 8.4, 2.1), 10);
  });
  it('negative-numbers', () => {
    assert.equal(calculateNumber('SUM', -2.5, -3.5), -5);
  });
  it('negative-numbers-2', () => {
    assert.equal(calculateNumber('SUM', -5.3, -8.6), -14);
  });
});
describe('subtract-test-with-type', () => {
  it('positive-numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 2.5, 3.5), -1);
  });
  it('positive-numbers-2', () => {
    assert.equal(calculateNumber('SUBTRACT', 2.1, 8.4), -6);
  });
  it('negative-numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -3.5, -2.5), -1);
  });
});
describe('divide-test-with-type', () => {
  it('positive-numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 2.5, 3.5), 0.75);
  });
  it('positive-numbers-2', () => {
    assert.equal(calculateNumber('DIVIDE', 8.4, 2.1), 4);
  });
  it('negative-numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -2.5, -3.5), (2/3));
  });
  it('negative-numbers-2', () => {
    assert.equal(calculateNumber('DIVIDE', -8.6, 0), 'Error');
  });
});
describe('invalid-test-with-type', () => {
  it('positive-numbers', () => {
    assert.equal(calculateNumber('MOD', 2.5, 3.5), 'Invalid Operation');
  });
  it('positive-numbers-2', () => {
    assert.equal(calculateNumber('POW', 8.4, 2.1), 'Invalid Operation');
  });
  it('positive-numbers-2', () => {
    assert.equal(calculateNumber('MULTIPLY', 8.4, 2.1), 'Invalid Operation');
  });
});