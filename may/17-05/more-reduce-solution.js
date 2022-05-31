const people = [
  {
    name: "Jim",
    birthday: "29/07/1988",
    graduationYear: 2013,
  },
  {
    name: "Kim",
    birthday: "19/07/1984",
    graduationYear: 2011,
  },
  {
    name: "Howard",
    birthday: "22/02/1989",
    graduationYear: 2012,
  },
  {
    name: "Saul",
    birthday: "12/05/1980",
    graduationYear: 2007,
  },
];

/**
 * map accepts 1 parameter:
 * - a callback function
 *
 * the callback function for map accepts up to 3 parameters:
 * - currentValue: a single item in the array we're using map on
 * - index: the index of the currentValue
 * - array: the whole array we're using map on
 *
 */

const graduatedAt = people.map((person) => {
  const personCopy = { ...person };
  const birthdayYear = parseInt(person.birthday.slice(-4));
  const graduatedAt = person.graduationYear - birthdayYear;
  personCopy.graduatedAt = graduatedAt;
  delete personCopy.birthday;
  delete personCopy.graduationYear;
  return personCopy;
});

console.log("people", people);
console.log("graduedAt", graduatedAt);

const graduatedAt2 = people.map((person) => {
  const personCopy = {
    name: person.name,
  };
  //   personCopy.name = person.name;
  const birthdayYear = parseInt(person.birthday.slice(-4));
  const graduatedAt = person.graduationYear - birthdayYear;
  personCopy.graduatedAt = graduatedAt;
  return personCopy;
});

console.log(graduatedAt2);

const graduatedAt3 = people.reduce((acc, person) => {
  //   const personCopy = {
  //     name: person.name,
  //   };
  const { birthday, graduationYear, ...personCopy } = person;
  const birthdayYear = parseInt(person.birthday.slice(-4));
  const graduatedAt = person.graduationYear - birthdayYear;
  personCopy.graduatedAt = graduatedAt;
  acc.push(personCopy);
  return acc;
}, []);

console.log(graduatedAt3);

const sortedGraduated = [...graduatedAt].sort(
  (personA, personB) => personA.graduatedAt - personB.graduatedAt
);

const youngestGraduate = sortedGraduated[0].name;
console.log("The person the graduated the youngest is:", youngestGraduate);

// finding a minimum using reduce
const youngestGraduatePerson = graduatedAt.reduce((result, person) => {
  if (
    result.graduatedAt === undefined ||
    person.graduatedAt < result.graduatedAt
  ) {
    result = person;
  }
  return result;
}, {});

console.log(youngestGraduatePerson.name);
// let's extract the year from a string
// let birthday = "12/05/1980";
// // method 1
// let year = parseInt(birthday.split("/")[2]);
// console.log(year);

// // method 1.5
// let [day1, month1, year1] = birthday.split("/");
// console.log(parseInt(day1), parseInt(month1), parseInt(year1));

// // method 2
// let year2 = parseInt(birthday.slice(-4));
// console.log(year2);

// // method 3
// let year3 = parseInt(birthday.slice(6));
// console.log(year3);

const hikes = [
  {
    day: "Monday",
    distance: 6.2,
  },
  {
    day: "Tuesday",
    distance: 3.2,
  },
  {
    day: "Friday",
    distance: 7.2,
  },
  {
    day: "Saturday",
    distance: 16.2,
  },
  {
    day: "Sunday",
    distance: 22.3,
  },
  {
    day: "Tuesday",
    distance: 4,
  },
  {
    day: "Sunday",
    distance: 18,
  },
];

const totalDistanceWeekends = hikes.reduce((result, currentDay) => {
  if (currentDay.day === "Saturday" || currentDay.day === "Sunday") {
    result += currentDay.distance;
  }
  return result;
}, 0);

console.log(totalDistanceWeekends);

// long solution

function onlyWeekend(day) {
  return day.day === "Saturday" || day.day === "Sunday";
}

function getDistance(day) {
  return day.distance;
}

function total(acc, item) {
  return acc + item;
}

const weekendDistance = hikes
  .filter(onlyWeekend)
  .map(getDistance)
  .reduce(total, 0);

console.log(weekendDistance);

const weekendHikes = hikes.filter(onlyWeekend);
console.log(weekendHikes);
const weekendDistances = weekendHikes.map(getDistance);
console.log(weekendDistances);
const weekendTotalDistance = weekendDistances.reduce(total, 0);
console.log(weekendTotalDistance);
