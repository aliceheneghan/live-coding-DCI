/**
 * .includes()
 *
 * it checks if a string contains another string
 */

let greeting = "hello world";

console.log(`does greeting include "w"?`, greeting.includes("w")); // true

console.log(`does greeting include "wor"?`, greeting.includes("wor")); // true

console.log(`does greeting include "W"?`, greeting.includes("W")); // false

console.log(`does greeting include " "?`, greeting.includes(" ")); // true 

console.log(`does greeting include "hey"?`, greeting.includes("hey")); // false 

// we'll learn about the exclamation mark soon
console.log(`does greeting does NOT include "hey"?`, ! greeting.includes("hey")); // true 




