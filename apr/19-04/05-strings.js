let string = "hello";

console.log(string[0]);
console.log(string[string.length - 1]); // o
console.log(string[string.length]); // undefined

console.log(string.toUpperCase());

/**
 * .includes()
 *
 * returns a boolean, depending on the value we pass as an argument
 */
console.log(string.includes()); // false
console.log(string.includes("l")); // true
console.log(string.includes("ll")); // true
console.log(string.includes("lll")); // false
console.log(string.includes("ol")); // false

// let's check if "string" contains an o or an l
console.log(string.includes("o") || string.includes("l")); // true

// let's check if "string" contains an o AND an l, in any order
console.log(string.includes("o") && string.includes("l")); // true

// check if a string contains a vowel
console.log(
  string.includes("a") ||
    string.includes("e") ||
    string.includes("i") ||
    string.includes("o") ||
    string.includes("u")
); // true

// check if a string starts with another string

// let's check if a string starts with "ja"

let inputString = "JavaScript";
let lowerCaseString = inputString.toLowerCase();

console.log("solution 1", lowerCaseString[0] === "j" && lowerCaseString[1] === "a");

// startsWith()
console.log("solution 2", lowerCaseString.startsWith("ja"));

// slice()

console.log("solution 3", lowerCaseString.slice(0, 2) === "ja");
console.log("solution 4", lowerCaseString.slice(0, 2).includes("ja"));

// trim()
let string2 = "  hello ";
console.log(string2.trim())