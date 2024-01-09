#!/usr/bin/node

/**
* this class defines a square that inherits from rectangle
*/

class Square extends Rectangle {
  constructor (size) {
    super (size, size);
  }
}
module.exports = Square;
