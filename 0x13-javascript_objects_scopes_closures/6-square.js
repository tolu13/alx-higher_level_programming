#!/usr/bin/node
/**
* a class that inherits from squae
*/
const PreSquare = require('./5-square');

class Square extends PreSquare {
  charPrint (c) {
    if (!c) {
      c = 'X';
    }
  }
}
module.exports = Square;
