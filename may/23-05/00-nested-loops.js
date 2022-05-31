// Given an array of numbers, print the numbers from 1 to 6 to the console
/* 
Expected output:
1
2
3
4
5
6
*/
let numbers1 = [1, 2, 3, 4, 5, 6];

console.log("Exercise 1");
console.log("----------");

for (let number of numbers1) {
  console.log(number);
}

// Given nested arrays, print the numbers from 1 to 6
/* 
Expected output:
1
2
3
4
5
6

Hint: in this and the other exercises you can use the method Array.isArray() to check
if a value is an array or not
*/

console.log("Exercise 2");
console.log("----------");
let numbers2 = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8, 9, 10],
  [11, 12, 13],
];

for (let nestedItem of numbers2) {
  for (let number of nestedItem) {
    console.log(number);
  }
}

console.log("----------");

// Given nested arrays, print the numbers from 1 to 6 like in the examples above
let numbers3 = [1, 2, 3, [4, 5, 6]];

// Array.isArray()
for (let item of numbers3) {
  if (Array.isArray(item)) {
    for (let number of item) {
      console.log(number);
    }
  } else {
    console.log(item);
  }
}

console.log("Exercise 3");
console.log("----------");

// Given nested arrays, print the numbers from 1 to 9
let numbers4 = [1, 2, 3, [4, 5, 6], 7, 8, 9];
console.log("Exercise 4");
console.log("----------");
for (let item of numbers4) {
  if (Array.isArray(item)) {
    for (let number of item) {
      console.log(number);
    }
  } else {
    console.log(item);
  }
}
// Given nested arrays, print the numbers from 1 to 15
let numbers5 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15]]]]];

console.log("Exercise 5");
console.log("----------");

for (let item of numbers5) {
  if (Array.isArray(item)) {
    for (let nestedItem1 of item) {
      if (Array.isArray(nestedItem1)) {
        for (let nestedItem2 of nestedItem1) {
          if (Array.isArray(nestedItem2)) {
            for (let nestedItem3 of nestedItem2) {
              if (Array.isArray(nestedItem3)) {
                for (let nestedItem4 of nestedItem3) {
                  console.log(nestedItem4);
                }
              } else {
                console.log(nestedItem3);
              }
            }
          } else {
            console.log(nestedItem2);
          }
        }
      } else {
        console.log(nestedItem1);
      }
    }
  } else {
    console.log(item);
  }
}
