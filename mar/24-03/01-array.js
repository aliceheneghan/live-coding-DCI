/**
 * Primitive data types:
 * (immutable, once created cannot be changed)
 * - number
 * - string
 * - boolean
 * - undefined
 * - null
 * 
 * - symbol
 * - bigint
 * 
 * Non-primitive data types:
 * (these values can be changed)
 * - object
 *   - array
 *   - date 
 *   - regular expression 
 * - function
 */

// this is an array literal
[]; // this is an empty array

// this is also an array literal
[1, 2, 3]; // it's an array that contains 3 items: 1, 2, and 3

["a", "b", "c"]; // array that contains 3 string items: "a", "b", and "c"

// an array can contain any kind data types, and also different ones at the same time 
[1, "a", true, false, 2, "b"]; 

let emptyArray = [];

console.log(1, 2, 3); // I'm printing 3 values to the console
console.log(1, 2, 3, 4); // I'm printing 4 values to the console
console.log([1, 2, 3]); // I'm printing 1 value to the console 

let iceCreamFlavors = ["hazelnut", "dark chocolate", "lemon", "vanilla", "strawberry"];

// let's print the value hazelnut to the console
console.log(iceCreamFlavors[0]);

// let's print the value vanilla to the console
console.log(iceCreamFlavors[3]);

// let's print the value strawberry to the console
console.log(iceCreamFlavors[4]);


// let's print the last item in the array
console.log("last item:", iceCreamFlavors[iceCreamFlavors.length - 1]);

// print the element right before the last one to the console
console.log("second last item:", iceCreamFlavors[iceCreamFlavors.length - 2]);



// print 2 values at the same time
// not possible, we need a method (like slice for strings)
// console.log("2 items at the same time", iceCreamFlavors[2, 4]); 