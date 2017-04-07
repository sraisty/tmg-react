import {chai} from 'meteor/practicalmeteor:chai';

const expect = chai.expect;
const assert = chai.assert;
/**
 * The following eslint diable lines (in comments) are need to get Mocha/Chai
 * tests to work without esLint errors:
***/
/* eslint func-names: 0 */   // Off
/* eslint no-unused-expressions: 0 */   // off
/* eslint prefer-arrow-callback: 0 */ // off

describe('Basic Test of Chai.Assert and Mocha', function () {
  it('ASSERTS that 1==1. This should always Pass.', function () {
    const i = 1;
    assert.equal(i, 1);
  });

  it('EXPECTS that 1==1. This should always Pass.', function () {
    const i = 1;
    expect(i).to.deep.equal(1);
  });
});
