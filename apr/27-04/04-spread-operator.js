let a = [1, 2, 3];

let aCopy = [...a];

console.log("a", a);
console.log("aCopy", aCopy);
console.log("a === aCopy", a === aCopy);

console.log(Math.max(1, 2, 3, 4));

console.log(Math.max(...[1, 2, 3, 4]));

let numbers = [90, 12, 5, 100, 80, 73];

console.log("line 15", Math.max(numbers));
console.log("line 16", Math.max(...numbers));
console.log("numbers after spreading", numbers);

console.log(1, 2, 3, [4, 5, 6]);
console.log(...["bla", 1, 2, 3, true, false, "a", "b"]);

let person = {
  firstName: "Tim",
  age: 28,
};

console.log(person);

let personCopy = {...person};
console.log("personCopy", personCopy);
console.log("person === personCopy", person === personCopy);


console.log("hello")
console.log(..."hello")

let stringArray = [..."hello"];

console.log(stringArray);



let letters = ["a", "b", "c"]

// function changesFirstItem(array) {
//     let arrayCopy = [];
//     for (let entry of array) {
//         arrayCopy.push(entry);
//     }
//     arrayCopy[0] = "bla";
//     return arrayCopy;
// }

function changesFirstItem(array) {
    let arrayCopy = [...array];
    arrayCopy[0] = "bla";
    return arrayCopy;
}

let modifiedLetters = changesFirstItem(letters);
console.log("modifiedLetters", modifiedLetters);
console.log("letters", letters);