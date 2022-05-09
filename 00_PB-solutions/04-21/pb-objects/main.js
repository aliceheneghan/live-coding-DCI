console.log("\nTask 1:\n--------\n")
const book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  pages: 193,
  publicationYear: 1979,
};

console.log(
  `The book "${book.title}" was written by ${book.author}. It's ${book.pages} pages long and was published in ${book.publicationYear}`
);

console.log("\nTask 2:\n--------\n")
const movie = {
  title: "Frances Ha",
  director: "Noah Baumbach",
  year: 2012,
  duration: 86,
};

movie.info = () =>
  `Title: ${movie.title}\nDirector: ${movie.director}\nYear: ${movie.year}\nDuration: ${movie.duration} minutes`;

console.log(movie.info());

console.log("\nTask 3:\n--------\n")
const box1 = {
  width: 20,
  height: 30,
  length: 15,
};

function boxVolume(box) {
  return box.width * box.height * box.length;
}

console.log(boxVolume(box1));


console.log("\nTask 4:\n--------\n")
const box2 = {
  width: 28,
  height: 44,
  length: 96,
};

const box3 = {
  width: 94,
  height: 23,
  length: 102,
};
function biggerVolume(box1, box2) {
  const box1Volume = boxVolume(box1);
  const box2Volume = boxVolume(box2);
  if (box1Volume > box2Volume) {
    return box1Volume;
  } else {
    return box2Volume;
  }
}

console.log(biggerVolume(box2, box3));
