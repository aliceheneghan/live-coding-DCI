/**
 * Fix the code below so that it prints the correct output
 * The function letterReplacer() takes 3 strings in input, and returns a new string 
 * which will be the first string we pass where every occurrence of "target" is 
 * replaced by "replaceWith"
 * 
 * - first parameter is a string that I want to modify
 * - second parameter is the letter in the string that I want to replace
 * - third parameter is the letter with which I want to substitute the letter 
 * in the second parameter
 * 
 * first parameter: "ooo"
 * second parameter: "o"
 * third parameter: "i"
 * expected output: "iii"
 * 
 * 
 * first parameter: "chair"
 * second parameter: "h"
 * third parameter: "l"
 * expected output: "clair"
*/

function letterReplacer(string, target, replaceWith) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === target) {
        newString += replaceWith;
      } else {
        newString += string[i];
      }
    }
    return newString;
  }
  
  console.log(letterReplacer("cat", "c", "b")); // bat
  console.log(letterReplacer("legend", "e", "3")); // l3g3nd
  console.log(letterReplacer("mouse", "m", "h")); // house