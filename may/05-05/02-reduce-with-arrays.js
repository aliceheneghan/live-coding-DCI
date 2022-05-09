const numbers = [1, 2, 3, 4, 5, 6, 7];

/*
Use reduce to count even and odd numbers:

As a result we want an array where:
- at index 0: amount of even numbers
- at index 1: amount of odd numbers

[1, 2, 3, 4, 5, 6, 7] -> [3, 4]
*/

function countEvenOdd(previousValue, currentValue) {
  let evenCounter = previousValue[0] === undefined ? 0 : previousValue[0];
  let oddCounter = previousValue[1] === undefined ? 0 : previousValue[1];
  if (currentValue % 2 === 0) {
    evenCounter++;
  } else {
    oddCounter++;
  }
  return [evenCounter, oddCounter];
}
let result = numbers.reduce(countEvenOdd, []);

console.log(result);
