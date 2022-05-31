class Product {
  constructor(type, category, price, color) {
    this.type = type;
    this.category = category;
    this.price = price;
    this.color = color;
    // this.printDescription2 = function () {
    //   return `${this.color} ${this.type}, ${this.price}€`;
    // };
  }
  printDescription() {
    return `${this.color} ${this.type}, ${this.price}€`;
  }
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
}

// create an instance of the class Product
// product1 will be an object
const product1 = new Product("jeans", "clothing", 20, "blue");

const myCart = new Cart();
console.log(myCart);
myCart.list();

// let's add product1 to myCart
myCart.add(product1);
console.log(myCart);
myCart.list();

const myCart2 = new Cart();
console.log(myCart2);

// console.log(Cart);
/**
 * let myCart = {
 *  items: [],
 * }
 */

// let person = {
//     name: "Tim"
// }

// let animal = {
//     type: "giraffe",
//     name: "jeff"
// }

// person = animal;

// Cart.prototype.hey = function() {console.log("hey")};

// myCart.hey();
// myCart2.hey();



class User {
    constructor(username) {
        this.username = username;
        this.initialCredit = 5;
        this.profilePicture = "http://website.com/defaultPic.jpg";
    }
}