/**
 * Task 01
 *
 * You are collecting reservations for a trip by bus to the mountains.
 *
 * You have 2 arrays:
 * - the array "people" contains the names of the people that want to reserve
 * a seat on the bus
 * - the array "seatsAvailable" contains the remaining available seats
 *
 * Your first task is to estabilish if there are enough available seats for everyone
 *
 * 1. get the number of people interested in the trip and assign it to a variable
 * called "numberOfPeople"
 * 2. get the total of available seats and assign it to a variable called "numberOfSeatsAvailable"
 * 3. print a message to the console saying:
 *      - "there are X people interested in the trip and Y available seats"
 *      - replace X and Y with the correct values
 * 4. compare the 2 variables and print a message like:
 *      - "there are enough available seats for everyone"
 *      - "there are not enough available seats for everyone"
 *
 * Expected output with the data provided:
 *
 * - "there are 15 people interested in the trip and 9 available seats"
 * - "there are not enough available seats for everyone"
 */

const people = [
  "Dawn Greenfield",
  "Wait Lindegard",
  "Lucia Timoney",
  "Rock Thom",
  "Courtney Haryngton",
  "Afton Meugens",
  "Mata Lydiard",
  "Gene Castanie",
  "Owen Satcher",
  "Langston Benne",
  "Derk Pavlishchev",
  "Guinna Shovelbottom",
  "Clemmie Skeermor",
  "Rich Worley",
  "Isa Featherstonhaugh",
];

const seatsAvailable = ["A1", "A2", "B1", "C1", "C2", "D2", "E1", "F1", "F2"];

const numberOfPeople = people.length;
const numberOfSeatsAvailable = seatsAvailable.length;

console.log(
  `there are ${numberOfPeople} people interested in the trip and ${numberOfSeatsAvailable} available seats`
);

console.log(
  numberOfSeatsAvailable >= numberOfPeople
    ? "there are enough available seats for everyone"
    : "there are NOT enough available seats for everyone"
);
/**
 * Task 02
 *
 * You need to communicate to everyone whether they can participate to the trip or not.
 *
 * You need to:
 * - update the list of people leaving only the ones that can join the trip
 * - create a second list called `peopleRejected` containing only the people that
 * can not join the trip, due to lack of seats
 *
 * Your task is:
 *
 * 1. calculate the difference between the number of people and the number of
 * available seats, to know how many people won't be able to join. Assign this
 * value to a variable called "numberOfPeopleRejected"
 * 2. using the variable you just created, remove the number of people that
 * can't join the trip from the original "people" array and assign this to a
 * new array
 * 3. assign the right values to the variables `peopleConfirmedList` and `peopleRejectedList`
 *      - they should contain a string with all the names in the 2 respective arrays, with each name
 *      separated by the `\n` (new line) special character
 *
 */

// we're calculating how many people won't be able to join the trip
const numberOfPeopleRejected = numberOfPeople - numberOfSeatsAvailable; // 9 - 9
console.log(numberOfPeopleRejected); // 6

const peopleRejected = people.splice(numberOfSeatsAvailable);
// const peopleRejected = people.splice(numberOfSeatsAvailable, numberOfPeopleRejected);
// const peopleRejected = people.splice(-numberOfPeopleRejected, numberOfPeopleRejected);
console.log("people", people);
console.log("people rejected", peopleRejected);
// these variables temporarily point to empty strings. Assign the right values to them
const peopleConfirmedList = people.join("\n");
const peopleRejectedList = peopleRejected.join("\n");

// don't modify the 3 console.log() below
console.log("\n"); // this simply prints an empty line to get a better output

console.log(
  `The list of people that can go on the trip is:\n${peopleConfirmedList}\n`
);
console.log(
  `The list of people that can not go on the trip is:\n${peopleRejectedList}\n`
);

/**
 * Task 3
 *
 * There is an extra seat available which you want to assign to a random person
 * from the list of rejected people
 *
 * Your task is to:
 *
 * 1. randomly choose a name from the array `peopleRejected` and assign it to
 * a variable called `luckyWinner`
 * 2. print a message to the console saying: `PERSON will be able to join the trip`
 *    - replace PERSON with the name of the chosen person
 */

let randomIndex1 = Math.floor(Math.random() * numberOfPeopleRejected);

// const luckyWinner = peopleRejected[randomIndex]
// const luckyWinner1 = peopleRejected.splice(randomIndex1, 1);

// let randomIndex2 = Math.floor(Math.random() * peopleRejected.length);
// const luckyWinner2 = peopleRejected.splice(randomIndex2, 1);

// let randomIndex3 = Math.floor(Math.random() * peopleRejected.length);
// const luckyWinner3 = peopleRejected.splice(randomIndex3, 1);

// console.log(luckyWinner1[0], luckyWinner2[0], luckyWinner3[0]);

function getRandomPerson(people) {
  let randomIndex = Math.floor(Math.random() * people.length);
  const luckyWinner = people.splice(randomIndex, 1);
  return luckyWinner[0];
}

let luckyWinner1 = getRandomPerson(peopleRejected); 
let luckyWinner2 = getRandomPerson(peopleRejected); 
let luckyWinner3 = getRandomPerson(peopleRejected); 

console.log(luckyWinner1, luckyWinner2, luckyWinner3);


console.log(2);