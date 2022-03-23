let result = 0.1 + 0.2;

/**
 * toFixed()
 * 
 * The toFixed method gives you a string containing the number with an amount
 * of decimal digits equal to the one specified in parenthesis
 * 
 * let number = 0.1234567;
 * number.toFixed(2) => "0.12" 
 * number.toFixed(3) => "0.123" 
 * number.toFixed(1) => "0.1" 
 */ 
console.log(result.toFixed(1)); // 0.30 here 0.30 is a string
// "0.30" => 0.30
console.log(parseFloat(result.toFixed(2))); // 0.30


// how many numbers between 0 and 1?
// 0.1, 0.2, 0.21, 0.211, 0.1

let a = 0.1;
let b = 0.2;

let result1 = (a * 100) + (b * 100); // 10 + 20

console.log(result1); // 30
console.log(result1 / 100); // 0.3