'use strict';

var chai = require('chai')
    , expect = chai.expect
    , roman = require('../lib/roman')
    , valids = [
      'MMMCDXVII',    // 3417
      'MCCLI',        // 1251
      'XCIX',         // 99
      'DCXXVII',      // 627
      'CDXC'          // 490
    ]


describe('Roman Numeral Validator', function() {

  it('does return a boolean', function() {
    expect(roman.validate('MMII')).to.be.a('boolean');
    expect(roman.validate('FSDFSDF')).to.be.a('boolean');
  });

  it('does return true when valid', function() {
    valids.forEach(function(el){
      expect(roman.validate(el)).to.be.true;
    });
      
  });

  it('does return false when not valid', function() {
    expect(roman.validate('FSDFSDF')).to.be.false;
  });

});

describe('Roman to Decimal', function() {

  it('does return a correct Decimal number', function() {

    expect(roman.evaluate(valids[0])).to.be.equal(3417);
    expect(roman.evaluate(valids[1])).to.be.equal(1251);
    expect(roman.evaluate(valids[2])).to.be.equal(99);
    expect(roman.evaluate(valids[3])).to.be.equal(627);
    expect(roman.evaluate(valids[4])).to.be.equal(490);

  });

});