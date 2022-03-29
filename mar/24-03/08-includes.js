/**
 * includes()
 */

const animals = ["cat", "koala", "turtle", "monkey", "tiger", "lion", "giraffe"];

console.log(animals.includes("crocodile")); // false 
console.log(animals.includes("koala")); // true
console.log(animals.includes("monk")); // false

// let's check if the array contains "turtle" after index 4
console.log(animals.includes("turtle", 4)); // 

