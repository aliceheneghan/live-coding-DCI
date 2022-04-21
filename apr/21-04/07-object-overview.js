{
} // empty object

const myObject = {};

const person = {
  firstName: "Elizabeth",
  age: 96,
};

// print the first name to the console
console.log(person.firstName);
console.log(person["firstName"]);

// print the age to the console
console.log(person.age);
console.log(person["age"]);

// add the job property to person
person.job = "queen";

console.log(person);

person["lastName"] = "Windsor";
console.log(person);

person.introduce = () => `My name is ${person.firstName}`;

console.log(person.introduce());