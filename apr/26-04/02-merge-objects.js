/**
 * Object.assign()
 *
 */

let person = {
  firstName: "Sylvia",
  age: 28,
};

let address = {
  street: "Blablastraße",
  number: 21,
  city: "Berlin",
};

// let's merge the 2 objects above into a new one

let idCard = Object.assign(person, address);

console.log(idCard);

let x = { a: 1, b: 2 };
let y = { a: 99, c: 3 };

let z = Object.assign(y, x);

console.log(z);