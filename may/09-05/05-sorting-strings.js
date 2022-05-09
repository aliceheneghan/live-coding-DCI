let words = ["table", "chair", "mouse", "water", "webcam", "bottle", "laptop"];

console.log([...words].sort());

let words2 = ["table", "Chair", "Mouse", "Water", "webcam", "bottle", "laptop"];

console.log(
  [...words2].sort((a, b) => {
    let lowerCaseA = a.toLowerCase();
    let lowerCaseB = b.toLowerCase();

    if (lowerCaseB < lowerCaseA) {
      return 1;
    } else if (lowerCaseB > lowerCaseA) {
      return -1;
    } else {
      return 0;
    }
  })
);

console.log(
  [...words2].sort((a, b) => {
    let lowerCaseA = a.toLowerCase();
    let lowerCaseB = b.toLowerCase();

    return lowerCaseB < lowerCaseA ? 1 : lowerCaseB > lowerCaseA ? -1 : 0;
  })
);

console.log(
  [...words2].sort((a, b) => {
    let lowerCaseA = a.toLowerCase();
    let lowerCaseB = b.toLowerCase();

    return lowerCaseA.localeCompare(lowerCaseB);
  })
);

let numbers = [5, 7, 1, 4465, 2, 0];

console.log([...numbers].sort((a, b) => b - a));
