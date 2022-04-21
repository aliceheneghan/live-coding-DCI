const personObject = {
  firstName: "Jessie",
  age: 28,
  nationality: "American",
  occupation: "designer",
  hairColor: "brown",
  isMarried: false,
  hobbies: ["skating", "reading", "singing"],
  address: {
    street: "Some street",
    number: 21,
    city: "New York",
  },
  introduce: function () {
    return `hello, my name is ${personObject.firstName} and I am ${personObject.age} year old`;
  },
};

function speak(person) {
  return `hello, my name is ${person.name}`;
}

console.log("speak:", speak(personObject));

console.log(personObject.introduce());

const myMathObject = {
  sum: function (a, b) {
    return a + b;
  },
};

console.log(myMathObject.sum(2, 3));
