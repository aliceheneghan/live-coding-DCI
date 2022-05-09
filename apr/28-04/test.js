let addingArrays = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
      result[i] = "";
    for (let j = 0; j < array[i].length; j++) {
      result[i] += array[j][i];
    }
  }
  return result;
};

console.log(
  addingArrays([
    ["J", "L", "L", "M"],
    ["u", "i", "i", "a"],
    ["s", "v", "f", "n"],
    ["t", "e", "e", ""],
  ])
);
