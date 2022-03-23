/**
 * You have 2 variables containing the birthdates of 2 persons

- extract the year from the 2 dates and save them into 2 new variables
- using the ternary operator on these 2 variables, print a message to the console like 

- "Fiona is older than Jacob" or  
- "Jacob is older than Fiona",

depending on the comparison between the 2 years

let jacobBirthdate = "20/06/1995";
let fionaBirthdate = "12/11/1992";
 */

let jacobBirthdate = "20/06/1995";
let fionaBirthdate = "12/11/1992";

/**
 * we want the last 3 characters of these strings:
 *
 * abcdef
 * abc
 * 123456789
 */
// .substring()
// .slice()

// let jacobYear = jacobBirthdate.substring(6);
let jacobYear = parseInt(jacobBirthdate.slice(-4));
let fionaYear = parseInt(fionaBirthdate.slice(-4));

// console.log(
//   `Fiona is older than Jacob because she was born in ${fionaYear} and Jacob in ${jacobYear}`
// );

let result =
  jacobYear < fionaYear
    ? "Jacob is older than Fiona"
    : "Fiona is older than Jacob";

// let result =
//   jacobYear < fionaYear
//     ? "Jacob is older than Fiona"
//     : fionaYear < jacobYear
//     ? "Fiona is older than Jacob"
//     : "Fiona and Jacob have the same age";
console.log(result);

// let string = "abcdefg";

// console.log(string.slice(-2, -1))

// Using the variables from Task 1, calculate the age difference between Jacob and Fiona

// Print a message to the console, like:

// Fiona is 3 years older than Jacob

let ageDifference =
  jacobYear > fionaYear ? jacobYear - fionaYear : fionaYear - jacobYear;

console.log(ageDifference);

let result2 =
  jacobYear < fionaYear
    ? `Jacob is ${ageDifference} years older than Fiona`
    : `Fiona is ${ageDifference} years older than Jacob`;

console.log(result2);

// Use a JavaScript method to find the largest of these values
// assign this value to a new variable
// output a message to the console saying if the number is even or odd

let a = 8;
let b = 9;
let c = 12;

let largestValue = Math.max(a, b, c);

// approach 1
// to check if number is even: number % 2 === 0
console.log(
  largestValue % 2 === 0
    ? `${largestValue} is an even number`
    : `${largestValue} is an odd number`
);

// approach 2
// to check if number is odd: number % 2 === 1
console.log(
  largestValue % 2 === 1
    ? `${largestValue} is an odd number`
    : `${largestValue} is an even number`
);

// approach 3
let isOdd = largestValue % 2 === 1;

console.log(
  isOdd
    ? `${largestValue} is an odd number`
    : `${largestValue} is an even number`
);
