const request = require('request');
const assert = require('assert');

describe('api-test-code', () => {
  it('test-status-code', (done) => {
    request('http://localhost:7865/', (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });
});
describe('api-test-response', () => {
  it('test-response', (done) => {
    request('http://localhost:7865/', (err, res, body) => {
    assert.equal(body, 'Welcome to the payment system');
    done();
  });
});
});