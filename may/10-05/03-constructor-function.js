/**
 *
 * Constructor function
 *
 * "new" keyword
 */

/**
 *
 * this is the blueprint for a person, but it's not yet an actual person
 */
function Person(firstName, age) {
  this.firstName = firstName;
  this.age = age;

}


/**
 * these are the instances of persons
 */
const person1 = new Person("Martha", 28);
const person2 = new Person("Jim", 18);
const person3 = new Person("Rob", 13);

console.log(person1);
console.log(person2);
// console.log(person1.introduce());
// console.log(person2.introduce());
// console.log(person3.introduce());

Person.prototype.eat = function (food) {
  console.log(`I'm eating some ${food}`);
};

// console.log(person1);
// console.log(person2);
// console.log(person3);

// person1.eat("pizza");
// person2.eat("cheese");
// person3.eat("fruit");

// let array = [1, 2, 3];

// console.log(array);

// Array.prototype.push = function () {
//   console.log("I'm pushing");
// };


// console.log(array.push());
// console.log(array);
