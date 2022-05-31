class Person {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
    this.sayHello = function () {
      console.log("hello");
    };
  }
  introduce() {
    console.log(`Hello, my name is ${this.firstName}`);
  }
}

const person1 = new Person("Martha", 26);
const person2 = new Person("Jim", 38);

console.log(person1);
console.log(person2);

person1.email = "martha@email.com";

console.log(person1.email);
console.log(person2.email);

Person.prototype.generateEmail = function() {
    return `${this.firstName}@email.com`
}

console.log(person1.generateEmail());
console.log(person2.generateEmail());

console.log(person1);
console.log(person2);

// console.log(person1.sayHello === person2.sayHello)
// console.log(person1.introduce === person2.introduce)
// person1.introduce();



