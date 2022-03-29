/**
 * 
 */

let string = "hello";

string[1] = "Z";

console.log("string:", string);


let array = ["h", "e", "l", "l", "o"];

array[1] = "Z";

console.log("array:", array);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("numbers:", numbers);
numbers[2] = 999;

console.log("numbers after change:", numbers);

// numbers = 999; // this is an error

const letters = ["a"];
letters[0] = "z";

console.log(letters)

const animals = [];
animals[0] = "giraffe";

console.log(animals);



let box = ["pen", "paper", "marker"];

box = "pen";


const products = ["t-shirt", "jeans", "shoes", "hat"]