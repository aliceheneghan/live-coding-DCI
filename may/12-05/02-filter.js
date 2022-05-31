const products = [
  {
    type: "shirt",
    color: "green",
    price: 18,
  },
  {
    type: "jeans",
    color: "red",
    price: 28,
  },
  {
    type: "hat",
    color: "blue",
    price: 15,
  },
  {
    type: "shirt",
    color: "yellow",
    price: 29,
  },
  {
    type: "jacket",
    color: "black",
    price: 39,
  },
  {
    type: "skirt",
    color: "yellow",
    price: 21,
  },
  {
    type: "shoes",
    color: "black",
    price: 27,
  },
  {
    type: "sunglasses",
    color: "yellow",
    price: 15,
  },
];

const productsCheaperThan30 = products.filter(
  (currentValue) => currentValue.price < 30
);
console.log("products cheaper than 30:", productsCheaperThan30);

// how many products cheaper than 30 do we have?
console.log(
  "the number of products cheaper than 30 is:",
  productsCheaperThan30.length
);

const numberOfCheapProducts = products.filter(
  (currentValue) => currentValue.price < 30
).length;
console.log(numberOfCheapProducts);

// how many shirts do we have?

// how many yellow products do we have?

// we can count them with reduce

// In output we want an array of strings with the description of black products
// -> ["Black jacket, 39€", "Black shoes, 27€"]

const blackProducts = products.filter((p) => p.color === "black");
console.log(blackProducts);
const productsToString = blackProducts.map(
  (p) => `${p.color[0].toUpperCase() + p.color.slice(1)} ${p.type}, ${p.price}€`
);

console.log(productsToString);

const productsToString2 = products
  .filter((p) => p.color === "black")
  .map(
    (p) =>
      `${p.color[0].toUpperCase() + p.color.slice(1)} ${p.type}, ${p.price}€`
  );

// are there pink products in our array?

const pinkProducts = products.filter((p) => p.color === "pink");
console.log(
  "are there pink products in our array?",
  pinkProducts.length > 0 ? "yes" : "no"
);

// get all yellow products that cost more than 20
const yellowProductsMoreThan20 = products.filter(
  (p) => p.color === "yellow" && p.price > 20
);

console.log("yellow products that cost more than 20", yellowProductsMoreThan20)
