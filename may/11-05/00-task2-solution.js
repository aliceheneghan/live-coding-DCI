// Create a class called Person

// The class should contain the following properties:

// firstName
// lastName
// age
// city
// The class should contain the following methods:

// introduce(): it returns a string like "Hello, my name is Rick Sanchez and I live in Berlin"
// greet(person): a method that takes another person object in input and returns a string like "Hello Martha, how are you?" where "Martha is the name of the object in the parameter
// isOlder(person): a method that takes another person object in input and checks who's older. It returns true or false

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

const person1 = new Person("Jeff", "Smith", 28, "New York");
const person2 = new Person("Sandra", "Bell", 24, "London");
const person3 = new Person("Mark", "Ruth", 12, "Berlin");

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

console.log(person2.greet(person1));
console.log(
  `Is ${person3.firstName} older than ${person1.firstName}?`,
  person3.isOlder(person1)
);

console.log(
  `Is ${person2.firstName} older than ${person3.firstName}?`,
  person2.isOlder(person3)
);