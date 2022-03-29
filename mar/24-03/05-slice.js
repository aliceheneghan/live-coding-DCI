/**
 * slice()
 *
 */

let animals = ["dog", "cat", "giraffe", "zebra", "koala", "mouse"];

console.log(animals.slice(1, 3)); // ["cat", "giraffe"]

let sliceOfArray = animals.slice(1, 3);

console.log(animals);
console.log(sliceOfArray);

// get a slice with the last 2 items of an array
console.log(animals.slice(-2));
console.log(animals.slice(animals.length - 2));
