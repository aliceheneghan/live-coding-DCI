/**
 * 0 * 9: 0
 * 1 * 9: 9
 * 2 * 9: 18
 * ...
 */

// console.log(`1 * 9: ${1 * 9}`);
// console.log(`2 * 9: ${2 * 9}`);
// console.log(`3 * 9: ${3 * 9}`);
// console.log(`4 * 9: ${4 * 9}`);

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * 9: ${i * 9}`);
}

// Ctrl c to stop the terminal

for (let j = 0; j <= 10; j++) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${j}: ${i * j}`);
  }
}

// Task 7.5

for (let i = 1; i <= 4; i++) {
  console.log(i);
  console.log(i);
  console.log(i);
}

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    // console.log("i", i);
    // console.log("j", j);
    // console.log("------");
    console.log(i);
  }
}

for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 4; j++) {
    // console.log("i", i, "j", j);
    // console.log("-----");
    console.log(j);
  }
}
