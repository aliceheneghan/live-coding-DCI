// solution with array and string methods

let word = "table";
let wordReverse = word.split("").reverse().join("");
// let isPalindrome = word === wordReverse;
// console.log(`Is ${word} a palindrome? ${isPalindrome ? "yes" : "no"}`);

let string = "kayak";

let isPalindrome = true;
for (let i = 0; i < Math.floor(string.length / 2); i++) {
    let rightIndex = string.length - 1 - i;
    console.log(string[i], string[rightIndex]);
//   if (string[i] !== string[rightIndex]) {
//       isPalindrome = false;
//   } 
}

console.log(`Is ${string} a palindrome? ${isPalindrome ? "yes" : "no"}`);