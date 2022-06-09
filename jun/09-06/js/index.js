// password gen upon a user input
const pass = document.querySelector("#pass");
let userKeyWords = "";
const storeValue = (e) => {
  console.log(e);
  userKeyWords = e.target.value;
};
const passGen = (e) => {
  e.preventDefault();
  userKeyWords += "$&@€";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += userKeyWords[Math.floor(Math.random() * userKeyWords.length)];
    if (i % 4 == 0) {
      result += "-";
    }
  }
  pass.innerHTML = result;
};

document.querySelector("#key-words").addEventListener("keyup", storeValue);
document.querySelector("form").addEventListener("submit", passGen);
// Game :)
