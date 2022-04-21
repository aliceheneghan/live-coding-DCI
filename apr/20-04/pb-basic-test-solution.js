/**
 * 1. Los or New?
Create a function named "nameOfCity". 
If a passed string begins with "Los" or "New", then return the full string.
 If not, return "The city name does not begin with Los or New".
  The function should be case insensitive.
 */

// slice()
// substr()
// startsWith()

function nameOfCity(string) {
  const lowerCaseString = string.toLowerCase();
  const first3Letters = lowerCaseString.slice(0, 3);
  if (first3Letters === "los" || first3Letters === "new") {
    return string;
  } else {
    return "The city name does not begin with Los or New";
  }
}

console.log(nameOfCity("New York"));
console.log(nameOfCity("newark"));
console.log(nameOfCity("Los Angeles"));
console.log(nameOfCity("London"));

function isDivisible(number) {
  if (number % 100 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(1));
console.log(isDivisible(100));
console.log(isDivisible(135));
console.log(isDivisible(10000));

function isRaining(raining) {
  return raining
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
}

console.log(isRaining(true));
console.log(isRaining(false));


//
function geometricalSequence() {
    let result = [];
    for (let i = 0; i <= 8; i++) {
        // result.push(2 ** i);
        result.push(Math.pow(2, i));
    }
    return result.join(" ");
}

console.log(geometricalSequence());

function geometricalSequence2() {
    let result = [];
    for (let i = 1; i <= 256; i *= 2) {
        result.push(i);
    }
    return result.join(" ");
}

console.log(geometricalSequence2());


function multiplesOfThree() {
    let result = [];
    for (let i = 1; i <= 5; i++) {
        result.push(i * 3);
    } 
    return result.join(" ");
}



console.log(multiplesOfThree());

function multiplesOfThree2(number) {
    let result = [];
    for (let i = 1; i <= number; i++) {
        result.push(i * 3);
    } 
    return result.join(" ");
}



console.log(multiplesOfThree2(10));
console.log(multiplesOfThree2(4));


function powerOf(number) {
    // return number ** number;
    return Math.pow(number, number);
}


console.log(powerOf(3)); 
console.log(powerOf(4));


function vowelCount(string) {
    let counter = 0;
    const vowels = "aeiou";
    const lowerCaseString = string.toLowerCase();
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (vowels.includes(lowerCaseString[i])) {
            counter++;
        }
    }

    return counter;
}

console.log(vowelCount("hello"))
console.log(vowelCount("test"))
console.log(vowelCount("fbw"))
console.log(vowelCount("AEIOU"))
console.log(vowelCount("aeiouAEIOU"))
console.log(vowelCount(""))