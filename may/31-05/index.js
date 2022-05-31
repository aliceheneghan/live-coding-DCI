const items = document.querySelectorAll(".shopping li");
const lib = document.querySelector("#showMe");
console.log(items);
// for (let i = 0; i < items.length; ) {
//   items[i].style.backgroundColor = "gray";
//   i += 2;
// }
// items.forEach((item, i) => {
//   item.style.backgroundColor = `rgba(
//      ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)},
//     ${Math.random()}
//   )`;
// });
const randomHex = () => {
  let result = [];
  let numAndStr = "1234567890ABCDEF";
  for (let i = 0; i < 6; i++) {
    result.push(numAndStr[Math.floor(Math.random() * numAndStr.length)]);
  }
  lib.innerHTML = result.join("");
  return result.join("");
};
for (const item of items) {
  item.style.backgroundColor = `#${randomHex()}`;
}

//= randomHex();
