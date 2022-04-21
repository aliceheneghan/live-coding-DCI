let a = 5;
let b = 10;
let c = 99;

let sum = a + b;

b = 0;

let total = 0;
for (let i = 0; i < 5; i++) {
  total += i;
}

let money = 10;
let breadPrice = 4;
let applePrice = 1;
let bananaPrice = 2;
let iceCreamPrice = 6;

if (money >= breadPrice) {
  console.log("buy the bread");
  money -= breadPrice;
}

if (money >= applePrice) {
  console.log("buy the apples");
  money -= applePrice;
}
if (money >= bananaPrice) {
  console.log("buy the banana");
  money -= bananaPrice;
}
if (money >= iceCreamPrice) {
  console.log("buy the ice cream");
  money -= iceCreamPrice;
}
