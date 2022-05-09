const person = {
  firstName: "Tim",
  age: 28,
};

person.greet = function (greeting) {
  const capitalisedGreeting = greeting[0].toUpperCase() + greeting.slice(1);
  return `${capitalisedGreeting}, my name is ${this.firstName}`;
};

console.log(person.greet("hi")); // Hi, my name is Tim
console.log(person.greet("hello")); // Hello, my name is Tim
console.log(person.greet("hey")); // Hey, my name is Tim
console.log(person.greet("good morning")); // Good morning, my name is Tim
console.log(person.greet("blabla")); 
console.log(person.greet("pizza")); 
