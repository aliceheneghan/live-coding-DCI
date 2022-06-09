// var
const arr = [];
// html elements
const box = document.querySelector(".box");
const h2 = document.querySelector(".result h2");
const userData = document.querySelector("#user-name");
const form = document.querySelector("form");
const start = document.querySelector("#start");
const stopListen = document.querySelector("#stop");
// functions
const whiteBg = () => {
  // this
  box.style.backgroundColor = "white";
};
const orangeBg = () => {
  box.style.backgroundColor = "orange";
};
// EventListeners
const startBoxEvents = (e) => {
  //  box.addEventListener("click", () => console.log("cool"));
  box.addEventListener("mouseenter", orangeBg);
  box.addEventListener("mouseleave", whiteBg);
};
// DRY
const stopBoxEvents = () => {
  //  box.removeEventListener("click");
  box.removeEventListener("mouseenter", orangeBg);
  box.removeEventListener("mouseleave", whiteBg);
};

const sayHi = () => {
  // alert("Hey, happy to have you again");
};
window.addEventListener("load", sayHi);
// userData.addEventListener("keyup", () => console.log(userData.value));
const newUser = (e) => {
  e.preventDefault();
  console.log(e);
  // e.target.value
  h2.innerHTML += `${userData.value} <br>`;
};
form.addEventListener("submit", newUser);
form.addEventListener("reset", () => (form.style.backgroundColor = "yellow"));
start.addEventListener("click", startBoxEvents);
stopListen.addEventListener("click", stopBoxEvents);

const display = (e) => {
  console.log(e);
};
display();
