/**
 * Create a class Product.
 *
 * Its properties are:
 * - type
 * - category
 * - price
 * - color
 */
class Product {
  constructor(type, category, price, color) {
    this.type = type;
    this.category = category;
    this.price = price;
    this.color = color;
    this.printDescription2 = function () {
      return `${this.color} ${this.type}, ${this.price}€`;
    };
  }
  printDescription() {
    return `${this.color} ${this.type}, ${this.price}€`;
  }
}

const product1 = new Product("jeans", "clothing", 40, "blue");
const product2 = new Product("phone", "electronics", 140, "white");
const product3 = new Product("keyboard", "electronics", 19, "black");

console.log(product1);
console.log(product2);
console.log(product3);

console.log(product1.printDescription());

for (let key in product1) {
  console.log(key);
}

class Cart {
  constructor() {
    this.items = [];
  }
  add(product) {
    this.items.push(product);
  }
  totalAmount() {
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  }
  list() {
    for (const item of this.items) {
      console.log(`Type: ${item.type}`);
      console.log(`Category: ${item.category}`);
      console.log(`Color: ${item.color}`);
      console.log(`Price: ${item.price}€`);
      console.log("--------------");
    }
  }
  removeByType(productType) {
    const filteredItems = this.items.filter((item) => item.type !== productType);
    this.items = filteredItems;
  }
}

const myCart = new Cart();
const myCart2 = new Cart();
const myCart3 = new Cart();

myCart.add(product1);
myCart.add(product2);
myCart.add(product3);
myCart.list();
console.log(myCart.totalAmount());

console.log(myCart);
myCart.removeByType("jeans");

myCart.list();
console.log(myCart.totalAmount());
// class Calculator {
//   add(...rest) {
//     let total = 0;
//     for (let n of rest) {
//       total += n;
//     }
//     return total;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
// }

// const myCalc = new Calculator();

// console.log(myCalc.add(2, 3, 3, 4, 5));

console.log(myCart);
console.log(myCart2);
console.log(myCart3);