/**
 * 
 * Filter
 * 
 * the filter function takes an array in input and a callback
 * 
 * It returns a new array where some elements are removed based on the result 
 * of the callback
 * 
 */

// function divisibleBy2(numbers) {
//   let result = [];
//   for (let number of numbers) {
//     if (number % 2 === 0) {
//       result.push(number);
//     }
//   }
//   return result;
// }

function divisibleBy3(numbers) {
  let result = [];
  for (let number of numbers) {
    if (number % 3 === 0) {
      result.push(number);
    }
  }
  return result;
}

function biggerThan8(numbers) {
  let result = [];
  for (let number of numbers) {
    if (number > 8) {
      result.push(number);
    }
  }
  return result;
}

function between10And15(numbers) {
  let result = [];
  for (let number of numbers) {
    if (number >= 10 && number <= 15) {
      result.push(number);
    }
  }
  return result;
}
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(divisibleBy2(numbersArray));
console.log(divisibleBy3(numbersArray));
console.log(biggerThan8(numbersArray));
console.log(between10And15(numbersArray));

function myFilter(array, callbackFn) {
  let result = [];
  for (let item of array) {
    if (callbackFn(item) === true) {
      result.push(item);
    }
  }
  return result;
}

function divisibleBy2(number) {
  //   if (item % 2 === 0) {
  //       return true;
  //   } else {
  //       return false;
  //   }
  return number % 2 === 0;
}

function divisibleBy5(number) {
  return number % 5 === 0;
}

console.log(myFilter(numbersArray, divisibleBy2));
console.log(myFilter(numbersArray, (number) => number % 3 === 0));

let strings = [
  "cat",
  "table",
  "elephants",
  "berlin",
  "pen",
  "carpet",
  "picture",
  "javascript",
];

console.log(myFilter(strings, (string) => string.length > 3));
console.log(myFilter(strings, (string) => string.length > 5));
console.log(myFilter(strings, (string) => string.includes("e")));
console.log(myFilter(strings, (x) => x.includes("c")));

console.log(myFilter(strings, (x) => true));

/**
 * Callback
 * 
 * A callback is a function that we pass as an argument to another function and we
 * then call it inside of it
 */