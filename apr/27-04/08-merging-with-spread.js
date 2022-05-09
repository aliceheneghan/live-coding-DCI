let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];

console.log(mergedArray);

let person = {
  name: "Tim",
  age: 28,
};

let address = {
  street: "Blablastr.",
  number: 21,
  city: "Berlin",
};

let personWithAdress = { ...person, ...address };

console.log(personWithAdress)
