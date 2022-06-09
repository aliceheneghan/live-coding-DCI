// document.write("<div> this is js div </div>");
// document.write("<div>  </div>");
// KISS
// DRY
// step 1
const newElement = document.createElement("h1");
// step 2
const nodeText = document.createTextNode("Welcome to my toDo list");
// step 3
//console.log(newElement);
newElement.appendChild(nodeText);
document.body.appendChild(newElement);

const arr = [];
const ul = document.querySelector("ul");
// SPA
const addToList = (e) => {
  e.preventDefault();
  console.log(e);
  let userData = document.querySelector("#user-data").value;
  console.log(userData);
  // = == ===
  if (!userData == "") {
    // step 1
    let newLi = document.createElement("li");
    // step 2
    let text = document.createTextNode(userData);
    // step 3
    newLi.appendChild(text);
    newLi.style.backgroundColor = colorGen();
    const doneBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    doneBtn.innerHTML = "✔️";
    delBtn.innerHTML = "❌";
    newLi.appendChild(doneBtn);
    newLi.appendChild(delBtn);
    ul.appendChild(newLi);
    delBtn.addEventListener("click", () => newLi.remove());
    doneBtn.addEventListener("click", () => newLi.classList.add("done"));
    document.querySelector("#user-data").value = "";
  } else {
    document.querySelector("#user-data").placeholder =
      "You need to add something here 😎";
  }
};

const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
document.querySelector("form").addEventListener("submit", addToList);
