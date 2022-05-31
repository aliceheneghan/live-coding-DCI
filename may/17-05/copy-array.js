const people = [
  {
    name: "Tim",
    age: 28,
  },
  {
    name: "Bob",
    age: 22,
  },
  {
    name: "Jen",
    age: 32,
  },
];

const peopleCopy = [...people];

console.log("people", people);
console.log("peopleCopy", peopleCopy);
console.log("people === peopleCopy", people === peopleCopy);

console.log(peopleCopy[0]);
peopleCopy[0].age = 99;
console.log("inside people copy", peopleCopy[0]);
console.log("inside people", people[0]);

let person = {
  name: "tim",
  age: 28,
  hairColor: "brown",
  eyesColor: "green",
  height: 1.56,
  weight: 67,
  city: "Berlin",
};

console.log(person.name);

// we want a copy of an object containing every property except for "name" and "city"

const { name, city, ...personFeatures } = person;

console.log(name);
console.log(city);
console.log(personFeatures);

const numbers = [1, 2, 3, 4, 5, 6, 7];

const copyNumbers = numbers.slice();
console.log(copyNumbers === numbers);
