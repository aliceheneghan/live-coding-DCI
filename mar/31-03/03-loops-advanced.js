let string = "hello";

console.log(string);
console.log(string.length);
// console.log(string[1]);
// console.log(string[2]);
// console.log(string[3]);
// console.log(string[4]);
// console.log(string[5]);
// console.log(string[6]);

// print every letter of the string to the console, one letter at a time

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

// for (let i = 0; i < 5; i++) {
//   console.log(string[i]);
// }

let animals = ["cat", "dog", "mouse", "dinosaur", "bird"];

// let's print all the animals using a for loop
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log("------");
// let's print all the animals using a for loop, in reversed order
for (let i = animals.length - 1; i >= 0; i--) {
  console.log(animals[i]);
}

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

const songs = [
  "Yesterday",
  "Hit me baby one more time",
  "Personal Jesus",
  "One",
  "Something more",
  "You are not alone",
  "Lasciatemi cantare",
  "Bella ciao",
];

/**
 * Track 1 of 6: Yesterday
 * Track 2 of 6: Hit me baby one more time
 * Track 3 of 6: Personal Jesus
 */
console.log("Tracklist:");
for (let i = 0; i < songs.length; i++) {
  //   console.log(i + 1, songs.length, songs[i]);
  console.log(`Track ${i + 1} of ${songs.length}: ${songs[i]}`);
}

// let's print only songs with an even index in the array
for (let i = 0; i < songs.length; i++) {
  if (i % 2 === 0) {
    console.log(`Track ${i + 1} of ${songs.length}: ${songs[i]}`);
  }
}

// only songs with titles longer than 10 letters
console.log("\ntracklist long titles:")
for (let i = 0; i < songs.length; i++) {
  if (songs[i].length > 10) {
    console.log(`Track ${i + 1} of ${songs.length}: ${songs[i]}`);
  }
}

// songs that start with "y", case insensitive
console.log("\ntracklist long titles:")
for (let i = 0; i < songs.length; i++) {
    // songs[i] => current song
  if (songs[i].toLowerCase()[0] === "y") {
    console.log(`Track ${i + 1} of ${songs.length}: ${songs[i]}`);
  }
}

// mYemAIlAdDress@GMAIL.cOM => myemailaddress@gmail.com

  // songs that include the word more
  // .includes()
console.log("\ntracklist including 'more':")
for (let i = 0; i < songs.length; i++) {
    // songs[i] => current song
  if (songs[i].includes("more")) {
    console.log(`track ${i + 1} of ${songs.length}: ${songs[i]}`);
  }
}

console.log("\ntracklist including the letter 'y':")
for (let i = 0; i < songs.length; i++) {
    // songs[i] => current song
  if (songs[i].toLowerCase().includes("y")) {
    console.log(`track ${i + 1} of ${songs.length}: ${songs[i]}`);
  }
}

// .startsWith()