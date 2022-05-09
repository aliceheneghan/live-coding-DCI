/**
 * Method
 *
 * -  Every method is a function
 * - A method is a function that belongs to an object
 * - A method is a function that "lives" inside of an object
 */

const person1 = {
  firstName: "Tim",
  age: 28,
  print: function () {
    return `My name is ${person1.firstName}`;
  },
  sayAge: function () {
    return `I am ${person1.age} years old`;
  },
  celebrateBiryhday: () => {
    person1.age++;
  },
};

person1.lastName = "Johnson";
person1.sayHi = () => {
  console.log("hi");
};

person1.sayHi();
console.log(person1);

const person2 = {
  firstName: "Mark",
  age: 17,
  print: function () {
    return `My name is ${person2.firstName}`;
  },
};
console.log(person1.print());
console.log(person1.sayAge());
person1.celebrateBiryhday();
console.log(person1.sayAge());

console.log(person2.print());

function introducePerson(object) {
  return `My name is ${object.firstName} (function version)`;
}

console.log(introducePerson(person1));
console.log(introducePerson(person2));

let person3 = {};

person3.firstName = "Francis";
person3.age = 29;
person3.print = () => `My name is ${person3.firstName}`;

console.log(person3);

console.log(person3.print());
