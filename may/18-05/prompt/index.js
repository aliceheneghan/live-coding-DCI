const prompt = require("prompt-sync")();
const colors = require("colors");

let name = prompt(colors.rainbow("What's your name? "));

console.log(colors.green(`Hello, ${name}`));

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

let guess = prompt("guess the secret number: ");

while (parseInt(guess) !== randomNumber) {
  guess = prompt("Wrong! Try again: ");
}

console.log("you did it!");
