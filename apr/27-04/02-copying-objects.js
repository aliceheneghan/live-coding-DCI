const person = {
  name: "Tim",
  age: 28,
};

let samePerson = person;
const samePerson2 = person;
let samePerson3 = person;
const samePerson4 = person;

console.log("samePerson === person", samePerson === person); // true

let a = {};
let b = {};
console.log("a === b", a === b); // false