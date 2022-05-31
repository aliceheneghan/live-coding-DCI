/**
 * Create a class called `Person`
 *
 * The class should contain the following properties:
 *
 * - firstName
 * - lastName
 * - age
 * - city
 *
 * The class should contain the following methods:
 *
 * - `introduce()`: it returns a string like "Hello, my name is Rick Sanchez and I live in Berlin"
 * - `greet(person)`: a method that takes another `person` object in input and returns
 * a string like "Hello Martha, how are you?" where "Martha is the name of the
 * object in the parameter
 * - `isOlder(person)`: a method that takes another `person` object in input and checks who's
 * older. It returns `true` or `false`
 *
 * Use the class to create 4 different people and test the different functionalities
 */

class Person {
  constructor(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
  }
  introduce() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I live in ${this.city}`;
  }
  greet(person) {
    return `Hello ${person.firstName}, how are you?`;
  }
  isOlder(person) {
    return this.age > person.age;
  }
}

const person1 = new Person("Ray", "Johnson", 28, "Barcelona");
const person2 = new Person("Melanie", "Gibson", 15, "Milan");
const person3 = new Person("Bruno", "Bruno", 99, "*******");
const person4 = new Person("Syd", "Neil", 27, "Dublin");

console.log(person1.introduce());
console.log(person2.greet(person3));
console.log(person3.greet(person2));
console.log(`Is ${person1.firstName} older than ${person2.name}? ${person1.isOlder(person2)}`);