/**
 * Assignment
 *
 * assignment: =
 * addition assignment: +=
 * subtraction assignment: -=
 * multiplication assignment: *=
 * division assignment: /=
 */

let x = 2;

let sum = 0;

sum += x; // sum = sum + x
console.log(sum);
sum += x; // sum = sum + x
sum += x; // sum = sum + x
sum += x; // sum = sum + x
sum += x; // sum = sum + x
console.log(sum);

// string concatenation
let greeting = "hello";
let username = "max";

let message = greeting + " " + username + " " + username + "'something'" + " " + greeting;
console.log(message);
let message2 = `${greeting} ${username}`;
console.log(message2);


let stringResult = "";

stringResult += "a";
stringResult += "b";
stringResult += "c";
stringResult += "d";
stringResult += "e";

console.log(stringResult);