// function randomGreet(name) {
//   const greetings = ["hola", "ciao", "hello", "hallo", "hey"];
//   const randomIndex = Math.floor(Math.random() * greetings.length);
//   const greeting = greetings[randomIndex];
//   const message = `${greeting} ${name}`;

//   return message;
// }

// const randomMessage = randomGreet("Jacob");
// console.log(randomMessage);

// remove all the duplicate animals
let animals = ["cat", "dog", "cat", "elephant"];
let noDuplicates = [];

for (let i = 0; i < animals.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < noDuplicates.length; j++) {
    if (animals[i] === noDuplicates[j]) {
      isDuplicate = true;
    }
  }
  if (!isDuplicate) {
    noDuplicates.push(animals[i]);
  }
}

console.log(noDuplicates);

let animalsNoDuplicates = [];

for (i = 0; i < animals.length; i++) {
  for (j = i + 1; j < animals.length; j++) {
    if (animals[i] === animals[j]) {
      animals.splice(j, 1);
    }
  }
}

animalsNoDuplicates = animals;