/**
 * Object static methods
 * 
 * - Object.keys()
 * - Object.values()
 * - Object.entries()
 * - Object.fromEntries()

 * - Object.assign()
 */

const book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  pages: 193,
  publicationYear: 1979,
};

console.log(Object.keys(book)); // [ "title", "author", "pages", "publicationYear"]
console.log(Object.values(book)); // [ "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, 1979]
console.log(Object.entries(book));

/* 
[ 
    ["title", "The Hitchhiker's Guide to the Galaxy"], 
    ["author", "Douglas Adams"],
    ["pages", 193],
    ["publicationYear", 1979]
]
*/

// use a loop to print all keys and values from the object.
// also capitalize the keys of the object

const objectEntries = Object.entries(book);
// for (const entry of objectEntries) {
//   let uppercaseKey = entry[0][0].toUpperCase() + entry[0].slice(1);
//   console.log(`${uppercaseKey}: ${entry[1]}`);
// }

for (const entry of objectEntries) {
  console.log("entry:", entry);
  console.log("entry[0]:", entry[0]);
  console.log("entry[1]:", entry[1]);
}


// console.log(Object.entries("hello"))
// console.log(Object.entries([1, 2, 3]))



const objectKeys = Object.keys(book);
console.log(objectKeys);
console.log(book);

for (const key of objectKeys) {
    console.log("key:", key);
    console.log("value:", book[key]);
}




const bookEntries = Object.entries(book);
console.log(bookEntries)

const bookObject = Object.fromEntries(bookEntries);
console.log(bookObject)


console.log(Object.fromEntries([["a", 1], ["b", 2], ["c", 3]]));

console.log(Object.fromEntries([["a"], ["b"], ["c"]]));
console.log(Object.fromEntries([["a", [1, 2, 3, 4]], ["b", 2, 2, 3, 4], ["c", 3, 4, 5, 6]]));
