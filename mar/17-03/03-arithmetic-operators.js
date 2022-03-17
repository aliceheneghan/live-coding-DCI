/**
 * 
 * + addition
 * - subtraction
 * * multiplication
 * / division
 * % remainder
 * ** exponentiation
 */

console.log(2 + 33);
console.log(2.15 + 33);

console.log(10 - 2);
console.log(6 - 8);

console.log(2 * 8);

console.log(7 / 2); // 3.5
console.log(7 % 2); // 1

console.log(8 % 2);

// even numbers: 2, 4, 6, 8, 10, 12...
// odd numbers: 1, 3, 5, 9, 11, 13...

// even numbers are numbers that are divisible by 2, or that are multiples of 2
console.log(2 % 2);
console.log(4 % 2);
console.log(6 % 2);
console.log(126 % 2);

// odd numbers are numbers that are NOT divisible by 2, or that are NOT multiples of 2

console.log(3 % 2);
console.log(7 % 2);
console.log(13 % 2);


// if we use remainder with other numbers, like 3, what we are asking is if the number
// is a multiple of 3 

// what we can check here is if 9 is a multiple of 3: 
// if the result is 0, it is a multiple of 3
// if the result is NOT 0, it is NOT a multiple of 3

console.log(9 % 3);


// 10 + 5 => 3
console.log((10 + 5) % 12);


console.log("2 ** 2 is equal to:", 2 ** 2);
console.log("2 ** 3 is equal to:", 2 ** 3); // 2 * 2 * 2

console.log("3 ** 2 is equal to", 3 ** 2); // 3 * 3


console.log(2 + 1 - 10 + 6 * 8 / 2);

console.log(2 + 1 - 10 + ((6 * 8) / 2));

console.log((2 + 1 - 10 + 6) * 8 / 2);


let sum = 2 + 1 - 10;
let multiply = 6 * 8;

console.log(sum + (multiply / 2));
