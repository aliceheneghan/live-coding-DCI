[]; // empty array
[1, 2, 3];
["hello", "hallo", "hola"];

{
} // empty object

console.log(typeof {});
console.log(typeof []);

let firstName = "Jessie";
let age = 28;
let nationality = "American";
let occupation = "designer";
let hairColor = "brown";
let eyeColor = "green";
let favouriteColor = "green";
let isMarried = false;
let isVegetarian = true;
let shoeSize = 38;

let person = [
  "Jessie",
  28,
  "American",
  "designer",
  "brown",
  "green",
  "green",
  false,
  true,
  38,
];

let person2 = [
  ["firstName", "Jessie"],
  ["age", 28],
  ["nationality", "American"],
];

/**
 * Objects are collection of key/value pairs
 *
 */

let personObject = {
  firstName: "Jessie",
  age: 28,
  nationality: "American",
  occupation: "designer",
  hairColor: "brown",
  hobbies: ["skating", "reading", "singing"],
  address: {
      street: "Some street",
      number: 21,
      city: "New York",
  }
};

console.log(personObject["firstName"]); // Jessie
console.log(personObject["nationality"]); //
console.log("jessie's hobbies", personObject["hobbies"]); //
console.log("jessie's first hobby is:", personObject["hobbies"][0]); //

for (let i = 0; i < personObject["hobbies"].length; i++) {
  console.log(personObject["hobbies"][i]);
}

const product = {
  brand: "Adidas",
  name: "3MC Unisex",
  price: 64.95,
  mainPicture: "http://shoe.jpg",
  otherPictures: ["picture1.jpg", "picture2.jpg", "picture3.jpg"]
};

console.log(product);
console.log(product["name"]);

const productArray = [
  "Adidas",
  "shoes",
  "white",
  "3MC Unisex",
  64.95,
  "http://shoe.jpg",
];

console.log("product name is", productArray[1]);

// dot notation

console.log(Math.floor(4.43));
console.log(Math["floor"](4.43));


console.log(console);
console["log"]("hey");

/**
 * We have 2 ways of accessing values in an object
 * 
 * - square bracket notation
 *  - we write the name of the object followed by square brackets
 *  - inside the square brackets we write the name of a property as a string 
 *     (the name needs to be in quotes)
 * - dot notation
 *  - we write the name of the object followed by a dot
 *  - after the dot we can just write the name of the property as it is, without
 *   quotes or anything else
 */



let person3 = {
    firstName: "Chris",
    age: 30,
    address: {
        street: ["street 1", "street 2", "street 3"],
        city: "Berlin"
    }
}

// print the firstName using the dot notation
console.log(person3.firstName);

// print the street to the console
console.log(person3.address.city);
console.log(person3.address.street);
console.log(person3.address.street[0]);
console.log(person3.country);






console.log(person3[age]);