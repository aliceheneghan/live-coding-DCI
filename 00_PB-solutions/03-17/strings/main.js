/**
 * Task 1
 *
 * Using the bracket notation, print the initial of each word in the sentence below
 * to the console.
 *
 * Use a single console.log()
 *
 * Expected output: I w a d a s n
 *
 */

const sentence = "It was a dark and stormy night";

console.log(
  sentence[0],
  sentence[3],
  sentence[7],
  sentence[9],
  sentence[14],
  sentence[18],
  sentence[25]
);
/**
 * Task 2
 *
 * There are 4 constant variables containing the pieces of a famous song's lyrics.
 *
 * Create a new constant variable containing the 4 pieces concatenated together
 * and then print the result to the console
 *
 * Expected output: What would you think if I sang out of tune?
 *
 * (Pay attention to the spaces)
 *
 */

const lyricsPart1 = "What";
const lyricsPart2 = "would you think";
const lyricsPart3 = "if I sang";
const lyricsPart4 = "out of tune?";

const lyrics =
  lyricsPart1 + " " + lyricsPart2 + " " + lyricsPart3 + " " + lyricsPart4;

console.log(lyrics);

/**
 * Task 3
 *
 * Using the bracket notation get the initial of the words in the sentence below
 * to form the string "hello".
 *
 * Concatenate these initials and assign them to a new variable called "greeting"
 *
 * Print the result to the console
 *
 * Expected output: hello
 */

const words = "here everyone likes lemons and oranges";

const greeting = words[0] + words[5] + words[14] + words[20] + words[31];
console.log(greeting);
/**
 * Task 4
 *
 * Create 3 variables containing:
 * - your name
 * - your country of origin
 * - the city you live in
 *
 * Use template literals (the backticks) to form a sentence and print it to the console
 *
 * Example output: Hello, my name is Carlo, I come from Italy and I live in Berlin.
 *
 */

let firstName = "Carlo";
let countryOrigin = "Italy";
let currentCity = "Berlin";

console.log(
  `Hello, my name is ${firstName}, I come from ${countryOrigin} and I live in ${currentCity}`
);
