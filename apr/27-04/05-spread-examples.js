// create a function that takes an array of strings in input
// and returns a new array of the strings transformed to uppercase

function stringsToUppercase(strings) {
    let result = [];
    for (let string of strings) {
        result.push(string.toUpperCase())
    }
    return result;
}

let myStrings = ["table", "pen", "laptop", "pencil"];

let uppercaseStrings = stringsToUppercase(myStrings);
console.log(uppercaseStrings);
console.log(myStrings);

// create a function that takes an array of strings and adds an index before each string
// ["a", "b", "c"] => ["0 a", "1 b", "2 c"]

function addIndexToElements(strings) {
    let stringsCopy = [...strings];
    for (let i = 0; i < stringsCopy.length; i++) {
        stringsCopy[i] = `${i} ${stringsCopy[i]}`;
    }
    return stringsCopy;
}

let stringsWithIndex = addIndexToElements(myStrings);
console.log(stringsWithIndex);
console.log("myStrings", myStrings);