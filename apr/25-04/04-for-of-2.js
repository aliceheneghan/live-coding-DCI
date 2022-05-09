const students = [
  {
    name: "Martha",
    age: 23,
    averageResults: 8,
  },
  {
    name: "Steven",
    age: 28,
    averageResults: 9,
  },
  {
    name: "Francis",
    age: 32,
    averageResults: 5,
  },
  {
    name: "Mark",
    age: 21,
    averageResults: 10,
  },
];

for (let eachStudent of students) {
  console.log(eachStudent);
}

// show only students that are older than 25
console.log("\n\nStudents older than 25:\n");
for (let eachStudent of students) {
  if (eachStudent.age > 25) {
    console.log(eachStudent);
  }
}

// only students with an average above 7
console.log("\n\nStudents with average above 7:\n");

for (let eachStudent of students) {
  if (eachStudent.averageResults > 7) {
    console.log(eachStudent);
  }
}

// students whose name starts with letter "m"

console.log("\n\nStudents with names that start with letter m:\n");
for (let eachStudent of students) {
  if (eachStudent.name.toLowerCase().startsWith("m")) {
    console.log(eachStudent);
  }
}

function studentsByAverage(array, average) {
  const result = [];
  for (let eachStudent of array) {
    if (eachStudent.averageResults > average) {
      result.push(eachStudent);
    }
  }
  return result;
}

console.log(studentsByAverage(students, 7));
console.log(studentsByAverage(students, 9));
console.log(studentsByAverage(students, 8));