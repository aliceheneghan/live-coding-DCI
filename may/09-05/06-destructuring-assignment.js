const animals = ["cat", "dog", "giraffe", "elephant", "koala", "rhino"];

/*

- let's save the first animal in the array in a variable called firstAnimal
- let's save the second animal in the array in a variable called secondAnimal
- let's save the rest of the animals in another array caled otherAnimals
*/

// let firstAnimal = "";
// let secondAnimal = "";
// let otherAnimals = [];

// for (let i = 0; i < animals.length; i++) {
//   if (i === 0) {
//     firstAnimal = animals[i];
//   } else if (i === 1) {
//     secondAnimal = animals[i];
//   } else {
//     otherAnimals.push(animals[i]);
//   }
// }

// console.log(firstAnimal);
// console.log(secondAnimal);
// console.log(otherAnimals);

// let firstAnimal = animals[0];
// let secondAnimal = animals[1];
// let otherAnimals = animals.slice(2);

// console.log(firstAnimal);
// console.log(secondAnimal);
// console.log(otherAnimals);

// skipping elements
let [firstAnimal, secondAnimal, , , fifthAnimal] = animals;

console.log(firstAnimal);
console.log(secondAnimal);
console.log(fifthAnimal);

// let [char1] = "hello"

// console.log(char1)

// save first and second animal in 2 ariables and the rest in another array

let [first, second, ...restOfTheAnimals] = animals;
console.log(first);
console.log(second);
console.log(restOfTheAnimals);

let person = {
  firstName: "Martha",
  lastName: "Lynn",
  age: 28,
  job: "Engineer",
  city: "London",
  hobbies: ["skating", "reading", "playing drums"],
};

// save firstName, lastName and city in 3 different variables
// let firstName = person.firstName;
// let lastName = person.lastName;
// let city = person.city;

let { firstName, lastName, city, ...remainingProperties } = person;

console.log("first name", firstName);
console.log("last name", lastName);
console.log("city", city);
console.log("remaining", remainingProperties);

function printFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

function printFullName2(person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

function printFullName3(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

printFullName(person);
printFullName3(person.firstName, person.lastName);

let array = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

for (let item of array) {
  console.log(item[0], item[1]);
}

for (let [letter, number] of array) {
  console.log(letter, number);
}

let [letter, number] = ["a", 1];

let person2 = {
  lastName2: "Blabla",
  age: 28,
  job: "Engineer",
  city: "London",
  hobbies: ["skating", "reading", "playing drums"],
};

let { firstName2 = "Guest", lastName2 = "Guest", ...rest } = person2;

console.log(firstName2);
console.log(lastName2);
