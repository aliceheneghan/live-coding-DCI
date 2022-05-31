const person1 = {
  firstName: "Martha",
  age: 26,
  introduce: function () {
    return `Hello, my name is ${this.firstName}`;
  },
};

const person2 = {
  firstName: "Jim",
  age: 16,
  introduce: function () {
    return `Hello, my name is ${this.firstName}`;
  },
};

const person3 = {
  firstName: "Tim",
  age: 19,
  introduce: function () {
    return `Hello, my name is ${this.firstName}`;
  },
};

console.log(person1);