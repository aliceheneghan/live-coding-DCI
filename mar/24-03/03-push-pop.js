/**
 * Array methods:
 * 
 * - push()
 * - pop()
 * 
 * push()
 *  - the push() method adds 1 or more elements at the end of an array
 *  - it returns the new length of the array
 * 
 * pop()
 * - the pop() method removes the last element of an array 
 * - it returns the element that it just removed
 * 
 */

const letters = ["a", "b", "c", "d", "e"];

console.log(`the array is equal to:`, letters);
console.log(`the length of the array is:`, letters.length);
// let's add an element at the end of the array
let newLength = letters.push("f");

console.log("the array letters is now: ", letters);
console.log("the length of the array is now:", newLength);

console.log("the popped element is:", letters.pop());
console.log("the array letters is now: ", letters);

let lastElement = letters.pop();
console.log("the last element in the array was:", lastElement);


// let's push more elements at once
letters.push("e", "f", "g", "h", "i");

console.log(letters);

// we can push any data type we want

letters.push(1, 2, 3);
console.log(letters)

// we can also push mixed data types
letters.push(1, true, "z", false)
console.log(letters)