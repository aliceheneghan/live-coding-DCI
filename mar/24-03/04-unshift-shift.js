/**
 * unshift()
 * the unshift() method is like push(), but it works on the beginning of the array
 * 
 * shift()
 * the shift() method is like pop(), but it works on the beginning of the array
 */

let numbers = [1, 2, 3, 4, 5];

numbers.unshift(0);

console.log(numbers);

numbers.shift();

console.log(numbers);

numbers.unshift(99, 100, 101);

console.log(numbers);

numbers.unshift("a");
numbers.unshift("b");
numbers.unshift("c");

console.log(numbers);
