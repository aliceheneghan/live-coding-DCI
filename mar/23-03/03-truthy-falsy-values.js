/**
 * Truthy and falsy values
 *
 *
 */

console.log(true ? "1" : "2");
console.log(false ? "1" : "2");

console.log("hello" ? "1" : "2");

console.log("" ? "1" : "2");
console.log(100 ? "1" : "2");

// falsy values
false;
0 - 0;
("");
undefined;
null;
NaN;

// truthy values

// all values are truthy, except the falsy ones
true;
1;
2;
3 - 1 - 2;
("hello");
("hey");

console.log(undefined || "hello"); // "hello"

let typedName = "";

let username = typedName || "Guest123";

console.log(username);

let userName = "yia";
console.log(
  userName ? `your username is ${userName}` : "please enter a valid username"
);
