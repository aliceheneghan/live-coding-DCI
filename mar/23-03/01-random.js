/**
 * Math.random()
 *
 * Math.random() gives us a random value between 0 and 1 (1 is not include)
 *
 * The range is technically between 0 and 0.99999999999999
 */

console.log("a random number between 0 and 1 (not included)", Math.random());

console.log(Math.random() * 6); // 0 - 6 (not included), 0 - 5.999999999999
console.log(Math.random() * 7); // 0 - 6
console.log(Math.random() * 10); // 0 - 9

console.log(Math.floor(Math.random() * 6)); // 0 - 5 (all integers)

console.log("dice roll", Math.floor(Math.random() * 6) + 1); // 1 - 6 (all integers)
console.log("dice roll", Math.floor(Math.random() * 20) + 1); // 1 - 20 (all integers)

// let max = 10;

// console.log(`random integers between 1 and ${max}`, Math.floor(Math.random() * max) + 1);

// random integers between 5 and 10


console.log(`random integers between 5 and 10`, Math.floor(Math.random() * 10) + 5); // 5 and 15

console.log((Math.floor(Math.random() * (10 - 5)) + 5)); // 5 - 9



// get random integers between min and max, excluding max
let min = 5;
let max = 10;
console.log((Math.floor(Math.random() * (max - min)) + min)); // 5 - 9
// random integers between 2000 and 2022


// random integers between 5 and 12


console.log("5 and 11", (Math.floor(Math.random() * (12 - 5)) + 5)); // 5 - 11 


// random integers between 12398754349 and 23498763406350698

let max2 = 2; 
let min2 = 5;


console.log("5 and 2", (Math.floor(Math.random() * (max2 - min2)) + min2)); // 5 - 9




// get random integers between min and max, including max
let min3 = 2000;
let max3 = 2022;
console.log((Math.floor(Math.random() * (max3 - min3 + 1)) + min3)); // 5 - 12 