const string = "read the friendly manual";
// "RTFM"

const arrayString = string.split(" ");
console.log(arrayString);

function firstLetters(result, curr) {
  const currentFirstLetter = curr[0].toUpperCase();
  result += currentFirstLetter;
  return result;
}
let result = arrayString.reduce(firstLetters, "");

console.log(result);

const products = [
  {
    type: "phone",
    price: 199,
  },
  {
    type: "laptop",
    price: 1000,
  },
  {
    type: "camera",
    price: 400,
  },
];

// use reduce to calculate the total price

function sumPrices(prev, curr) {
  return (prev += curr.price);
  // return prev;
}

let totalPrice = products.reduce(sumPrices, 0);

console.log(totalPrice);

// why starting with 1 with multiply?

let numbers = [1, 2, 3, 4];
// use reduce to calculate the result of multiplying the numbers between each other

// -> 0 * (1 * 2 * 3 * 4) => 0
// -> 1 * (1 * 2 * 3 * 4) => 24

function multiply(prev, curr) {
  return prev * curr;
}
let totalMultiplication = numbers.reduce(multiply, 1);
console.log(totalMultiplication);

const fruit = ["banana", "apple", "kiwi", "mango", "strawberries"];

// -> Fruit salad: banana - apple - kiwi - mango - strawberries

function mixIngredients(prev, curr, index) {
  if (index === 0) {
    return `${prev} ${curr}`;
  } else {
    return `${prev} - ${curr}`;
  }
}
function mixIngredients2(prev, curr, index, array) {
  if (index === array.length - 1) {
    return `${prev} ${curr}`;
  } else {
    return `${prev} ${curr} - `;
  }
}
let fruitSalad = fruit.reduce(mixIngredients, "Fruit salad:");
console.log(fruitSalad);


let fruitSalad2 = fruit.reduce(mixIngredients2, "Fruit salad:");
console.log(fruitSalad2);

function mixIngredients3(prev, curr) {
    return `${prev} ${curr} - `;
}
let fruitSalad3 = fruit.reduce(mixIngredients3, "Fruit salad:").slice(0, -3)
console.log(fruitSalad3);



console.log(fruit.join(" - "));