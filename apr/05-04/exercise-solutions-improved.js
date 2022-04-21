// a function that checks if a number is even or odd
function isEven(number) {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // return number % 2 === 0 ? true : false;
  return number % 2 === 0;
}

// a function that takes an item as an input (a number, a string, or an array)
// and checks if the length of the item is even or not
function isLengthEven(item) {
  if (typeof item === "number") {
    item = "" + item;
  }
  //   let result = isEven(item.length);
  //   return result;
  return isEven(item.length);
}

// check if a single number is even or odd
console.log(isEven(2)); // true
console.log(isEven(3)); // false

// check if the length of an array is even or odd
console.log(isLengthEven([1, 2, 3, 4])); // true
console.log(isLengthEven([9, 9, 9, 9])); // true
console.log(isLengthEven([9, 9, 9])); // false
console.log(isLengthEven(5)); //
