/**
 * an array is a specific kind of JavaScript object
 *
 * an array is a collection of items, or values
 *
 * values in an array can be of any data type
 *
 */

// create an empty array and assign it to a variable
let food = [];

// get the length of the array and print it to the console
console.log(food.length);

// let's add an element to the food array
food.push("bread");

console.log(food.length);

// get the "bread" item and print it to the console
console.log(food[0]);

// our array right now has length 1, so the only index available is 0
// if we try to reach an index larger than that we get undefined back
console.log(food[1]); // undefined

food.push("egg", "sandwich", "cheese");

console.log(
  `After pushing 3 more items, the length of the array is ${food.length}`
);

// let's remove the last item from the array
food.pop();
console.log("The food array after popping one item:", food);

// let's add an element at the beginning of the array

food.unshift("bacon");

console.log("The food array after unshifting bacon in it", food);

// let's remove the first item from the array
food.shift();
console.log("The food array after shift", food);

// let's replace the egg item with biscuits

food[1] = "biscuits";

console.log("After replacing egg with biscuits:", food);

// let's do the same, but using the splice() method. Let's replace the sandwich with some yogurt
food.splice(2, 1, "yogurt");

console.log("after splice, food array is:", food);

const drinks = ["orange juice", "milk", "coffee", "tea", "water", "lemon juice"];

// removing 2nd and 3rd element from an array
// 2nd and 3rd element means elements at index 1 and 2

let removedDrinks = drinks.splice(1, 2, "hot chocoate", "soda", "sparkling water");
console.log(drinks);

drinks[1] = "hot chocolate";

/**
 * the splice() method does 2 things:
 * 
 * - it modifies the orignal array (the array to which we are applying splice()) 
 * - it gives us back the portion of array that was spliced (removed)
 */


let stringWithTypo = "hllo";
stringWithTypo = "hello";




/**
 * reversing a string
 * 
 * We don't have a reverse() method for strings. The reverse() method works only
 * on arrays.

 * To reverse a string:
 * - convert the string into an array, first.
 * - Then we reverse the array.
 * - Then we transform the array back to a string
 * 
 * input => expected output
 * "Hello world" => "dlrow olleH"
 */

let sentence = "Hello world";
let sentenceArray = sentence.split("")
sentenceArray.reverse();
console.log(sentenceArray);
let sentenceReversed = sentenceArray.join("")

console.log(sentenceReversed);

let sentenceReversed2 = sentence.split("").reverse().join("");
console.log(sentenceReversed2);

const cart = ["t-shirt", "jeans", "hat", "sunglasses"];

console.log(`Your cart contains: ${cart}`);

// in the console.log() above, javascript automatically transforms the array
// into a string, using commas as separators

/**
 * I want to see an output formatted like this:
 * 
 * Your cart contains:
 * 
 * t-shirt
 * jeans
 * hat
 * sunglasses
 */

console.log(`\nYour cart contains:\n\n${cart.join("\n")}\n------\nTotal items: ${cart.length}`);

console.log(`\nYour cart contains:\n\nt-shirt\njeans\nhat\nsunglasses\n------\nTotal items: ${cart.length}`);