#!/usr/bin/env node

const { bgRed, bgBlue, bgWhite, white, bold } = require('chalk');

const redStripe = bgRed('                                                  ')
const whiteStripe = bgWhite('                                                  ')
const halfRed = bgRed('                                   ')
const halfWhite = bgWhite('                                   ')
const star7 = bgBlue.white.bold(' * * * * * * * ')
const star6 = bgBlue.white.bold('  * * * * * *  ')

for (var i = 0; i < 12; i++) {
  if (i === 0) {
    console.log(star7 + halfRed)
  }
  if (i < 7 && i !== 0) {
    console.log(( i % 2 === 0 ? star7 + halfRed : star6 + halfWhite))
  } else if (i >= 7 && i !== 0) {
    console.log(( i % 2 === 0 ?  redStripe : whiteStripe))
  }
}
