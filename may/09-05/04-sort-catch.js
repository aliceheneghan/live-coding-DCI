let numbers = [1, 2, 8, 3, 0, -2];

let numbersCopy = [...numbers];  

let numbersSorted = [...numbers].sort((a, b) => a - b);

console.log("sorted", numbersSorted)
console.log("original", numbers)
