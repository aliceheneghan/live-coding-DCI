/**
 * 
 * Sales: 100, 0.5, 99, 76, 1, 235
 * 
 */

// get the highest sale of the list
console.log(Math.max(100, 0.5, 99, 76, 1, 235, 99, 0.9, 12)); // 235
console.log(Math.min(100, 0.5, 99, 76, 1, 235, 99, 0.9, 12)); // 0.5

let jakeAge = 90;
let mariaAge = 90;

let greaterAge = Math.max(mariaAge, jakeAge);
let smallerAge = Math.min(jakeAge, mariaAge);

// I want to know the age difference between Jake and Maria.
// the age difference must be a positive number

let ageDifference = greaterAge - smallerAge;
console.log(ageDifference);

