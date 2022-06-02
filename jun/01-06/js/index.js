// window.alert === alert()
// window.prompt === prompt()

// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

// Node tree https://dom.spec.whatwg.org/#concept-node

//alert("Hi");
//const userInput = prompt("Hey, what is your name?", "type your name please");

// You will lookup for "What is  non-live NodeList"
//  DOMTokenList

const container = document.querySelector(".container");

const spanList = document.querySelectorAll(".container span");
//console.log(spanList);
spanList.forEach((span, i) => {
  console.log(span);
  if (i % 2 == 0) {
    span.style.backgroundColor = "orange";
  }
  span.innerHTML = "Hi  <br>";
});

spanList[2].style.backgroundColor = "red";
console.log(spanList.length);
// + > ~
const highlight = document.querySelectorAll("li[class='highlight']");
highlight.forEach((li, i) => {
  li.style.backgroundColor = "blue";
});

// const obj = {
//     key : "value",
//     display: ()=>{}
// }
// [{},{}]

const div = document.querySelector(".main");
// div.classList.add("big");
div.classList.add("small", "big");
console.log(div.classList);
div.classList.remove("big");
const classArr = ["classOne", "classTwo"];
div.classList.add(...classArr);
const theme = () => {
  const checkbox = document.querySelector("#light-dark").checked;
  const body = document.querySelector("body");
  console.log(checkbox);
  if (checkbox) {
    //  this is cool state
    // body.style.backgroundColor = "black";
    // body.classList.toggle("dark");
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    //  this is not so cool state
    // body.style.backgroundColor = "white";
    // body.classList.toggle("light");
    body.classList.add("light");
    body.classList.remove("dark");
  }
};
