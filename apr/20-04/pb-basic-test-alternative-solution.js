// Conditional Algorithms

//Name of City
function nameOfCity(city) {
  const firstThreeChars = city.substring(0, 3).toLowerCase();
  if (firstThreeChars === "new" || firstThreeChars === "los") {
    return true;
  } else {
    return false;
  }
}
console.log(nameOfCity("Valletta"));

// Is Divisible
function isDivisible(integer) {
  if (0) {
    return false;
  } else if (integer % 100 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(1000));

// Ternary Operator
function isRaining(raining) {
  return raining
    ? "wet day - you need an umbrella!"
    : "dry day - leave your umbrella at home!";
}

console.log(isRaining(true));

// Loop Sequence

function geometricalSequence() {
  let sequence = "";
  for (let i = 1; i <= 256; ) {
    // console.log(sequence);
    if (i === 1) {
      sequence += i;
      i += i;
      continue;
    }
    sequence += ` ${i}`;
    i += i;
  }
  return sequence;
}

console.log(geometricalSequence());

// Multiples of Three
function multiplesOfThree() {
  let multiples = "";
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
      multiples += `${i} `;
    }
  }
  return multiples.trim();
}

console.log(multiplesOfThree());

// powerOf
function powerOf(integer) {
  return Math.pow(integer, integer);
}

console.log(powerOf(5));

// Problem Solving: Number of vowels
function vowelCount(string) {
  const vowels = "aeiou";
  const stringLowerCase = string.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (stringLowerCase[i] === vowels[j]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}

console.log(vowelCount("test"));
