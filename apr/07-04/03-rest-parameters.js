/**
 * Rest parameters
 *
 */

function myConsoleLog(...parameters) {
  for (let i = 0; i < parameters.length; i++) {
    console.log(parameters[i]);
  }
}

// myConsoleLog("hey", 123, "bla");
// myConsoleLog();

// console.log("hey", 123, "bla", true, false, [1,2, 3], "blablabla", 1, 2, 3, 4, 5, 6, 7, 8)

console.log(Math.max(1, 2, 3, 4, 5, 6, 99, 2, 100, 1000, 1));

function arrayMultiplier(n, ...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * n);
  }
}

arrayMultiplier(2, 1); //

function test(a, b, c, ...rest) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("rest", ...rest);
  //   console.log(rest[0]);
  //   console.log(rest[1]);
  //   console.log(rest[2]);
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

test(1, 2, 3, 4, 5, 6, 7, 8);


/**
 * 
 * We want to write a function that takes in input:
 * - a number n
 * - a list of numbers
 * 
 * it returns the largest number inside "numbers", that is also smaller than the number n
 * 
 * for example:
 * 
 * getMaxSmallerThanN(5, 1, 2, 3, 4, 5, 6) => 4
 * getMaxSmallerThanN(10, 100, 2000, 3, 40, 57) => 3
 * getMaxSmallerThanN(10, 100, 2000, 300, 40, 57) => null 
 */
function getMaxSmallerThanN(n, ...numbers) {
    let max = null;
    for (let i = 0; i < numbers.length; i++) {
        if ((max === null && numbers[i] < n) || (numbers[i] > max && numbers[i] < n)) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(getMaxSmallerThanN(5, 1, 2, 3, 4, 5, 6));
console.log(getMaxSmallerThanN(10, 100, 2000, 3, 40, 57));
console.log(getMaxSmallerThanN(10, 100, 2000, 300, 40, 57))




function testSpread(...rest) {
    console.log(rest); // [1, 2, 3]
    console.log(...rest); // after spreading: 1, 2, 3
}

testSpread(1, 2, 3)