const people = [
  {
    name: "Tim",
    age: 18,
  },
  {
    name: "Jules",
    age: 23,
  },
  {
    name: "Annie",
    age: 5,
  },
  {
    name: "Rob",
    age: 8,
  },
];

// use the reduce method to calculate the sum of all ages in the array

function sumAge(prev, curr) {
  return prev + curr.age;
}

let ageTotal = people.reduce(sumAge, 0);

console.log("age total", ageTotal);

function peopleObj(prev, curr) {
  prev[curr.name] = curr.age;
  return prev;
}
// use the reduce() method to get an object with names as key and age as value

let nameAgeObject = people.reduce(peopleObj, {});
console.log("name age object", nameAgeObject);

