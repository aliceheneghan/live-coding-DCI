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

// create a function that returns an array with all the product types available
// output -> ["t-shirt", "shoes", "jeans", "shirt", "t-shirt" ...]

function productTypes(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i].type);
  }
  return result;
}

const types = productTypes(products);
console.log(types);
console.log(types.length);

console.log(productTypes(products));

const electronicProducts = [
    {
        type: "latptop",
        price: 1999,
        color: "dark grey",
    },
    {
        type: "phone",
        price: 999,
        color: "white",
    },
    {
        type: "monitor",
        price: 299,
        color: "silver",
    },
];

const electronicTypes = productTypes(electronicProducts);
console.log(electronicTypes);




/**
 * Create a function called pricesOfType that takes in input an array of products and a string
 * for specifying the type of product
 * 
 * In return, the function gives an array with the prices of that specific type
 * 
 * pricesOfType(products, "t-shirt") -> [9.99, 19.99, 29.99]
 * pricesOfType(products, "jacket") -> [49.99]
 */