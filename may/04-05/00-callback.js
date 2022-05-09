/**
 * Callback function
 *
 * - a callback is a function
 * - a callback is a function that we pass as an argument to another function
 * and we call it from inside that function
 *
 */

function double(n) {
  return n * 2;
}

console.log(double(2));
console.log(double(3));

function doubleNumbers(numbers) {
  const result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  return result;
}
function tripleNumbers(numbers) {
  const result = [];
  for (const number of numbers) {
    result.push(number * 3);
  }
  return result;
}

function squareNumbers(numbers) {
  const result = [];
  for (const number of numbers) {
    result.push(number ** 2);
  }
  return result;
}
console.log(doubleNumbers([1, 2, 3]));
console.log(doubleNumbers([9, 1, 8]));
console.log(tripleNumbers([1, 2, 3]));
console.log(squareNumbers([1, 2, 3]));
console.log(squareNumbers([2, 4, 5]));

function square(n) {
  return n ** 2;
}

function triple(n) {
  return n * 3;
}

function cutStringInHalf(string) {
  return string.slice(0, string.length / 2);
}

function myMap(array, callback) {
  const result = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
}

console.log(myMap([1, 2, 3], triple));
console.log(myMap([1, 2, 3], square));
console.log(
  myMap(["table", "chair", "mouse", "bottle", "books"], cutStringInHalf)
);

const people = [
  {
    firstName: "tim",
    lastName: "bla",
  },
  {
    firstName: "martha",
    lastName: "buley",
  },
];

function capitaliseNames(person) {
    const personCopy = {...person};
    personCopy.firstName = personCopy.firstName[0].toUpperCase() + personCopy.firstName.slice(1);
    personCopy.lastName = personCopy.lastName[0].toUpperCase() + personCopy.lastName.slice(1);
    return personCopy;
}

const capitalisedPeople = myMap(people, capitaliseNames);

// create a function that takes an object with a person and returns a string with the fullName
function getFullName(person) {
    return person.firstName + " " + person.lastName;
}

console.log(myMap(capitalisedPeople, getFullName))