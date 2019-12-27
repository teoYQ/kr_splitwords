/*
 * romantique
 * 
 * How about converting Roman to Decimal?
 *
 * Copyright (c) 2013 Jú Gonçalves
 * Licensed under the MIT license.
 */

'use strict'

var romanNumber = require('./roman')

exports.roman = {

  validate : function(number){
    return romanNumber.validate(number)
  }
  , toDecimal : function(number){
    if(romanNumber.validate(number)){
      return romanNumber.evaluate(number)
    }
    else{
      console.error(number + ' is not a valid roman numeral.')
      return false
    }
  }
    
}