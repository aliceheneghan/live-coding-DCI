const person1 = {
  firstName: "Tim",
  age: 28,
  print: function () {
    return `My name is ${this.firstName}`;
  },
};

const person2 = {
  firstName: "Mark",
  age: 17,
  print: function () {
    return `My name is ${this.firstName}`;
  },
};

function printName() {
    return `Hello, my name is ${this.firstName}`;
}

person1.printName = printName;


console.log(person1);
console.log("person1.showName()", person1.printName());

person2.showName = printName;
person2.showName2 = printName;
person2.displayName = printName;
person2.sayName = printName;
console.log("person2.showName()", person2.showName());
console.log(person2.showName2());
console.log(person2.displayName());
console.log(person2.sayName());
console.log(person2);
// person1.printName();

console.log(person1.print());
console.log(person2.print());



let functions = [
    (a, b) => a + b, 
    (a, b) => a * b, 
    (a, b) => a - b, 
    (string) => string.toUpperCase(), 
    (string) => string[0], 
];

console.log(functions[0](2, 3));