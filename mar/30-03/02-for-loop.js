/**
 * for loop
 *
 * There are 3 main elements in the for loop:
 * - a starting point
 * - a condition, until when to run the loop
 * - an update
 */

// start at 0
// count until 5
// console.log("hey");

// i = i + 1
// i += 1
// i++

// for (initialization; exit condition; update) {
// any code we want to execute
// }

// let's print "hey" 5 times
for (let i = 0; i < 5; i++) {
  console.log("hey");
}

// let's print the numbers from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// let's print the numbers from 0 to 5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// let's print the numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// this loop doesn't run even once
for (let i = 1; i >= 5; i++) {
  console.log("what do I see?");
  console.log(i);
}

// let i = 0;
// for (; i <= 5; i++) {
//   console.log("example 1", i);
// }
// console.log(i); // 99

let i = 99;
for (let i = 0; i <= 5; i++) {
  // inside the loop javascript will use the local i
  console.log("example 1", i);
}
// outside the loop it will use the global i, which is initialized to 99
console.log(i); // 99

// count down from 10 to 0
for (let i = 10; i >= 0; i--) {
  console.log("example 2", i);
}

// never ending loop
// for (let i = 10; i >= 0; i++) {
//     console.log("example 3", i);
// }

// can we increase the i by 2?
for (let i = 0; i <= 10; i += 2) {
  console.log("example 3", i);
}

// can we increase the i with a multiplication?
// i = 1 * 2 -> 2
// i = 2 * 2 -> 4
// i = 4 * 2 -> 8
// i = 8 * 2 -> 16
for (let i = 1; i <= 100; i *= 2) {
  console.log("example 4", i);
}

// let's print all odd numbers
for (let i = 0; i <= 100; i += 2) {
  console.log("example 5", i + 1);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log("example 6", i);
  }
}

// print all the numbers and next to them print if they are even or odd
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log("example 7", i, "odd");
  } else {
    console.log("example 7", i, "even");
  }
}

// use variables inside loop parenthesis
let start = 100;
let end = 200;

for (let i = start; i <= end; i++) {
    console.log("example 8", i);
}
