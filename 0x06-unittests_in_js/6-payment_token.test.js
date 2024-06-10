const Utils = require('./utils');
const getPaymentTokenFromAPI = require('./6-payment_token');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert = require('assert');

describe('getPaymentTokenFromAPI', () => {
  it('Async testing with done callback', function (done) {
    getPaymentTokenFromAPI(true).then((result) => {
      assert(result.data === 'Successful response from the API');
      done();
    });
  });
});