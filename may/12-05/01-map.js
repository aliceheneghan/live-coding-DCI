/**
 * Array methods:
 *
 * .push()
 * .pop()
 * .slice()
 *
 * Higher-order functions:
 * .map()
 * .filter()
 * .find()
 * .reduce()
 * .sort() <- this changes the original array
 * .forEach()
 *
 * ----
 * .some()
 * .every()
 *
 *
 * A higher-order function is a function that accepts in input another function
 *
 * Callback:
 * A function that we pass as an argument to another function
 */

const numbers = [8, 9, 2, 3, 5];

// Math.pow(n, 2); // n * n
// use map() to get a new array with every item multiplied by 2

const numbersDoubled = numbers.map((n) => n * 2);
console.log("numbers doubled", numbersDoubled);

const numbersDoubled2 = numbers.map((n) => n * 2);
console.log("numbers doubled2", numbersDoubled2);

const numbersDoubled3 = numbers.map((n) => {
  return n * 2;
});
console.log("numbers doubled3", numbersDoubled3);

const numbersDoubled4 = numbers.map(function (n) {
  return n * 2;
});
console.log("numbers doubled4", numbersDoubled4);

const numbersDoubled5 = numbers.map((n, index, array) => array[index] * 2);
console.log(numbersDoubled5);

// use map to replace all the odd numbers with -1
// leave the even numbers as they are
// [8, 9, 2, 3, 5] => [8, -1, 2, -1, -1]

const oddNumbersReplaced = numbers.map((n) => {
  if (n % 2 === 0) {
    return n;
  } else {
    // return -1;
    n = -1;
    return n;
  }
});
console.log("odd numbers replaced", oddNumbersReplaced);

const oddNumbersReplaced2 = numbers.map((n) => {
  if (n % 2 !== 0) {
    return -1;
  } else {
    return n;
  }
});
console.log("odd numbers replaced 2", oddNumbersReplaced2);

const oddNumbersReplaced3 = numbers.map((n) => n % 2 !== 0 ? -1 : n);
console.log("odd numbers replaced 3", oddNumbersReplaced3);

const oddNumbersReplaced4 = numbers.map((n) => {
  if (n % 2 !== 0) {
    n = -1;
  }
  return n;
});
console.log("odd numbers replaced 4", oddNumbersReplaced4);


// song duration in seconds: 184
// song duration: 3:04
// 184 -> 3:04

let durationInSeconds = 184;
let minutes = Math.floor(durationInSeconds / 60);
// let seconds = durationInSeconds % 60;
let seconds = durationInSeconds - minutes * 60;
console.log(minutes);
console.log(seconds);

// what if our playlist is longer than 1 hour? How do we print the whole duration?







// can we add another parameter "multiplier" to map? No

let numbers2 = [1, 2, 3, 4];

let doubled = numbers2.map((n) => n * 2);
let tripled = numbers2.map((n) => n * 3);

function multiplyArrayBy(array, multiplier) {
    let result = array.map((n) => n * multiplier)
    return result;
}

let numbersTimes2 = multiplyArrayBy(numbers2, 2);
let numbersTimes3 = multiplyArrayBy(numbers2, 3);
let numbersTimes4 = multiplyArrayBy(numbers2, 4);
let numbersTimes51 = multiplyArrayBy(numbers2, 51);

console.log(numbersTimes4);
console.log(numbersTimes51)