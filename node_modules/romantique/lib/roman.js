/*
 * romantique.roman
 * 
 * This algorithm uses simple dummy human-like form to convert Roman to Decimal. 
 * The idea is to sum all values related to the letters and
 * decrease 1, 10 or 100 of the amount when it finds a 4or9 case.
 *
 * Copyright (c) 2013 Jú Gonçalves
 * Licensed under the MIT license.
 */

'use strict'

// module api exported
exports.validate = function(number){
  // should be converted to verbal expression latter
  // http://stackoverflow.com/questions/267399/how-do-you-match-only-valid-roman-numerals-with-a-regular-expression

  var regex = new RegExp('^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$')
  return regex.test(number)
}

exports.evaluate = function(number){

  var decimal = 0
      , i = 0

  for(; i < number.length; i++){
    
    if(is4or9(number[i], number[i+1])){
      decimal = decimal - converter(number[i])
      continue
    }

    decimal = decimal + converter(number[i])
  }

  return decimal

}

// local functions
var converter = function(letter){
  if(letter === 'I') return 1
  if(letter === 'V') return 5
  if(letter === 'X') return 10
  if(letter === 'L') return 50
  if(letter === 'C') return 100
  if(letter === 'D') return 500
  if(letter === 'M') return 1000
}

var is4or9 = function(current, next){
  if(current === 'I'){
    if(next === 'V') return true // 4
    if(next === 'X') return true // 9
  }

  if(current === 'X'){
    if(next === 'L') return true // 40
    if(next === 'C') return true // 90
  }

  if(current === 'C'){
    if(next === 'D') return true // 400
    if(next === 'M') return true // 900
  }

  return false
}