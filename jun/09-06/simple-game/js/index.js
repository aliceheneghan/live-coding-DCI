// https://keycode.info/

const mini = document.querySelector(".mini");
const body = document.querySelector("body");
// stand point
let hStandPoint = 0;
let vStandPoint = 0;
const goUp = () => {
  vStandPoint += 10;
  mini.style.top = vStandPoint + "px";
};
const goRight = () => {
  hStandPoint += 10;
  mini.style.left = hStandPoint + "px";
};
const goDown = () => {
  vStandPoint -= 10;
  mini.style.top = vStandPoint + "px";
};
const goLeft = () => {
  hStandPoint -= 10;
  mini.style.left = hStandPoint + "px";
};

function move(e) {
  console.log(e);
  if (e.code == "KeyW") goUp();
  if (e.code == "KeyA") goLeft();
  if (e.code == "KeyS") goDown();
  if (e.code == "KeyD") goRight();
}

body.addEventListener("keyup", move);
