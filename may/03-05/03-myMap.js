/**
 * Map
 *
 * Map takes an array and a callback in input
 *
 * It returns a new array where all the elements in the original array are transformed
 * based on the callback function
 */

let strings = ["table", "chair", "lamp", "pen"];

// function capitalize(array) {
//   let result = [];
//   for (let item of array) {
//     result.push(item[0].toUpperCase() + item.slice(1));
//   }
//   return result;
// }

// console.log(capitalize(strings));

// function cutStrings(array) {
//   let result = [];
//   for (let item of array) {
//     result.push(item.slice(0, 7) + "...");
//   }
//   return result;
// }

function myMap(array, callbackFn) {
  let result = [];
  for (let item of array) {
    result.push(callbackFn(item));
  }
  return result;
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function cutString(string) {
  return string.slice(0, 7) + "...";
}

console.log(myMap(strings, capitalize));
console.log(myMap(strings, cutString));
console.log(myMap(strings, (string) => string.toUpperCase()));
console.log(myMap(strings, (string) => string[0]));
console.log(myMap(strings, (string) => string[string.length - 1]));
console.log(myMap(strings, (string) => string));
console.log(myMap(strings, (string) => "pizza"));

const adjectives = ["clean", "smart", "intelligent", "tall", "stupid"];

function addEr(string) {
  if (string.length > 5) {
    return `more ${string}`;
  } else {
    return `${string}er`;
  }
}

console.log(myMap(adjectives, addEr));

// console.log(
//   cutStrings([
//     "Hello my name is Max",
//     "Today is quite sunny outside",
//     "Cats are the best",
//     "This movie is boring",
//   ])
// );
