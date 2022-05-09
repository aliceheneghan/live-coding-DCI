const animals = [
  "cat",
  "dog",
  "duck",
  "bird",
  "cougar",
  "giraffe",
  "bee",
  "bruno",
  "dove",
  "koala",
];

console.log("regular for loop:\n");

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log("\nfor...of loop:\n");

for (let animal of animals) {
  console.log(animal);
}

// print to the console animals that start with "b"

console.log("\n\nAnimals with 'b':\n\n");
for (let i = 0; i < animals.length; i++) {
  if (animals[i][0] === "b") {
    console.log(animals[i]);
  }
}

console.log("\n\nfor...of: Animals with 'b':\n\n");
const animalsWithB = [];
for (let animal of animals) {
  if (animal[0] === "b") {
    animalsWithB.push(animal);
  }
}

console.log(animalsWithB);

let string = "hello";

for (const character of string) {
  console.log(character);
}

if (animals[0][0] === "b") {
  console.log(animals[0]);
}

if (animals[1][0] === "b") {
  console.log(animals[1]);
}
if (animals[2][0] === "b") {
  console.log(animals[2]);
}