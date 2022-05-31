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

const graduationAge = people.map((person) => {
  const personCopy = {};
  personCopy.name = person.name;
  const birthdayYear = parseInt(person.birthday.split("/")[2]);
  personCopy.graduatedAt = person.graduationYear - birthdayYear;
  return personCopy;
});

console.log(graduationAge);

const sorted = [...graduationAge].sort((a, b) => a.graduatedAt - b.graduatedAt);
const youngest = sorted[0].name;

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

const weekendDistance = hikes.reduce((prev, curr) => {
  if (curr.day === "Saturday" || curr.day === "Sunday") {
    prev += curr.distance;
  }
  return prev;
}, 0);

console.log(weekendDistance);
