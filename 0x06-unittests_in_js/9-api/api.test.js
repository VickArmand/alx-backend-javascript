const request = require('request');
const assert = require('assert');

describe('api-test-param', () => {
  it('id is not a number', (done) => {
    request('http://localhost:7865/cart/joe', (err, res, body) => {
      assert.equal(res.statusCode, 404);
      assert.equal(body, 'Id must be int');
      done();
    });
  });
});
describe('api-test', () => {
  it('id is a number', (done) => {
    request('http://localhost:7865/cart/22', (err, res, body) => {
      assert.equal(body, 'Payment methods for cart 22');
      assert.equal(res.statusCode, 200);
      done();
  });
});
});