/**
 * pop()
 * push()
 * slice()
 * splice()
 * shift()
 * concat()
 *
 */

const numbers1 = [1, 2, 3, 4, 5];

numbers1.push(99);

console.log(numbers1);

const person = {
  name: "Tim",
  introduce: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.introduce();

// console.log("Person object is " + person)
// console.log("Person object is ", person)
// console.log("Array into string is " + [1, 2, 3])
// console.log("Array into string is ", [1, 2, 3])

/**
 * map()
 *
 *
 */

let numbers = [1, 2, 3, 4, 5];

function double(element) {
  return element * 2;
}

function square(element) {
  return element ** 2;
}
// map(numbers, double)
console.log(numbers.map(double));
const squaredNumbers = numbers.map(square);
console.log("squared numbers", squaredNumbers);
console.log("original numbers", numbers);

let square2 = (number) => number ** 2;
let square3 = (number) => {
  return number ** 2;
};
// these 2 are the same
console.log(
  numbers.map((number) => {
    return number ** 2;
  })
);
console.log(numbers.map((number) => number ** 2));

let prices = [200, 100, 10, 15, 290, 12, 50];

// create a function goes through the prices array and if the price is bigger than 50, it divides it half

function halfPrice(price) {
  if (price > 50) {
    return price / 2;
  } else {
    return price;
  }
}
const halfPrice2 = (price) => {
  if (price > 50) {
    return price / 2;
  } else {
    return price;
  }
};

console.log(prices.map(halfPrice));

console.log(
  prices.map((price) => {
    if (price > 50) {
      return price / 2;
    } else {
      return price;
    }
  })
);

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

// create a callback function that adds a description property to every song
// the description should be: titleOfTheSong by artistName
// the orignal array should not be modified

const addDescriptionToSong = (song) => {
  let copySong = {...song};
  copySong.description = copySong.title + " by " + copySong.artist;
  return copySong;
};

// const copySongs = [...songs];
const songsWithDescription = songs.map(addDescriptionToSong);

console.log(songsWithDescription);
console.log("original songs", songs);