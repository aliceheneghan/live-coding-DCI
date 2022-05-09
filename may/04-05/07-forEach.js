let numbers = [1, 2, 3, 4, 5];

let doubleNumbers = [];
function double(n, index, array) {
  doubleNumbers.push(array[index] * 2);
}

console.log("forEach", numbers.forEach(double));
// console.log("map", numbers.map(double));

console.log("doubleNumbers", doubleNumbers);
