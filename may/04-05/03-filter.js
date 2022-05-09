const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// only even numbers
function isEven(n) {
  return n % 2 === 0;
}

console.log(numbers.filter(isEven));
console.log(numbers.filter((n) => n % 2 === 0));
console.log(numbers.filter((n) => n % 3 === 0));
console.log(numbers.filter((n) => n % 5 === 0));

console.log(numbers);

const animals = [
  "giraffe",
  "koala",
  "rhino",
  "elephant",
  "monkey",
  "cat",
  "mouse",
];

// an array of strings longer than 5
console.log(animals.filter((string) => string.length > 5));
console.log(animals.filter((string) => string.length < 5));
console.log(animals.filter((string) => string.length <= 5));

const songs = [
  {
    title: "Should I stay or Should I go",
    artist: "The Clash",
  },
  {
    title: "Toxic",
    artist: "Britney Spears",
  },
  {
    title: "Faster",
    artist: "Janelle Monáe",
  },
  {
    title: "Surgeon",
    artist: "St. Vincent",
  },
  {
    title: "I Fought the Law",
    artist: "The Clash",
  },
  {
    title: "Pedestrian at Best",
    artist: "Courtney Barnett",
  },
  {
    title: "Vordhosbn",
    artist: "Aphex Twin",
  },
];

// get only songs with titles shorter than 8

console.log(songs.filter((song) => song.title.length < 8));
console.log(songs.filter((song) => song.title.length < 3)); // []

// keep only songs with even index in the array 0, 2, 4...
console.log(songs.filter((song, index) => index % 2 === 0)); 

// keep only songs with odd index in the array 0, 2, 4...
console.log(songs.filter((song, index) => index % 2 === 1));
// keep only songs with odd index in the array 0, 2, 4...
console.log(songs.filter((song, index) => index % 2 !== 0));

console.log(songs.filter((song) => true));
console.log(songs.filter((song) => false));