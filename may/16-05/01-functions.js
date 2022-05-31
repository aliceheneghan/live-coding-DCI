// standard function declaration
// "a" and "b" are the function's parameters
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return NaN;
  }
  return a + b;
}

// 4 and 1 are the arguments. Inside the function sum, they will be assigned to "a" and "b"
console.log(sum(4, 1));
console.log(sum("A", 4));
// console.log(sum([1, 2, 3], 4));

// function expression
const multiply = function (a, b) {
  return a * b;
};

// arrow function expression
const subtract = (a, b) => a - b;
