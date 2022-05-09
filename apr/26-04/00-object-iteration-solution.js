const cart = [
  {
    type: "t-shirt",
    price: 9.99,
    color: "white",
  },
  {
    type: "shoes",
    price: 49.99,
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
    type: "hoodie",
    price: 19.99,
    color: "blue",
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

const cartTotal = (array) => {
  let result = 0;
  for (const item of array) {
    result += item.price;
  }
  return result;
};

console.log("total", cartTotal(cart));

const totalByType = (array, productType) => {
  let result = 0;
  for (const item of array) {
    if (item.type === productType) {
      result += item.price;
    }
  }
  return result;
};

console.log("t-shirt total", totalByType(cart, "t-shirt"));
console.log("jacket total", totalByType(cart, "jacket"));
console.log("sunglasses total", totalByType(cart, "sunglasses"));

const productsByColor = (array, productColor) => {
  let result = [];
  for (const item of array) {
    if (item.color === productColor) {
      result.push(item);
    }
  }
  return result;
};

console.log(productsByColor(cart, "red"));
console.log(productsByColor(cart, "black"));
console.log(productsByColor(cart, "yellow"));
const pinkProducts = productsByColor(cart, "pink");

if (pinkProducts.length === 0) {
  console.log("try another color");
} else {
  console.log(pinkProducts);
}

const mostExpensiveProduct = (array) => {
  let result = array[0];
  for (let item of array) {
    if (item.price > result.price) {
      result = item;
    }
  }
  return result;
};

console.log("most expensive product:", mostExpensiveProduct(cart));

// console.log(Math.max(1, 2, 99, 5, 100, 6, 7))

const mostExpensiveProduct2 = (array) => {
  let result = {};
  for (let item of array) {
    if (result.price === undefined || item.price > result.price) {
        // result.type = item.type;
        // result.price = item.price;
        // result.color = item.color;
        result = item;
    }
  }
  return result;
};

mostExpensiveProduct2(cart);


const emptyObject = {}

console.log(emptyObject.blabla);




const addProductDescription = function(array) {
    let result = [];
    for (let item of array) {
        // let newDescription = `${item.color} ${item.type}, ${item.price}€`;
        // item.description = newDescription;

        // item.description = `${item.color} ${item.type}, ${item.price}€`;

        item.description = item.color + " " + item.type + ", " + item.price + "€";
        result.push(item);
    }
    return result;
}


console.log(addProductDescription(cart));