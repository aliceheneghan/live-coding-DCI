/**
 * Rounding numbers 
 * 
 * Math.ceil()
 * Rounding up:
 * 0.23 => 1
 * 0.86 => 1
 * 10.06 => 11
 * ...
 * 
 * Math.floor()
 * Rounding down:
 * 0.23 => 0
 * 0.86 => 0
 * 1.26 => 1
 * 10.06 => 10
 * ...
 * 
 * Math.round()
 * Rouding to closest:
 * 1.75 => 2
 * 1.4 => 1
 * 1.5 => 2
 * 0.5 => 1
 * 0.499999999 => 0
 */

console.log(Math.floor(1.9)); // 1
console.log(Math.floor(10.1)); // 10

console.log(Math.ceil(1.9)); // 2
console.log(Math.ceil(10.1)); // 11


console.log(Math.round(0.2)); // 0
console.log(Math.round(0.6)); // 1
console.log(Math.round(11.5)); // 12
console.log(Math.round(8.85)); // 9
