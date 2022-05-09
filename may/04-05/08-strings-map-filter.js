let string = "hello world";


let arrayString = string.split("");
let arrayString2 = [...string];
console.log(arrayString);
console.log(arrayString2);
// use filter to get a new string without vowels

function noVowels(character) {
    const vowels = "aeiou";
    return ! vowels.includes(character);
}
function onlyVowels(character) {
    const vowels = "aeiou";
    return  vowels.includes(character);
}
console.log(arrayString.filter(noVowels).join(""));
console.log(string.split("").filter(noVowels).join(""));
console.log([...string].filter(noVowels).join(""));
console.log([...string].filter(onlyVowels).join(""));