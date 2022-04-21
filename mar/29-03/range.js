/**
 * check if x is in the range between 10 and 20
 *
 * if it is, print yes
 * otherwise print no
 */

let x = 15;
let y = 50;

if (x >= 10 && x <= 20) {
  console.log("yes");
} else {
  console.log("no");
}

/**
 * check if one value between x and y is in the range between 10 and 20
 * 
 * - check if x is in the range between 10 and 20
 * - OR check if y is in the range between 10 and 20
 * 
 * print yes, if at least one of the 2 is true
 */

x = 65;
y = 50;

if (x >= 10 && x <= 20 || y >= 10 && y <= 20) {
  console.log("yes");
} else {
  console.log("no");
}