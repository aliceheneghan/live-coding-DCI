// let a = 2;
// let b = a;

let animals = ["cat", "dog", "mouse"];
let animalsDouble = animals;

animals === animalsDouble; // true
console.log(animals === animalsDouble); // true

// animalsCopy.push("giraffe");

// console.log("animals copy", animalsCopy);
// console.log("animals",animals);

let letters = ["a", "b", "c"];
let lettersDouble = ["a", "b", "c"];

letters === lettersDouble; // false 
console.log(letters === lettersDouble);

// console.log(letters);
// console.log(lettersDouble);

// letters.push("d")
// console.log("letters", letters);
// console.log("letters double", lettersDouble);


// let numbers = [1, 2, 3];
// let numbersOther = [1, 2, 3, 4];

// numbers = numbersOther;

// console.log("numbers", numbers)
// console.log("numbers other", numbersOther)


[] == []; // false
[1, 2, 3] == [1, 2, 3]; // false
[] === []; // false
[1, 2, 3] === [1, 2, 3]; // false
