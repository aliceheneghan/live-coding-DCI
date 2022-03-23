/**
 * Template literals strings
 * 
 * It works with backticks ` 
 */

let string = `"I can use double quotes" and 'I can also use single quotes'`;

console.log(string);

let firstName = "Carlo";
let countryOfOrigin = "Italy";
let currentCity = "Berlin";

console.log("Hello, my name is" + " " + firstName  +  ". I come from " + countryOfOrigin + " and I live in " + currentCity);
console.log(`Hello, my name is ${firstName}. I come from ${countryOfOrigin} and I live in ${currentCity}`);
console.log(`${firstName} ${countryOfOrigin} ${currentCity}`)

let userName = "some user name"

let greeting = `Hello, ${userName}`;


console.log(`The sum of 2 + 3 is equal to ${2 + 3}`);