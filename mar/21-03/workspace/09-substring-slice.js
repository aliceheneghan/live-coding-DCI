/**
 * Substring
 *
 * string.greeting(start, end);
 *
 * - the start index is including: if I use index 1, I'm including the character at index 1
 * - the end index is excluding: if I use index 5, I'm only including characters until index 4
 * 
 * If I specity only the starting index, I will get a string from that index until the end
 */

let greeting = "hello world";

// let's get only the "hello" out of the whole string
console.log(greeting.substring(0, 5));

// let's get only the "llo" out of the whole string
console.log(greeting.substring(2, 5));

console.log(greeting.substring(2, 5));

console.log(greeting.substring(8, 9));

console.log(greeting.substring(0, 2) + greeting.substring(8, 10));

// let's get only the "world" out of the whole string
console.log(greeting.substring(6));

/**
 * Slice
 * 
 * Slice is (almost) identical to substring
 */

// let's get only the "world" out of the whole string
console.log(greeting.slice(6));

// let's get only the "hello" out of the whole string
console.log(greeting.slice(0, 5));

let stringSlice = greeting.slice(0, 5);
console.log(stringSlice);