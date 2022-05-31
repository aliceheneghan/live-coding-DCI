let menu = [
  {
    name: "Sandwich",
    type: "food",
    price: 4.99,
  },
  {
    name: "Donut",
    type: "food",
    price: 2.59,
  },
  {
    name: "Coke",
    type: "drink",
    price: 1.99,
  },
  {
    name: "Lemonade",
    type: "drink",
    price: 1.99,
  },
  {
    name: "Coffee",
    type: "drink",
    price: 1.59,
  },
  {
    name: "Toast",
    type: "food",
    price: 3.99,
  },
  {
    name: "Cinnamon roll",
    type: "food",
    price: 3.99,
  },
  {
    name: "Iced coffee",
    type: "drink",
    price: 3.99,
  },
];

const sortedMenu = [...menu].sort((a, b) => a.price - b.price);

console.log(sortedMenu)

console.log("The cheapest item on the menu is:", sortedMenu[0].name)