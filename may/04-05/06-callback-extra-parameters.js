let numbers = [1, 2, 3, 4, 5];

function double(n) {
  return n * 2;
}

// function triple(n, index, array) {
//     console.log("multiplier", multiplier);
//     return n * multiplier;
// }

// console.log(numbers.map(double));
// console.log(numbers.map(triple));

function multiplyArrayBy(array, multiplier) {
  let result = array.map((n) => n * multiplier);
  return result;
}

console.log(multiplyArrayBy(numbers, 2));
console.log(multiplyArrayBy(numbers, 3));
console.log(multiplyArrayBy(numbers, 4));

let mapResult = numbers.map((n) => n / 2);
console.log(mapResult);

let property = "background-color";

console.log(property.split("-"));



console.log(numberAdd("iam2015bar6cat1")); //15
console.log(numberAdd("In 2015, I want to know how much does iPhone 6+ cost"));
console.log(numberAdd("In  I want to know how much does iPhone + cost?"));

function camelize(str) {
  //write your code here
  let strArray = str.split("-");
  let result = [];
  for (let i = 0; i < strArray.length; i++) {
    let camilizedWordArray = "";
    if (strArray[i] !== "") {
      camilizedWordArray = strArray[i][0].toUpperCase() + strArray[i].slice(1);
    } else {
    }

    result.push(camilizedWordArray);
  }
  console.log(result);
  return (
    result[0][0].toLowerCase() + result[0].slice(1) + result.slice(1).join("")
  ); //+ result[0].slice(1) + result.slice(0);
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("bla-bla-bla-bla-bla-bla"));
console.log(camelize("-webkit-transition"));
