/**
 * find()
 *
 * find is like filter, but it returns only the first element the satisfies the condition
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// only even numbers
function isEven(n) {
  return n % 2 === 0;
}

function matchesRandomNumber(n, index, array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return n === array[randomIndex];
}
console.log("filter isEven", numbers.filter(isEven));
console.log("find isEven", numbers.find(isEven));
console.log("find matchesRandom", numbers.find(matchesRandomNumber));
