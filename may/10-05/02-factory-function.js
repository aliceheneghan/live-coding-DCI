/**
 * A factory function is a function that every time is called, creates a new object
 * and returns it
 */

function createPerson(firstName, age) {
  const person = {};
  person.firstName = firstName;
  person.age = age;
  person.introduce = function () {
    return `Hello, my name is ${this.firstName}`;
  };
  return person;
}

const person1 = createPerson("Martha", 26);
const person2 = createPerson("Jim", 28);
const person3 = createPerson("Rob", 13);

console.log(person1);
console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

person1.eat = function (food) {
  console.log(`I'm eating some ${food}`);
};


person1.eat("pizza");
person2.eat("cheese");
