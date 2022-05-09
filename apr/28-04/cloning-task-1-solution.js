const cart = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
];

const hatProduct = {
  type: "hat",
  price: 15,
  color: "pink",
};

// this function should also add a description key to every product in the array
// description: "blue jeans, 27€"
// const addProduct = (cart, product) => {
//     const cartCopy = [...cart];
//     cartCopy.push(product);
//     return cartCopy;
// };

const addProductAndDescription = (cart, product) => {
  const newCart = [];
  for (let item of cart) {
    let itemCopy = { ...item };
    itemCopy.description = `${itemCopy.color} ${itemCopy.type}, ${itemCopy.price}€`;
    newCart.push(itemCopy);
  }
  product.description = `${product.color} ${product.type}, ${product.price}€`;
  newCart.push(product);

  return newCart;
};

const updatedCart = addProductAndDescription(cart, hatProduct);

console.log("updated cart", updatedCart);
console.log("original cart", cart);



