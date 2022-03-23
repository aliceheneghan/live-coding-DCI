/**
 * String concatenation with the + operator
 * 
 * If we use the + operator on a series of strings, or a string and number, as a result
 * we get a new string with all the parts combined together
 * 
 * Examples:
 * 
 * "hello" + "world" => "helloworld"
 * 
 * "my favourite number is " + 21 => "my favourite number is 21"
 */

"100" + 2; // "1002"

console.log("hello" + "world"); // "helloworld"

console.log("hello" + " world"); // "hello world"

console.log("hello " + "world"); // "hello world"

console.log("hello" + " " + "world"); // "hello world"

let firstName = "Carlo";
let countryOfOrigin = "Italy";
let currentCity = "Berlin";

console.log("Hello, my name is" + " " + firstName  +  ". I come from " + countryOfOrigin + " and I live in " + currentCity);