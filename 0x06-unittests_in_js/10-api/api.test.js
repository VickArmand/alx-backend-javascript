const request = require('request');
const assert = require('assert');

describe('api-test-login', () => {
  it('userName', (done) => {
    request('http://localhost:7865/login', { method: "POST", userName: "Betty" }, (err, res, body) => {
      assert.equal(res.statusCode, 200);
      assert.equal(body, 'Welcome Betty');
      done();
    });
  });
});
describe('api-test-available_payments', () => {
  it('basic-test', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      assert.equal(body, JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }));
      assert.equal(res.statusCode, 200);
      done();
  });
});
});