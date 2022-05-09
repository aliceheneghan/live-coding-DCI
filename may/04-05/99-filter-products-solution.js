const products = [
  {
    type: "t-shirt",
    category: "clothes",
    price: 9.99,
    color: "white",
  },
  {
    type: "shoes",
    category: "clothes",
    price: 49,
    color: "dark green",
  },
  {
    type: "phone",
    category: "electronics",
    price: 199,
    color: "white",
  },
  {
    type: "shirt",
    category: "clothes",
    price: 27,
    color: "black",
  },
  {
    type: "hoodie",
    category: "clothes",
    price: 38,
    color: "blue",
  },
  {
    type: "keyboard",
    category: "electronics",
    price: 20,
    color: "black",
  },
  {
    type: "pan",
    category: "kitchen",
    price: 21,
    color: "yellow",
  },
  {
    type: "moka",
    category: "kitchen",
    price: 15,
    color: "silver",
  },
  {
    type: "jacket",
    category: "clothes",
    price: 49.99,
    color: "black",
  },
];

const isKitchenProduct = (product) => product.category === "kitchen";
const costsMoreThan20 = (product) => product.price > 20;
const colorStartsWithB = (product) => product.color[0].toLowerCase() === "b";

function filterByColor(products, color) {
  const result = products.filter((product) => product.color === color);
  return result;
}

const kitchenProducts = products.filter(isKitchenProduct);
const expensiveProducts = products.filter(costsMoreThan20);
const colorsBProducts = products.filter(colorStartsWithB);

console.log("kitchen products", kitchenProducts);
console.log("more than 20€ products", expensiveProducts);
console.log("color starts with b products", colorsBProducts);

console.log("yellow products", filterByColor(products, "yellow"));
console.log("green products", filterByColor(products, "green"));
console.log("black products", filterByColor(products, "black"));
