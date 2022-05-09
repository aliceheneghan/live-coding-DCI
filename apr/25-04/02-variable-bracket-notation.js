const animals = ["cat", "dog", "duck", "giraffe", "koala"];

console.log(animals[2]);

let index = 4;

console.log(animals[index]);

console.log(animals[2 + 1]);
console.log(animals[7 - 3]);

const person = {
  firstName: "Joann",
  lastName: "Smith",
  age: 28,
};

console.log("dot notation:", person.firstName);
console.log("bracket notation with string:", person[`firstName`]);

let key = 'firstName';
console.log("bracket notation with string concatenation:", person["first" + "Name"]);
console.log("full name:", `${person["firstName"]} ${person["lastName"]}`);

console.log("bracket notation with variable:", person[key]);

// doesn't work
console.log("dot notation with variable:", person.key);

const products = [
    {
      type: "t-shirt",
      price: 9.99,
      color: "white",
    },
    {
      type: "shoes",
      price: 29.99,
      color: "dark green",
    },
    {
      type: "jeans",
      price: 19.99,
      color: "blue",
    },
    {
      type: "shirt",
      price: 12.99,
      color: "black",
    },
    {
      type: "hat",
      price: 9.99,
      color: "red",
    },
    {
      type: "t-shirt",
      price: 19.99,
      color: "yellow",
    },
    {
      type: "t-shirt",
      price: 29.99,
      color: "silver",
    },
    {
      type: "jacket",
      price: 49.99,
      color: "black",
    },
  ];


/**
 * Create a function that takes in input an array of product objects and the name of a key
 * 
 * In return, we get a new array containing all the values for that specific key
 * 
 * productValuesByKey(products, "type") -> ["t-shirt", "shirt", "jeans" ...]
 * productValuesByKey(products, "price") -> [9.99, 19.99, 29.99, ...]
 * productValuesByKey(products, "color") -> ["green", "yellow", "red", ...]
 * 
 */


function productValuesByKey(array, key) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i][key]);
        // result.push(array["type"]);
    }
    return result;
}


console.log(productValuesByKey(products, "type"));
console.log(productValuesByKey(products, "price"));
console.log(productValuesByKey(products, "color"));