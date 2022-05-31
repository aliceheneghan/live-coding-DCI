const people = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 22,
  },
  {
    name: "Paris Hilton",
    age: 51,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 200,
  },
];

const partyArray = people.filter((person) => person.age >= 18);
console.log(partyArray);

const partyArrayNames = partyArray.map((person) => person.name);

console.log(partyArrayNames);

let partyMessage = `The people that can join the party are: ${partyArrayNames.join(
  ", "
)}`;
// let partyMessage2 = `The people that can join the party are: ${partyArrayNames.join(
//   ", "
// )}`;

console.log(partyMessage);
// "The people that can join the party are: Angelina Jolie, Bob Zirroll, Eric Jones"

let partyMessageReduce = people.reduce((prev, person, index, array) => {
  if (person.age >= 18) {
    if (index === array.length - 1) {
      prev = prev + person.name;
    } else {
      prev = prev + person.name + ", ";
    }
  }
  return prev;
}, "The people that can join the party are: ");

console.log(partyMessageReduce);

const partyArrayMessage2 = partyArray.reduce((prev, person, index, array) => {
  if (index === array.length - 1) {
    prev = prev + " and " + person.name;
  } else if (index === 0) {
    prev = prev + person.name;
  } else {
    prev = prev + ", " + person.name;
  }

  return prev;
}, "The people that can join the party are: ");

console.log(partyArrayMessage2);
