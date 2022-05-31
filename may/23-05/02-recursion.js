// function infinityLoop() {
//   console.log("hey");
//   infinityLoop();
// }

// infinityLoop();

/**
 * - initialization
 * - exit condition
 * - update (increment)
 */

function countdown(n) {
  console.log("countdown", n);
  if (n === 0) {
    return n;
  }
  const updatedN = n - 1;
  countdown(updatedN);
  console.log(`function with n ${n} is over now`);
}

countdown(5);
countdown(10);

function fn1(n) {
  n++;
  fn2(n);
  console.log("now I'm done!");
}

function fn2(n) {
  console.log(n);
}

fn1(99);

/*
countdown(5)
- countdown(4)
- - countdown(3)
- - - countdown(2)
- - - - countdown(1)
- - - - - countdown(0)
- - - - countdown(1)
- - - countdown(2)
- - countdown(3)
- countdown(4)
countdown(5)
*/

/**
 * Factorials
 *
 * 5! => 5 * 4 * 3 * 2 * 1 => 120
 * 4! => 4 * 3 * 2 * 1 => 24
 * 3! => 3 * 2 * 1 => 6
 */

function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));

/*
factorial(3) => 3 * factorial(2)
          factorial(2) => 2 * factorial(1)
                  factorial(1) => 1
          factorial(2) => 2 * 1 => 2
factorial(3) => 3 * 2 => 6
*/

function arrayExplorer(array, index) {
  if (index < array.length) {
    if (Array.isArray(array[index])) {
      arrayExplorer(array[index], 0);
    } else {
      console.log("inside", array[index]);
    }
    arrayExplorer(array, index + 1);
  }
}

let numbers1 = [1, 2, 3, 4, 5, 6];

let numbers2 = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8, 9, 10],
  [11, 12, 13],
];
let numbers3 = [1, 2, 3, [4, 5, 6]];
let numbers4 = [1, 2, 3, [4, 5, 6], 7, 8, 9];
let numbers5 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15]]]]];

arrayExplorer(numbers5, 0);
arrayExplorer(numbers4, 0);
arrayExplorer(numbers1, 0);
