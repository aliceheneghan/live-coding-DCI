let x = 0;

for (let i = 0; i <= 10; i++) {
  console.log(x);
}

// let's calculate the sum of the first 10 numbers

let sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
console.log(sum);

let sumLoop = 1000;
for (let i = 0; i <= 5; i++) {
   // sumLoop = sumLoop + i; 
   sumLoop += i; 
}

console.log("sumLoop is", sumLoop);


let string = "";
for (let i = 0; i <= 5; i++) {
    string += "H" + i;
    // console.log("H" + i);
}

console.log(string);