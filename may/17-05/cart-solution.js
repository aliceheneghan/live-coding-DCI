class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }
  list() {
    console.log("\n\nItems in the cart:");
    console.log("---------------");
    console.log(this.items);
  }
  add(productToAdd) {
    /**
     * Check if the name of the product is already in the cart
     *
     * productIncart will be undefined if the cart doesn't contain the product that we are trying to add
     *
     * otherwise, it will be an object containing the actual product that we are trying to add. We can
     * later use this object to change its quantity directly
     */
    const productInCart = this.items.find(
      (itemInCart) => itemInCart.name === productToAdd.name
    );
    // the item is not in the cart
    if (productInCart === undefined) {
      // we have to add the new product to the cart
      // we have to set its quantity to 1
      const productCopy = { ...productToAdd };
      productCopy.quantity = 1;
      this.items.push(productCopy);
    } else {
      productInCart.quantity++;
    }
  }
  remove(productName) {
    const productInCart = this.items.find(
      (itemInCart) => itemInCart.name === productName
    );
    if (productInCart !== undefined) {
      productInCart.quantity--;
    } else {
      console.log(`${productName} was not in the cart`);
      return this.items;
    }

    if (productInCart.quantity === 0) {
      this.items = this.items.filter((item) => item.quantity > 0);
    }
    return this.items;
  }
  getTotal() {
    return this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
  shippingCost() {
    // it returns 0 if the total of the cart is more than 100
    // 4.9, if the number of items in the cart is less than 5
    // If it's more, then it returns 9.9
    const total = this.getTotal();
    const totalQuantity = this.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    if (total > 100) {
      return 0;
    } else if (totalQuantity < 5) {
      return 4.9;
    } else {
      return 9.9;
    }
  }
}

let myCart = new Cart();
let user1Cart = new Cart();
let user2Cart = new Cart();
let user3Cart = new Cart();
let shoes = new Product("shoes", 15.99);
let shirt = new Product("shirt", 25.99);
let jeans = new Product("jeans", 29.99);

myCart.add(shoes);
myCart.add(shoes);
myCart.add(jeans);
myCart.add(shirt);
myCart.add(shoes);
myCart.add(shoes);
myCart.add(shoes);
// myCart.add(shirt);
// myCart.add(jeans);
// myCart.add(shoes);
console.log(myCart.getTotal());
myCart.list();

myCart.remove("shoes");
myCart.remove("jeans");
myCart.remove("jacket");
myCart.list();
console.log(myCart.getTotal());

// console.log(shoes);

// const cart = [];

// const product1 = {
//   name: "shoes",
//   price: 15,
// };

// const product2 = {
//   name: "jeans",
//   price: 25,
// };
// const product3 = {
//   name: "hat",
//   price: 35,
// };


let cartItems = [
  { name: "shoes", price: 15.99, quantity: 4 },
  { name: "jeans", price: 29.99, quantity: 0 },
  { name: "shirt", price: 25.99, quantity: 1 },
];

// let's remove the item with quantity 0 from the array

// find the index with quantity 0
// splice to remove the item at that index

// console.log(cartItems.filter((item) => item.quantity > 0));


// how many products of a certain type do we have in an array (use filter)