function appendToArray(array, newItem) {
  array.push(newItem);
  return array;
}

let a = [1, 2, 3];

let newArray = appendToArray(a, 99);

console.log("newArray", newArray); // [1, 2, 3, 99]
console.log("a", a); // [1, 2, 3, 99]

function appendToNewEmptyArray(newItem) {
  let newArray = [];
  newArray.push(newItem);
  return newArray;
}




let b = ["x", "y", "z"];

let bCopy = [];

for (let item of b) {
  bCopy.push(item);
}

console.log("b", b); // ["x", "y", "z"]
console.log("bCopy", bCopy); // ["x", "y", "z"]
console.log("b === bCopy", b === bCopy); // false


function copyAndAppendToArray(array, newItem) {
  // starts the code to clone the array
  let arrayCopy = [];
  for (let entry of array) {
    arrayCopy.push(entry);
  }
  // ends the code to clone the array

  // our function code
  arrayCopy.push(newItem);
  return arrayCopy;
}

let newArray2 = copyAndAppendToArray(b, "bla");

console.log("b", b);
console.log("newArray2", newArray2);
console.log("b === newArray2", b === newArray2);



let letters = ["a", "b", "c"]

function changesFirstItem(array) {
    let arrayCopy = [];
    for (let entry of array) {
        arrayCopy.push(entry);
    }
    arrayCopy[0] = "bla";
    return arrayCopy;
}

let modifiedLetters = changesFirstItem(letters)

console.log("letters", letters);
console.log("modifiedLetters", modifiedLetters);