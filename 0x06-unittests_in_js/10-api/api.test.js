const request = require('request');
const assert = require('assert');

describe('api-test-login', () => {
  it('userName', (done) => {
    const options = { url: 'http://localhost:7865/login',
    method: "POST",
    json: true,
    body: {userName: "Betty" }}
    request(options, (err, res, body) => {
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

describe('api-test-param', () => {
  it('id is not a number', (done) => {
    request('http://localhost:7865/cart/joe', (err, res, body) => {
      assert.equal(res.statusCode, 404);
      assert.equal(body, 'Id must be int');
      done();
    });
  });
  it('id is a number', (done) => {
    request('http://localhost:7865/cart/22', (err, res, body) => {
      assert.equal(body, 'Payment methods for cart 22');
      assert.equal(res.statusCode, 200);
      done();
  });
});
});
describe('api-test-code', () => {
  it('test-status-code', (done) => {
    request('http://localhost:7865/', (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });
  it('test-response', (done) => {
    request('http://localhost:7865/', (err, res, body) => {
    assert.equal(body, 'Welcome to the payment system');
    done();
  });
});
});
