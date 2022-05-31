const animal = {
  type: "turtle",
  name: "Marcy",
  age: 900,
};

const animalCopy = { ...animal };

// Object.assign()
// Object.assign() is often used to merge 2 objects

const animalFeatures = {
  color: "green",
  legs: 4,
  canSwim: true,
};

function swim() {
  console.log("swim");
}

animal.swim = swim;
//  console.log(Object.assign(animal, animalFeatures));

// To copy an object using Object.assign() we can specify an empty object as the first parameter
// It will copy the properties from the second object into the empty one and return it
const animalCopy2 = Object.assign({}, animal);

console.log(animalCopy2);
console.log(animalCopy2 === animal);

const stringObject = JSON.stringify(animal);
const objectFromString = JSON.parse(stringObject);
console.log("copy", objectFromString);

JSON.parse(JSON.stringify(animal));

let numbers = [6, 7, 1, 2, 3];

// we want to sort the numbers and not modifying the original array

const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(numbers);
console.log(sortedNumbers);

const people = [
  {
    firstName: "Jim",
    lastName: "Jones",
    age: 12,
  },
  {
    firstName: "Andy",
    lastName: "Blue",
    age: 14,
  },
  {
    firstName: "Martah",
    lastName: "Red",
    age: 29,
  },
];

// I want a new array with objects containing the fullName, without touching the original objects

const newPeople = people.map((item) => {
  let itemCopy = { ...item };
  itemCopy.fullName = itemCopy.firstName + " " + itemCopy.lastName;
  return itemCopy;
});

console.log(people);
console.log(newPeople);

// console.log(
//   people.reduce((prev, curr) => {
//     curr.newAge = prev + curr.age;
//     prev += curr.age;
//     return prev;
//   }, 0)
// );


// console.log(people);