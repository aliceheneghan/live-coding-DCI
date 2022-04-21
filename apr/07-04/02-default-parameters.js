const sum = (a, b) => a + b;

// if there is no userName, we would like to see "hello guest";
const greetUser = function (userName) {
  return `hello ${userName}`;
};

let greeting1 = greetUser("pluto");
let greeting2 = greetUser("mickey");
let greeting3 = greetUser();

console.log(greeting1); // hello pluto
console.log(greeting2); // hello mickey
console.log(greeting3); // hello undefined

const greetUserV2 = function (userName) {
  userName = userName === undefined ? "guest" : userName;
  return `hello ${userName}`;
};

const greetUserV3 = function (userName) {
  if (userName === undefined) {
    userName = "guest";
  }
  return `hello ${userName}`;
};

let greeting4 = greetUserV2("pluto");
let greeting5 = greetUserV2("mickey");
let greeting6 = greetUserV2();

console.log("greeting version 2");
console.log(greeting4); // hello pluto
console.log(greeting5); // hello mickey
console.log(greeting6); // hello guest

const greetUserDefault = function (userName = "guest") {
  return `hello ${userName}`;
};

let greeting7 = greetUserDefault("pluto");
let greeting8 = greetUserDefault("mickey");
let greeting9 = greetUserDefault();

console.log("greeting with default");
console.log(greeting7); // hello pluto
console.log(greeting8); // hello mickey
console.log(greeting9); // hello guest


const customGreeting = function (greeting = "hello", userName = "guest") {
  return `${greeting} ${userName}`;
};

let customGreeting1 = customGreeting("hi", "joseph");
let customGreeting2 = customGreeting("hallo", "josephine");
let customGreeting3 = customGreeting("hey");
let customGreeting4 = customGreeting(undefined, "carlo");


console.log(customGreeting1);
console.log(customGreeting2);
console.log(customGreeting3);
console.log(customGreeting4);