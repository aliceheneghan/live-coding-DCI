/**
 * Parse
 * 
 * "922fdslafj" => 922
 */

let jakeHeight = "172cm";
let mariaHeight = "192cm";

let numberJakeHeight = parseInt(jakeHeight);
let numberMariaHeight = parseInt(mariaHeight);
// calculate the difference in cm between Jake and Maria

console.log(numberMariaHeight - numberJakeHeight);


console.log("parsed jake height", parseInt(jakeHeight))
console.log("parsed maria height", parseInt(mariaHeight))


let money = "5.52€";
console.log(parseInt(money)); // 5
console.log(parseFloat(money)); // 5.52

// NaN -> Not A Number
console.log(parseInt("abc123abc")); // NaN
console.log(parseInt("abcdef")); // NaN
console.log(parseInt("123abcdef456zyw8910")); // 123

console.log(parseInt("123")); // 123