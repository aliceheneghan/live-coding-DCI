let x = 30;
let y = 10;
let string = "hello";
let numbers = [1, 2, 3, 4, 5];

const person = {
  name: "Rob",
  age: 30,
};

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

function add(a, b) {
  return a + b;
}

add(2, 3);
add(5, 8);
add(13, 21);

function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}


factorial(5);