const numbers = [6, 0, 100, 3, -2, 9];
const numbers2 = [1, 2, 3, 99, 21, 10000, -9, 9999999];
// let's find the largest value in the array

// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log("max is: ", max);

// let max2 = numbers2[0];
// for (let i = 1; i < numbers2.length; i++) {
//   if (numbers2[i] > max2) {
//     max2 = numbers2[i];
//   }
// }
// console.log("max2 is: ", max2);

function max(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

let max1 = max([1, 2, 3]);
let max2 = max(numbers);
let max3 = max(numbers2);

console.log(max1);
console.log(max2);
console.log(max3);
function multiplication() {
  return 2 * 3;
}

console.log(multiplication());

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(8, 7));
console.log(multiply(10, 7));

function double(number) {
    const result = number * 2;
    console.log("line 55", result);
    return result;

    console.log("hey, I will never run");
}

double(4);
// console.log(doubleResult);