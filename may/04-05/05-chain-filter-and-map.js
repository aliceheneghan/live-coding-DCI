let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// get an array of only even numbers doubled
// -> [4, 8, 12, 16, 20]
// 1. get only the even numbers
// 2. double the even numbers

let evenNumbers = numbers.filter((n) => n % 2 === 0);
let doubledEvenNumbers = evenNumbers.map((n) => n * 2);

console.log(doubledEvenNumbers);

let doubledEvenNumbers2 = numbers.filter((n) => n % 2 === 0).map((n) => n * 2);
console.log(doubledEvenNumbers2);
