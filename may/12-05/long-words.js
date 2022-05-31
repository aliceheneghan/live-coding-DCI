/**
 * Write a function called onlyLongWords() that takes a string in input and returns
 * a new string with only the words that are longer than or equal to 5
 *
 */
// ```plaintext
// onlyLongWords("Welcome to Wikipedia the free encyclopedia that anyone can edit"); // "Welcome Wikipedia encyclopedia anyone"
// onlyLongWords("The cat is on the table"); // "table"
// onlyLongWords("not many long ones here"); // ""
// ```

let string = "Welcome to Wikipedia the free encyclopedia that anyone can edit";

function onlyLongWords(string) {
  const stringToArray = string.split(" ");
  const wordsLongerThan5 = stringToArray.filter((word) => word.length >= 5);
  return wordsLongerThan5.join(" ");
}

console.log(
  onlyLongWords(
    "Welcome to Wikipedia the free encyclopedia that anyone can edit"
  )
); // "Welcome Wikipedia encyclopedia anyone"
console.log(onlyLongWords("The cat is on the table")); // "table"
let result = onlyLongWords("not many long ones here");
if (result !== "") {
  console.log("last example", result); // ""
}
