const getRanHex = (size) => {
  let result = [];
  let hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join("");
};

let container = document.querySelector(".container");
for (let i = 0; i < 100; i++) {
  let bgColor = getRanHex(6);
  console.log(bgColor);
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.backgroundColor = `#${bgColor}`;
  container.appendChild(div);
}
