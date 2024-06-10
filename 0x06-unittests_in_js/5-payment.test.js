/**
 * Inside the same describe, create 2 tests:
 * The first test will call sendPaymentRequestToAPI with 100, and 20:
 * Verify that the console is logging the string The total is: 120
 * Verify that the console is only called once
 * The second test will call sendPaymentRequestToAPI with 10, and 10:
 * Verify that the console is logging the string The total is: 20
 * Verify that the console is only called once
 * You should use only one spy to complete this exercise
 * You should use a beforeEach and a afterEach hooks to complete this exercise
 */
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert = require('assert');

describe('using-hooks', () => {
    beforeEach("Set up spy to use for each test", function() {
        sinon.spy(console, "log");
    });
    afterEach("restore spy after each test", function() {
        console.log.restore();
    });
    it("check that console.log is called with the right arg", function() {
        sendPaymentRequestToApi(100, 20);
        expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("check that console.log is called with the right arg", function() {
        sendPaymentRequestToApi(10, 10);
        expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
