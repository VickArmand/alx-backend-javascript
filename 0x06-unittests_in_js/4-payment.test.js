/**
 * Imagine that calling the function Utils.calculateNumber
 * is actually calling an API or a very expensive method.
 * You don’t necessarily want to do that on every test run
 * Stub the function Utils.calculateNumber to always return the same number 10
 * Verify that the stub is being called with type = SUM, a = 100, and b = 20
 * Add a spy to verify that console.log is logging the correct message The total is: 10
 */
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert = require('assert');

describe('compare_function_results', () => {
  it('using-stubs-and-spies', () => {
    let spy = sinon.spy(console, "log");
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);
    sendPaymentRequestToApi(100, 20);
    assert(spy.withArgs("The total is: 10").calledOnce)
    assert(stub.withArgs('SUM', 100, 20).calledOnce);
  });
});
