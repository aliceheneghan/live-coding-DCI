const products = [
  "t-shirt",
  "jeans",
  "jeans",
  "shoes",
  "shoes",
  "shoes",
  "hat",
];

/**
 * use the reduce() method to return an object with the quantity of
 * every product in the array
 *
 * ->
 * {
 *  t-shirt: 1,
 *  jeans: 2,
 *  shoes: 3,
 *  hat: 1
 * }
 */

// let obj = {};

// obj["t-shirt"] = 1;
// obj["jeans"] = 2;

// let currentValue = "t-shirt";

// obj[currentValue] = 1;

function countProducts(previousValue, currentValue) {
  previousValue[currentValue] =
    previousValue[currentValue] === undefined
      ? 1
      : previousValue[currentValue] + 1;
  return previousValue;
}

function countProducts2(previousValue, currentValue) {
  if (previousValue[currentValue] === undefined) {
    previousValue[currentValue] = 1;
  } else {
    previousValue[currentValue] = previousValue[currentValue] + 1;
  }
  return previousValue;
}

const result = products.reduce(countProducts, {});

console.log(result);
console.log(result["t-shirt"]);
console.log(result["jeans"]);

const result2 = products.reduce((previousValue, currentValue) => {
  previousValue[currentValue] =
    previousValue[currentValue] === undefined
      ? 1
      : previousValue[currentValue] + 1;
  return previousValue;
}, {});
