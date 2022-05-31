function longestWord(string) {
  const stringArray = string.split(" ");
  const sortedWords = stringArray.sort((a, b) => b.length - a.length);
  const maxLength = sortedWords[0].length;
  const result = sortedWords.filter((w) => w.length === maxLength);
  return result;
  //   return result.length > 1 ? result : result[0];
//   if (result.length > 1) {
//     return result.sort((a, b) => {
//       if (a.toLowerCase() < b.toLowerCase()) {
//         return -1;
//       } else if (a.toLowerCase() > b.toLowerCase()) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//   } else {
//     return result[0];
//   }
}

console.log(longestWord("Hi there my name is Brad")); // there
console.log(longestWord("My name is Brad")); // ["name", "Brad"]

function longestWordArrayOrString(string) {
    const result = longestWord(string);
    return result.length > 1 ? result : result[0];
}


console.log(longestWordArrayOrString("Hi there my name is Brad")); // there
console.log(longestWordArrayOrString("My name is Brad")); // ["name", "Brad"]