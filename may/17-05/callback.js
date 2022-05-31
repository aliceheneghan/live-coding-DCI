/**
 * Callback
 *
 * A callback is a function that we pass as an argument to another function
 *
 * We then nomrmally use the callback inside the other function
 */

function sum2And3() {
  const result = 2 + 3;
  return result;
}

console.log(sum2And3());
console.log(sum2And3());
console.log(sum2And3());

function sumXY(x, y) {
  const result = x + y;
  return result;
}

console.log(sumXY(1, 2));
console.log(sumXY(2, 3));
console.log(sumXY(1023, 234));
console.log(sumXY(-1023, 234));

function multiplyXY(x, y) {
  const result = x * y;
  return result;
}

function divideXY(x, y) {
  const result = x / y;
  return result;
}

function calculate(callback, x, y) {
  const result = callback(x, y);
  return result;
}

function add(a, b) {
  return a + b;
}
const result1 = calculate(add, 1, 2);
const result2 = calculate((a, b) => a / b, 1, 2);
const result3 = calculate((a, b) => a * b, 1, 2);
const result4 = calculate((a, b) => a + b, 1, 2);

console.log("calculate result1", result1);

add(6, 9);

function myMap(array, callback) {
  const newArray = [];
  for (const item of array) {
    let newItem = callback(item);
    newArray.push(newItem);
  }
  return newArray;
}

const strings = ["table", "mouse", "laptop", "spoon", "cup", "glass"];

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const initial = (s) => s[0];

console.log(myMap(strings, capitalize));
console.log(myMap(strings, (s) => s.toUpperCase()));
console.log(myMap(strings, initial));

function myMap2(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let newItem = callback(array[i], i, array);
    newArray.push(newItem);
  }
  return newArray;
}

function addIndex(string, index, array) {
  return `${index + 1}/${array.length} - ${string}`;
}

console.log(myMap2(strings, addIndex));

// myPush takes an array in input and another value
// it adds the new value at the end of the array
function myPush(array, newItem) {
  array[array.length] = newItem;
  return array.length;
}

let letters = ["a", "b", "c"];

console.log(myPush(letters, "d"));
console.log(letters);

console.log(myPush(letters, "e"));
console.log(letters);

function addAtIndex(array, newItem, index) {
  // if our array doesn't have enough items, let's add the new item at the end
  if (array.length <= index) {
    array[array.length] = newItem;
  }
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    console.log("array[i]", i, array[i]);
    newArray[newArray.length] = array[i];
    if (i === index) {
      newArray[newArray.length] = newItem;
    }
  }
  return newArray;
}

addAtIndex(letters, "Z", 2);
addAtIndex(letters, "A", 4);
addAtIndex([1, 2], "A", 4);
