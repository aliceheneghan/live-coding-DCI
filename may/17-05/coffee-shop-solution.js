// class CoffeeShop {
//   constructor(name, menu, orders) {
//     this.name = name;
//     this.menu = menu;
//     this.orders = orders;
//   }
//   addOrder(item) {
//     const itemInMenu = this.menu.find((menuItem) => menuItem.name === item);
//     if (itemInMenu !== undefined) {
//       this.orders.push(item);
//     } else {
//       return `The item ${item} is not available on the menu`;
//     }
//   }
//   fulfillOrder() {
//     if (this.orders.length > 0) {
//       const order = this.orders.shift();
//       return `The ${order} is ready`;
//     } else {
//       return "All orders have been fulfilled!";
//     }
//   }
//   listOrders() {
//     console.log("Orders:");
//     for (const order of this.orders) {
//       console.log(order);
//     }
//   }
//   dueAmount() {
//     return this.orders.reduce((prev, order) => {
//       const menuItem = this.menu.find((item) => item.name === order);
//       return prev + menuItem.price;
//     }, 0);
//   }
//   cheapestItem() {
//     const sortedMenu = [...this.menu].sort((a, b) => a.price - b.price);
//     return sortedMenu[0].name;
//   }
//   drinksOnly() {
//     return this.menu
//       .filter((item) => item.type === "drink")
//       .map((item) => item.name);
//   }
//   foodOnly() {
//     return this.menu
//       .filter((item) => item.type === "food")
//       .map((item) => item.name);
//   }
// }

// let tcs = new CoffeeShop("Coffee Place", menu, []);

// console.log(tcs.addOrder("hot cocoa"));
// console.log(tcs.addOrder("iced tea"));

// console.log(tcs.addOrder("Cinnamon roll"));
// console.log(tcs.addOrder("Iced coffee"));
// console.log(tcs.listOrders());

// console.log(tcs.dueAmount());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.listOrders());
// console.log(tcs.dueAmount());

// console.log("Cheapest item", tcs.cheapestItem());
// console.log(tcs.drinksOnly());
// console.log(tcs.foodOnly());

function test() {
  let x = 2;
  const y = 2;
}

const myCities = ["Rome", "Berlin"];

myCities.push("London");
console.log(myCities);
myCities.pop();
myCities.pop();

console.log(myCities);

myCities[0] = "ROME";
console.log(myCities);

const animal = {
  type: "cat",
  name: "Ruphus",
  color: "brown",
};

console.log(animal.age);
