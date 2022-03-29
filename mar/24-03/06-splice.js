/**
 * splice()
 * 
 * splice(start, deleteCount, newItem) 
 * 
 * with splice we can cut a portion of an array:
 * - with "start" we specify where we want to cut
 * - with "deleteCount" we specify how many items we want to cut (remove)
 * - optionally, we can add one or more newItems where we made the cut
 */

let numbers = [1, 2, 99, 3, 4, 5];

// let's remove the 99 out of the numbers array
numbers.splice(2, 1); // remove 1 item, starting at index 2

console.log(numbers);


let animals = ["cat", "turtle", "fish", "a", "b", "c", "giraffe", "monkey"];

// let's remove the letters from the animals array
animals.splice(3, 3);
console.log(animals)

let letters = ["a", "b", "c", 1, 2, 3, 4, 5, "e", "f", "g"];

// let's remove the numbers from the letters array, and put the missing "d" in their place
let splicedLetters = letters.splice(3, 5, "d");
console.log("spliced letters", splicedLetters);
console.log(letters);

let cities = ["Berlin", "London", "Leipzig"];

// let's add Rome and Tokyo between London and Leipzig

let splicedPortion = cities.splice(2, 0, "Rome", "Tokyo");

console.log("spliced portion", splicedPortion);
console.log(cities);

let tools = ["hammer", "screwdriver", "saw"];

let slicedTools = tools.splice(-1, 1, "nail");
console.log(slicedTools);
console.log(tools);