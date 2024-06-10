const request = require('request');
const assert = require('assert');

describe('api-test', () => {
  it('test-status-code', (done) => {
    request('/', (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });
  it('test-response', (done) => {
    request('/', (err, res, body) => {
      assert.equal(res.body, 'Welcome to the payment system');
      done();
    });
  });
});