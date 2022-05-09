// let array = [1, 0, 99]

// if (array[0] > array[1]) {
//     let temp = array[0];
//     array[0] = array[1]
//     array[1] = temp;
// }

// console.log(array)

/**
 * sort()
 *
 * > 0	sort b before a
 * < 0	sort a before b
 * === 0 keep original order of a and b
 */

let numbers = [2, -4, 10, 20, 3, 4, 5, 40, 41, 42, 6, 7, 8];

let sortedNumbers = numbers.sort((a, b) => {
  if (b < a) { // a - b -> 100 - 20
    return 1;
  } else if (a < b) { // a - b -> 20 - 30
    return -1;
  } else { // a - b -> 5 - 5
    return 0;
  }
});

console.log("sorted", sortedNumbers);

let sortedNumbersReverse = numbers.sort((a, b) => {
  if (b < a) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log("reverse sorted", sortedNumbersReverse);

let sortedNumbers2 = numbers.sort((a, b) => a - b);

console.log(sortedNumbers2);

let sortedNumbersReverse2 = numbers.sort((a, b) => b - a);
console.log(sortedNumbersReverse2)


