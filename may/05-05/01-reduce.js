let numbers = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  console.log("previous value", total);
  console.log("current value", numbers[i]);
  total = total + numbers[i];
  console.log("new value", total);
  console.log("-------------");
}
console.log(total);

// function sum(previousValue, currentValue) {
//   console.log("previousValue", previousValue);
//   console.log("currentValue", currentValue);
//   let newValue = previousValue + currentValue;
//   console.log("new value", newValue);
//   console.log("-------------");
//   return newValue;
// }


function sum(previousValue, currentValue) {
  return previousValue + currentValue;
}

let totalReduce = numbers.reduce(sum, 0);

let totalReduce2 = numbers.reduce((a, b) => a + b , 0);
console.log("totalReduce", totalReduce);
console.log("totalReduce2", totalReduce2);


const string = "hello world";

// use reduce() to get a string with only letters in even positions:
// -> hlowrd

let stringArray = [...string];
console.log(stringArray);

function onlyEvenLetters(previousValue, currentValue, index) {
    if(index % 2 === 0) {
        // let's add the current value to the previous one
        return previousValue + currentValue;
    } else {
        // we need to keep the previous value as it is, let's just return it
        return previousValue;
    } 
}
const evenLetters = stringArray.reduce(onlyEvenLetters, "");
console.log(evenLetters);