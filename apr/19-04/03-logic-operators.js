/**
 * Logic operators
 * 
 * logical AND: &&
 * logical OR: ||
 * logical NOT: !
 * 
 */

console.log(! (true || false)); // false
console.log(! ((true || false) || (true || true))); // false

console.log("false && true", false && true); // false
console.log("true && true", true && true); // true



let x = 5;
console.log("Is x in the range between 0 and 10?", x >= 0 && x <= 10); // true

let y = 7;
console.log("Is x or y in the range between 0 and 10?", (x >= 0 && x <= 10) || (y >= 0 && y <= 10)); // true

// this is wrong
// console.log("Is x or y in the range between 0 and 10?", x || y >= 0 && x || y <= 10); // true