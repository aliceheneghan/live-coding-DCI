/**
 * The trim method removes empty spaces from the beginning and the end of a string
 */

let greeting = "     hello world        ";

console.log(`the string "${greeting}" is ${greeting.length} characters long`);

let trimmedGreeting = greeting.trim();

console.log(`after trimming it, the string "${greeting}" is ${trimmedGreeting.length} characters long: ${trimmedGreeting}`)