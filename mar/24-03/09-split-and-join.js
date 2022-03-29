/**
 * Transforming a string into an array
 * 
 * String.prototype.split()
 * 
 * Transforming an array into a string
 * Array.prototype.join()
 * 
 */

const greeting = "hello";

console.log(greeting.split("")); // ["h", "e", "l", "l", "o"]

const sentence = "hello everyone we are learning JavaScript";

// we want an array with every word from the sentence above
let words = sentence.split(" ");
console.log(words);

let cssProperty = "background-color";
let cssPropertyArray = cssProperty.split("-");

console.log(cssPropertyArray)

// let cssPropertyCamelCase = cssPropertyArray[0] + cssPropertyArray[1]

// let's put our sentence back together, but every word is separated by an underscore

console.log(words.join("_"));

// let's put our sentence back together, but every word is attached to one another
console.log(words.join(""));

// let's put our sentence back together, exactly as it was
console.log(words.join(" "));


// let's put our sentence back together, between each word we have a smile :)
console.log(words.join(" :) "));