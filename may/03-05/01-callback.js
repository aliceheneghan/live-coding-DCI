/**
 * Create a single function that takes 2 numbers in input and a third parameter for a
 * a function and returns the result of this function called with the 2 numbers as
 * parameters
 *
 */

function applyFunction(a, b, fn) {
  let result = fn(a, b);
  return result;
}

function sum(a, b) {
  return a + b;
}

let result = applyFunction(2, 3, sum);
console.log(result);

let result2 = applyFunction(2, 3, (a, b) => a + b);
console.log(result2);

let result3 = applyFunction(2, 3, (a, b) => a * b);
let result4 = applyFunction(2, 3, (a, b) => a / b);
let result5 = applyFunction(2, 3, (a, b) => a < b);

let result6 = applyFunction(2, 3, function (a, b) {
  return a < b;
});

// function double(n) {
//     let result = n * 2;
//     return result;
// }

// function triple(n) {
//     let result = n * 3;
//     return result;
// }

// function square(n) {
//     let result = n ** 2;
//     return result;
// }

// function applyFunction(n, fn) {
//     let result = fn(n);
// }
