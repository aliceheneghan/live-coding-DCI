let food = ["sandwich", "pizza", "pasta", "kebab", "hot dog", "salad", "fries"];

// let's remove kebab and hot dog
// in the end food should be equal to: ["sandwich", "pizza", "pasta", "salad", "fries"]
let removedFood = food.splice(3, 2);

console.log("removed food", removedFood);
console.log("food", food);

let otherFood = ["cheese", "burrito", "eggs", "burger"];

let sliceOtherFood = otherFood.slice(1, 3);
console.log(sliceOtherFood);

food.splice(3, 0, sliceOtherFood);

console.log(food);