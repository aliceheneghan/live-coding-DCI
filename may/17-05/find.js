let products = [
  {
    type: "t-shirt",
    price: 9.99,
    color: "red",
  },
  {
    type: "socks",
    price: 4.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 44.99,
    color: "black",
  },
  {
    type: "t-shirt",
    price: 14.99,
    color: "green",
  },
  {
    type: "t-shirt",
    price: 22.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 59.99,
    color: "blue",
  },
  {
    type: "skirt",
    price: 24.99,
    color: "yellow",
  },
  {
    type: "socks",
    price: 14.99,
    color: "yellow",
  },
];

const product1 = products.find((item) => item.type === "skirt");
console.log(product1);

const product2 = products.find((item) => item.type === "socks");
console.log(product2);

const product3 = products.find((item) => item.type === "jacket");
console.log(product3);

if (product3 === undefined) {
  console.log("the product is not in the array");
} else {
  console.log("the product is available, do whatever you want with it");
}

const tShirts = products.filter((product) => product.type === "t-shirt");

console.log(`We have ${tShirts.length} t-shirts`);
