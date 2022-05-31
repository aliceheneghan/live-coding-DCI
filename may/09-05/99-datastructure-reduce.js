const orders = [
  {
    id: 1,
    amount: 250,
  },
  {
    id: 2,
    amount: 400,
  },
  {
    id: 3,
    amount: 100,
  },
  {
    id: 4,
    amount: 325,
  },
];

// task 1: sum the amount from all the orders
function totalAmount(prev, curr) {
  return prev + curr.amount;
}

const amountResult = orders.reduce(totalAmount, 0);
console.log("total amount:", amountResult);

// task 2: concatenate initials from each word

const string = "read the friendly manual";

function concatenateInitials(prev, curr) {
  // return prev + curr[0].toUpperCase();
  return prev + curr.slice(0, 1).toUpperCase();
}

let initials = string.split(" ").reduce(concatenateInitials, "");
console.log(initials);

const fruit = ["banana", "apple", "kiwi", "mango", "strawberries"];

function makeFruitSalad(prev, curr, i) {
  // return i === 0 ? prev + curr : prev + " - " + curr;
  return `${prev}${i === 0 ? "" : " - "}${curr}`;
}

const recipe = fruit.reduce(makeFruitSalad, "Fruit salad: ");

console.log(recipe);

const prices = ["19€", "109€", "60€", "12€", "29.9€"];

function sumPrices(prev, curr) {
  return prev + parseFloat(curr);
}

const pricesTotal = prices.reduce(sumPrices, 0);
console.log(pricesTotal);

let users = [
  { name: "Jake Smith", age: 20, city: "New York" },
  { name: "Anne Annson", age: 24, city: "London" },
  { name: "Pete Peterson", age: 31, city: "New York" },
  { name: "Martha Marty", age: 38, city: "New York" },
  { name: "Renato Romolo", age: 36, city: "Rome" },
  { name: "Philip Flip", age: 36, city: "London" },
];

let groupedByCity = {};

for (let user of users) {
  console.log(user.city);
  if (groupedByCity[user.city] === undefined) {
    groupedByCity[user.city] = [];
    groupedByCity[user.city].push(user);
  } else {
    groupedByCity[user.city].push(user);
  }
}

console.log(groupedByCity);

function groupUsersByCity(prev, curr) {
  if (prev[curr.city] === undefined) {
    prev[curr.city] = [];
    prev[curr.city].push(curr);
  } else {
    prev[curr.city].push(curr);
  }
  return prev;
}

const result = users.reduce(groupUsersByCity, {});
console.log(result);

function groupUsersByCity2(prev, curr) {
  if (prev[curr.city] === undefined) {
    prev[curr.city] = [];
  }
  prev[curr.city].push(curr);
  return prev;
}


const result2 = users.reduce(groupUsersByCity2, {});
console.log(result2);