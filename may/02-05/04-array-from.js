console.log(Array.from("hello"));
console.log(Array.from([1, 2, 3]));

let a = [1, 2, 3];

let aCopy = Array.from(a);
let aCopy1 = [...a];

console.log(a === aCopy);
