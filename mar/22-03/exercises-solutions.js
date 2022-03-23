// Declare a variable with the value of "I can walk in the park all day!".

// Output the word "park" to the console.

let string1 = "I can walk in the park all day!";

// the method .indexOf() can give us the index of a character inside another string
console.log(string1.substring(18, 22));
console.log(string1.slice(18, 22));
console.log(string1[18] + string1[19] + string1[20] + string1[21]);
// console.log("park");

const javascriptString = "JavaScript";

console.log(javascriptString.slice(3, 6));

let stringTask6 = "cat";
// Bananas => expected output BBananasB
// Apple => expected output AAppleA
// cat => expected output  ccatc
// 123 => expected output  11231

/**
 * get the first character from a string
 *
 * string[0]
 * string.substring(0, 1)
 * string.slice(0, 1)
 */

let extraString = stringTask6[0];

console.log(stringTask6[0] + stringTask6 + stringTask6[0]);
console.log(stringTask6.slice(0, 1) + stringTask6 + stringTask6.slice(0, 1));
console.log(
  stringTask6.substring(0, 1) + stringTask6 + stringTask6.substring(0, 1)
);

console.log(extraString + stringTask6 + extraString);

// Create a new string from a given string taking the last 3 characters
// of the string and add them to both the front and back of the new string.

// The string length must be 3 or more

// For example: Starting string: Scritch

let stringTask7 = "Scritch";

// Scritch => tchScritchtch
// apple => pleappleple
// banana => anabananaana
// cat => catcatcat
// averylongstring => ingaverylongstringing

// let stringEnd = stringTask7.slice(4); // this approach works only for strings of length 7

// let stringPortionLength = 3;
// these are all equivalent and valid solutions
let stringEnd = stringTask7.slice(-3);
// let stringEnd = stringTask7.slice(stringTask7.length - 3);
// let stringEnd = stringTask7.substring(stringTask7.length - 3);

console.log(stringEnd);

console.log(stringEnd + stringTask7 + stringEnd);
// console.log(stringTask7 + stringTask7 + stringTask7)
// console.log(stringTask7.slice(0, 3) + stringTask7 + stringTask7.slice(0, 3))

/**
 * Given a string in input, create a new string where only the first letter
 * is transformed to uppercase
 *
 * the quick brown fox => The quick brown fox
 * cat => Cat
 * banana => Banana
 *
 */

let stringTask10 = "the quick brown fox";

// T
let uppercaseInitial = stringTask10.slice(0, 1).toUpperCase();
let stringExcludingInitial = stringTask10.slice(1);
let capitalisedString = uppercaseInitial + stringExcludingInitial;
// let initial = stringTask10[0].toUpperCase();
console.log(capitalisedString);

// bla@bla.com
// BLA@BLA.com

// let typedEmail = "BLA@BLA.COM";
// let emailStoredInDatabase = "bla@bla.com";

// let doesEmailMatch = typedEmail.toLowerCase() === emailStoredInDatabase;

// console.log(doesEmailMatch);

let stringTask8 = "hello";

let firstLetter = stringTask8[0];
let lastLetter = stringTask8[stringTask8.length - 1];
let middlePart = stringTask8.slice(1, -1);
// let middlePart = stringTask8.slice(1, stringTask8.length - 1);

let stringLettersSwapped = lastLetter + middlePart + firstLetter;

console.log(stringLettersSwapped);

let isMarried = true;

// let message = isMarried ? "John is happily married" : "John is not married";

let message = `John is ${isMarried ? "happily" : "not"} married`;
console.log(message);


let username = "";

// ternary operator
// conditional expression
let welcomeMessage = username === "" ? "Hello, dear guest!" : `Welcome back, ${username}`;
console.log(welcomeMessage);