#!/usr/bin/node

const firstArgc = process.argv[2];
const convertedNumber = parseInt(firstArgc);

if (!isNaN(convertedNumber)) {
  console.log(`My number: ${convertedNumber}`);
} else {
  console.log('Not a number');
}
