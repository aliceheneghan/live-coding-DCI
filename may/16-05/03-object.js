let animal = {
  type: "turtle",
  name: "Marcy",
  age: 900,
  walk: function () {
    return `The ${this.type} is walking`;
  },
};

console.log(animal.length);


// how can I add a property "color" to the animal?
animal.color = "green";

// add a method swim to the animal.
// the method should return a string: The turtle Marcy is swimming
function swim() {
  return `The ${this.type} ${this.name} is swimming`;
}

animal.swim = swim;

console.log(animal.swim());

// add a method eat

animal.eat = function () {
  return `The ${this.type} ${this.name} is eating`;
};

console.log(animal.eat());

// how to access object properties?
console.log("The name of the animal is:", animal.name);
console.log("The name of the animal is:", animal["name"]);

let propertyName = "age";

// can I use the variable propertyName to get the age of the turtle?
console.log(animal[propertyName]); // equivalent to: animal["age"]
console.log(animal["age"]);

// can we replace the key "age" with the key "years"?

// can we create a property "years" that has the same value as the property "age"?
animal.years = animal.age;
// now we can delete the property age
delete animal.age;

console.log(animal);

// console.log(Object.keys(animal).length);
// console.log(typeof Object.keys(animal));

// let's count the letters in a string

const string = "JavaScript is the best language because everyone loves it";

/**
 * As a result we want an object with each letter as key, and the number of times
 * the letter appears in the string as a value
 *
 * {
 *  a: 9,
 *  b: 2,
 *  c: 5,
 *  ....
 * }
 **/

// const array = string.split("");

const letters = {};
for (let item of string) {
  console.log("item", item);
  if (letters[item] === undefined) {
    letters[item] = 0;
  }
  letters[item]++;
}

console.log(letters);

// after having saved all the letters inside the object, how can I get the most frequent letter?

// we need to use sort(), but sort() is an array method and it doesn't work with objects

// we need to transform the object into an array first. How can we do that?

// Object.keys(); // gives us an array with the keys of the object
// Object.values(); // gives us an array with the values of the object
// Object.entries(); // gives us an array of arrays, containing keys and values

const lettersEntries = Object.entries(letters);

const sortedLetters = lettersEntries.sort((a, b) => b[1] - a[1]);
console.log(sortedLetters);

console.log("The most frequent letter is:", sortedLetters[0][0]);
