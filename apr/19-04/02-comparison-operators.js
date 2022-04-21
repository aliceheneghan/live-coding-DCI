/**
 * Comparison operators
 * 
 * strict equality: ===
 * strict inequality: !==
 * less than: <
 * larger than: >
 * less than or equal to: <=
 * larger than or equal to: >=
 * 
 * With comparison operators we create expressions that result in a boolean value
 */

console.log("2 === 2", 2 === 2); // true
console.log("2 !== 2", 2 !== 2); // false
console.log("5 !== 2", 5 !== 2); // true
console.log("false === false", false === false); // true
console.log("true !== false", true !== false); // true
console.log("NaN === NaN", NaN === NaN); // false

// to check if a value is NaN we need to use a function
console.log("isNaN(NaN)", isNaN(NaN)); // true
console.log("Number.isNaN(NaN)", Number.isNaN(NaN)); // true

console.log("2 > 4", 2 > 4); // false
console.log("2 >= 4", 2 >= 4); // false
console.log("2 > 2", 2 > 2); // false
console.log("2 >= 2", 2 >= 2); // true