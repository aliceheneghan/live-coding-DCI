// standard function declaration
function onlyNumbers(array) {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arrayResult.push(array[i]);
    }
  }

  return arrayResult;
}

console.log(onlyNumbers([1, 2, "a", "b", "c", 3])); // [1, 2, 3]

// rewrite the function above as function expression

const onlyNumbersExpression = function (array) {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arrayResult.push(array[i]);
    }
  }

  return arrayResult;
};

console.log(onlyNumbersExpression([1, 2, "a", "b", "c", 3])); // [1, 2, 3]

// rewrite the function above as an arrow function expression

const onlyNumbersArrow = (array) => {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arrayResult.push(array[i]);
    }
  }

  return arrayResult;
};

console.log(onlyNumbersArrow([1, 2, "a", "b", "c", 3])); // [1, 2, 3]
