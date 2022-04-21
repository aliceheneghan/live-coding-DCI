function sum(a, b) {
  const result = a + b;
  return result;
  // return a + b;
}

console.log(sum(1, 2));

// containsVowel

function containsVowel(string) {
  const lowerCaseString = string.toLowerCase();
  let result =
    lowerCaseString.includes("a") ||
    lowerCaseString.includes("e") ||
    lowerCaseString.includes("i") ||
    lowerCaseString.includes("o") ||
    lowerCaseString.includes("u");
  return result;
}

function containsVowel2(string) {
  let lowerCaseString = string.toLowerCase();
  const vowels = "aeiou";
  // const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (vowels.includes(lowerCaseString[i])) {
      // vowels.includes("t"), vowels.includes("a")...
      return true;
    }
  }
  return false;
}

console.log(containsVowel("table")); // true
console.log(containsVowel("AEIOU")); // true
console.log(containsVowel("bcdfg")); // false
containsVowel("a"); // true
containsVowel("aeiou"); // true
containsVowel(""); // false
containsVowel("Abc"); // true

function containsNumber(string) {
  const numbers = "0123456789";
  for (let i = 0; i < string.length; i++) {
    if (numbers.includes(string[i])) {
      return true;
    }
  }
  return false;
}

function containsNumber2(input) {
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(parseInt(input[i]))) {
      return true;
    }
  }
  return false;
}

console.log(containsNumber2("-1"));
console.log(containsNumber2("a1"));
console.log(containsNumber2("abcdf"));
console.log(containsNumber2(""));
console.log(containsNumber2(["1", "a", "l"]));
console.log(containsNumber2(["b", "a", "l"]));

// sumEvenNumbers
// [1, 2, 3, 4, 5, 6, 7] => 12
// [0, 2, 4] => 6
// [1, 3, 5] => 0
2 % 2 === 0; // true
3 % 2 === 0; // false
4 % 2 === 0; // true
5 % 2 === 0; // false
function sumEvenNumbers(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      result += input[i];
    }
  }
  return result;
}
console.log("sum even numbers:");
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7]));
console.log(sumEvenNumbers([0, 2, 4]));
console.log(sumEvenNumbers([1, 3, 5]));
console.log(sumEvenNumbers("135"));

// countOddNumbers
/**
 * write a function that takes an array of numbers in input and returns a number
 * with how many odd numbers are in the array
 *
 * [1, 2, 3] => 2
 * [1, 3, 5] => 3
 * [5, 5, 5, 5, 5, 5] => 6
 * [0, 2, 4] => 0
 */

function countOddNumbers(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 1) {
      // result += 1;
      result++;
    }
  }
  return result;
}
console.log("count odd numbers");
console.log(countOddNumbers([5, 5, 5, 5, 5, 5]));
console.log(countOddNumbers([1, 2, 3]));
console.log(countOddNumbers([0, 2, 4]));

// countConsonants
function countConsonants(input) {
  const lowerCaseInput = input.toLowerCase();
  let result = 0;
  //   const vowel = "aeiou";
  //   const symbols = " ,./-_";
  const consonants = "bcdfghjklmnpqrstwxyz";
  for (let i = 0; i < lowerCaseInput.length; i++) {
    if (consonants.includes(lowerCaseInput[i])) {
      result++;
    }
  }
  return result;
}
console.log("count odd numbers");
console.log(countConsonants([5, 5, 5, 5, 5, 5]));
console.log(countOddNumbers([1, 2, 3]));
console.log(countOddNumbers([0, 2, 4]));
