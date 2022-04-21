// write a function to check if a number in input is even or odd
// it should return true or false

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2)); // true
console.log(isEven(11)); // false

/**
 * Write a function that takes a string in input and returns true if the length
 * of the string is an even number, otherwise returns false
 */

function isStringLengthEven(string) {
  if (string.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isStringLengthEven("table")); // false
console.log(isStringLengthEven("blabla")); // true
console.log(isStringLengthEven("cat")); // false

function isArrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("");
console.log("array exercise starts here:");
console.log("");
console.log(isArrayLengthEven(["c", "a", "t"])); // false
console.log(isArrayLengthEven(["d", "o", "g"])); // false
console.log(isArrayLengthEven(["n", "o", "t", "e"])); // true
console.log(isArrayLengthEven(["g", "r", "e", "e", "n"])); // false

console.log(isArrayLengthEven("green")); // false
console.log(isArrayLengthEven("note")); // true

function isLengthEven(item) {
  // if the item is a number, we convert it to a string
  if (typeof item === "number") {
    // item = item.toString()
    item = "" + item;
  }
  //   if (item.length % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  let result = isEven(item.length);
  return result;
}

console.log(isLengthEven("note"));
console.log(isLengthEven("dog"));
console.log(isLengthEven([1, 2, 3]));
console.log(isLengthEven([1, 2, 3, 4]));
console.log(isLengthEven(122));
console.log(isLengthEven(1223));

// how do we convert a number into a string?
let number = 22;
let string = "" + number;

// option 2
let string2 = number.toString();

let someString = "hello";

console.log(isEven(someString.length)); // false
