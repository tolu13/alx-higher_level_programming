#!/usr/bin/node

function factorial (n) {
  if (isNaN(n)) {
    return 1; // Factorial of NaN is 1
  }

  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

const arg = parseInt(process.argv[2]);
const result = factorial(arg);

console.log(result);
