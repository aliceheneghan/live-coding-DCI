let result = 42.1 + 2.2;
console.log(result);

// how do we get 44.3 instead of 44.300000000000004?

// solution 1
const rounded = Number(result.toFixed(2));
const rounded2 = parseFloat(result.toFixed(2));
console.log(rounded);
console.log(rounded2);

// solution 2
let x = 42.1;
let y = 2.2;

// multiply every value by 10 and at the end divide the result by 10
let x10 = x * 10;
let y10 = y * 10;
console.log(x10);
console.log(y10);

const result10 = x10 + y10;
console.log(result10);
const realResult = result10 / 10;
console.log(realResult);

const a = 43.21;
const b = 2.16;

const res10 = (a * 100) + (b * 100)
console.log(res10 / 100);
