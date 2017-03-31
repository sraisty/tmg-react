import {chai} from 'meteor/practicalmeteor:chai';
let expect = chai.expect;
let assert = chai.assert;

describe('Basic Test of Chai.Assert and Mocha', function() {
  it('ASSERTS that 1==1. This should always Pass.', function() {
    let i=1;
    assert.equal(i, 1);
  });

  it('EXPECTS that 1==1. This should always Pass.', function() {
    let i=1;
    expect(i).to.deep.equal(1);
  });
});
