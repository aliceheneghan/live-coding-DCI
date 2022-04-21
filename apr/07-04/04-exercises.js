// task 4
/**
 * Write a function called max that takes in an array of numbers as a parameter.
 * It should return the largest number in the array.
 *
 * For example:
 * max([1, 6, 83, 91, 0, -4, 1337, 5, 1337]); // => 1337
 * max([1, 2, 3]); // => 3
 * max([1]); // => 1
 * max([0, -1, -2, -3]); // => 0
 *
 */

function max(numbers) {
  let result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > result) {
      result = numbers[i];
    }
  }
  return result;
}

console.log("test with empty array", max([])); // => undefined 
console.log(max([1, 6, 83, 91, 0, -4, 1337, 5])); // => 1337
console.log(max([1, 2, 3])); // => 3
console.log(max([1])); // => 1
console.log(max([0, -1, -2, -3])); // => 0

/**
 *
 * Write a function that takes an array of numbers as input and returns a new array
 * containing only even numbers
 */
function evenNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(evenNumbers([1, 6, 83, 91, 0, -4, 1337, 5, 2, 8])); // => [6, 0, -4, 2, 8]
console.log(evenNumbers([1, 2, 3])); // => [2]
console.log(evenNumbers([1])); // => []
console.log(evenNumbers([])); // => []
console.log(evenNumbers([0, -1, -2, -3])); // => [0, -2]

// task 12

// Write an arrow function that takes in one string and returns a new string.
// The new string needs to be made from the first letter of each of the words in the input.

// Examples:

// firstletters("cat") --> "c"
// firstLetters("What the fruit") --> "Wtf"
// firstLetters("MongoDB Express Node React") --> "MENR"
// firstLetters("What You See Is What You Get") --> "WYSIWYG"

const firstLetters = (string) => {
  let newString = "";
  let stringArray = string.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    // console.log(stringArray[i][0]);
    newString += stringArray[i][0];
  }
  return newString;
};
console.log(firstLetters("cat"));
console.log(firstLetters("What the fruit"));
console.log(firstLetters("MongoDB Express Node React"));
console.log(firstLetters("What You See Is What You Get"));

// Task 3
// Write a function called repeat that takes in two parameters.

// the first one should be a number
// the 2nd one should be a string
// The functions returns the 2nd argument repeated as many times as the 1st argument defines.

// For example:

// repeat(3, "Woah"); // => `WoahWoahWoah`

function repeat(times, string) {
  let output = "";
  for (let i = 0; i < times; i++) {
    output += string;
  }
  return output;
}

console.log(repeat(3, "cat"));
console.log(repeat(5, "T-rex"));

// a function that sums numbers until the value "max" and returns the total
function add(max) {
  let total = 0;
  for (let i = 0; i < max; i++) {
    total += i;
  }

  return total;
}

console.log("Total of the sum of numbers from 0 to 10:", add(10));
console.log("Total of the sum of numbers from 0 to 3:", add(3));
console.log("Total of the sum of numbers from 0 to 100:", add(100));

let products = [
  "Red shoes",
  "Blue shoes",
  "Red shoes 2",
  "Green shoes",
  "Yellow shoes",
  "Red shoes",
];

// returns an array containing only red shoes

function onlyRedShoes(shoes) {
  let result = [];
  for (let i = 0; i < shoes.length; i++) {
    if (shoes[i].toLowerCase().includes("red")) {
      result.push(shoes[i]);
    }
  }
  return result;
}

console.log(onlyRedShoes(products));


function maxWithNull(numbers) {
  let result = null;
  for (let i = 0; i < numbers.length; i++) {
    if (result === null || numbers[i] > result) {
      result = numbers[i];
    }
  }
  return result;
}

console.log(maxWithNull([1, 2, 3])); // 3
console.log(maxWithNull([])); // null 
console.log(maxWithNull([0, -1, -2, 1, -3])); // 1