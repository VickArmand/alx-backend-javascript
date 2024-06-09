/**
 * By using sinon.spy, make sure the math used for
 * sendPaymentRequestToApi(100, 20) is the same as
 * Utils.calculateNumber('SUM', 100, 20)
 */
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert = require('assert');

describe('compare_function_results', () => {
  it('check-number-of-function-call', () => {
    let spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    assert(spy.withArgs('SUM', 100, 20).calledOnce);
  });
});