function sum(a, b) {
  return a + b;
}

function loop(count) {
  for (let i = 0; i < count; i++) {
    console.log(i);
  }
}

let hey = () => {
  console.log("hey");
};

/**
 * create a function to check if an array contains the number 2
 *
 * If it does, return true, otherwise return false
 */

function containsNumber2(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    if (array[i] === 2) {
      return true;
    }
  }
  return false;
}

let numbers = [9, 8, 7, 2, 1, 1, 1, 1, 1, 1, 1];

console.log(containsNumber2(numbers));

let result = false;
for (let i = 0; i < numbers.length; i++) {
  console.log(i);
  if (numbers[i] === 2) {
    result = true;
    // break;
  }
}

console.log("does the array numbers contain 2?", result);



let a = 0;
let b = a++;

console.log("a", a);
console.log("b", b);