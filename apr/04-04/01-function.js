/**
 *
 */

// let x = 2;

// this is a function declaration
function double(n) {
  return n * 2;
}

let result = double(3);

console.log(result);

let x = result;

console.log(x * 2);

let number = 3;

function test(number) {
  return number;
}

console.log(test(99)); // 99

function sayHello(name) {
  return `hey ${name}`;
}

console.log(sayHello("Julia"));

let name1 = "Carlo";
let name2 = "Julia";
let name3 = "Mark";
let name4 = "Marcella";
console.log(`hey ${name1}`);
console.log(`hey ${name2}`);
console.log(`hey ${name3}`);
console.log(`hey ${name4}`);

console.log(sayHello("Julia"));
console.log(sayHello("Carlo"));
console.log(sayHello("Mark"));
console.log(sayHello("Marcella"));

function greet(name) {
  const message = `hello ${name}`;
  return message;
}

let greeting1 = greet("Julia");
let greeting2 = greet("Jacob");

console.log(greeting1);
console.log(greeting2);

function randomGreet(name) {
  const greetings = ["hola", "ciao", "hello", "hallo", "hey"];
  const randomIndex = Math.floor(Math.random() * greetings.length);
  const greeting = greetings[randomIndex];
  const message = `${greeting} ${name}`;
  return message;
}

let randomGreeting1 = randomGreet("Julia");

console.log(randomGreeting1);
console.log(randomGreet("Jacob"));
console.log(randomGreet("Carlo"));
console.log(randomGreet("Bruno"));

let string = "hello";

string.length;

// .splice()
// .slice()
// .toUpperCase()
// .toLowerCase()

// parseFloat()
// parseInt()

function isMultipleOf2(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isMultipleOf2(4)); // true
console.log(isMultipleOf2(5)); // false
console.log(isMultipleOf2(6)); // true

function isMultipleOf3(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isMultipleOf3(4)); // false
console.log(isMultipleOf3(5)); // false
console.log(isMultipleOf3(6)); // true

function isMultipleOf(number, multiple) {
  if (number % multiple === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isMultipleOf(4, 2)); // true
console.log(isMultipleOf(5, 3)); // false
console.log(isMultipleOf(6, 4)); // false
console.log(isMultipleOf(7, 3)); // false

/**
 *
 * Anatomy of a function declaration
 *
 * - describePerson is the function name
 * - name, age, eyeColor, hairColor are called "parameters", they are the function parameters
 * - what's inside the curly brackets we have the function body
 * - return statement is what we return from the function
 */
function describePerson(name, age, eyeColor, hairColor) {
  const description = `${name} is ${age} years old, has ${eyeColor} eyes and ${hairColor} hair`;
  return description;
}

/**
 * Function call
 * 
 * - describePerson: name of the function we want to execute
 * - "Jacob", 28, "blue", "blonde": these are called "arguments", they are 
 * the function arguments. They will be assigned to the corresponding parameter
 * - we say that we are "passing" arguments to the function
 */
const resultDescription = describePerson("Jacob", 28, "blue", "blonde");

console.log(describePerson("Jacob", 28, "blue", "blonde"));
console.log(describePerson(13, "Julia", "brown", "green"));
console.log(describePerson("Mark", "blonde", 3, "green"));
