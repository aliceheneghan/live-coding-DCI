let greeting = "hello";

// let's get the length of the string inside greeting

// greeting.length;

console.log(greeting.length);

console.log("hey".length);

console.log("123".length);

""; // empty string

let emptyString = "";

console.log(emptyString.length);

/**
 * Every character inside of a string has an index
 * 
 * The index of a string starts at 0
 * so the first character in a string is at index 0
 *
 * To get a single character out of a string, we use the bracket notation, and
 * we specity the index inside of the brackets:
 * 
 * greeting[0]
 * 
 * Since we start counting at 0, the last index in a string is always 
 * the string length - 1
 */

// greeting = "hello"



console.log(greeting[0]); // h
console.log(greeting[1]); // e
console.log(greeting[4]); // o
console.log(greeting[9]); // undefined


let sentence = "hello, today is Thursday the 17th";

console.log(sentence.length);

console.log(sentence[33 - 1])


let string = "we are learning javascript";

// 

console.log(sentence[sentence.length - 1]);


console.log(sentence[2]);

sentence[0] = "Z";

console.log(sentence);