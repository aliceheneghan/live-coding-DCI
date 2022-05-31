/**
 * Closure
 *
 * - A closure is a function that has access to its surrounding scope
 * - we can have a function (outer function) that returns a new function (inner function) 
 * and the inner function has ALWAYS access to whatever was inside of outer function (its scope)
 * 
 * - A closure is a function having access to the parent scope, even after the parent function has finished its execution.
 *
 * - A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 * 
 * In other words, a closure gives you access to an outer function's scope from an inner function.
 * 
 */

//     let counter = 0;
// function myCounter() {
//     counter++;
//     return counter;
// }

// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());

function outer() {
  let name = "outer";

  function inner() {
    console.log(`hey, I'm inner, I was declared inside of ${name}`);
  }

  return inner;
}

let innerFn = outer();
console.log(innerFn);

innerFn();

function makeCounter() {
  let counter = 0;
  function inner() {
    counter++;
    return counter;
  }
  return inner;
}


let counter1 = makeCounter();
let counter2 = makeCounter();
let counter3 = makeCounter();

console.log("counter1", counter1);
console.log("counter1()", counter1());
console.log("counter1()", counter1());
console.log("counter1()", counter1());

console.log("counter2()", counter2());
console.log("counter2()", counter2());
console.log("counter2()", counter2());