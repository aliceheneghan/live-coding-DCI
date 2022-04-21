for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log("i:", i);
    console.log("j:", j);
  }
}

for (let row = 0; row < 5; row++) {
  for (let column = 0; column < 5; column++) {
    console.log("row:", row);
    console.log("column:", column);
  }
}

for (let minute = 0; minute < 60; minute++) {
  for (let second = 0; second < 60; second++) {
    console.log(
      `${minute <= 9 ? "0" : ""}${minute}:${second <= 9 ? "0" : ""}${second}`
    );
  }
}
