// task 1

const profileData = {
  firstName: "Tim",
  lastName: "Red",
  age: 28,
  city: "Barcelona",
  //   details: function () {
  //     return `${this.firstName} ${this.lastName} is ${this.age} year old and lives in ${this.city}`;
  //   },
};

profileData.details = function () {
  return `${this.firstName} ${this.lastName} is ${this.age} year old and lives in ${this.city}`;
};
console.log(profileData.details());

let adjectives = ["smart", "kind", "sweet", "small", "clear"];

function wordConverter(words, suffix) {
  return words.map((word) => word + suffix);
}

console.log(wordConverter(adjectives, "er"));

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];

function calculateHours(hours) {
  return hours.reduce((prev, hour) => prev + (hour.end - hour.start), 0);
}
console.log(calculateHours(hourTracking));

class Course {
  constructor(teacher, type, number) {
    this.teacher = teacher;
    this.type = type;
    this.number = number;
  }
  spaceNeeded() {
    return this.number * 2;
  }
  details() {
    return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
  }
}

const course1 = new Course("John", "web development", 22);

console.log(course1.spaceNeeded());
console.log(course1.details());

function validPin(pin) {
  // only numerical digits
  // !isNaN(pin)
  // parseInt(pin[0]) === NaN
  // 4 digits long
  if (isNaN(pin)) {
    return false;
  }
  if (pin.length !== 4) {
    return false;
  }
  // last digit even number
  if (parseInt(pin[pin.length - 1]) % 2 === 1) {
    return false;
  }
  // first digit different than last one
  if (pin[0] === pin[pin.length - 1]) {
    return false;
  }

  return true;
}

console.log(validPin("1234"));
console.log(validPin("1235"));
console.log(validPin("12345"));
console.log(validPin("2222"));
console.log(validPin("2224"));
console.log(validPin("12ww"));
console.log(validPin("aaaa"));
console.log(validPin("1a22"));

// +_()
// let alphabet = "abcdefghijklmnopqrstuvwxyz";

// isNaN("1234") -> isNaN(1234) -> false
// isNaN("abcd") -> isNaN(NaN) -> true
// isNaN("1abcd") -> isNaN(NaN) -> true
// isNaN("ab1cd") -> isNaN(NaN) -> true
// isNaN("abcd1") -> isNaN(NaN) -> true

function validPin2(pin) {
  if (
    !isNaN(pin) &&
    pin.length === 4 &&
    parseInt(pin[pin.length - 1] % 2) === 0 &&
    pin[0] !== pin[pin.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(validPin2("1234"));
console.log(validPin2("12345"));

function validPin3(pin) {
  const onlyNumbers = !isNaN(pin);
  const isLength4 = pin.length === 4;
  const isLastDigitEven = parseInt(pin[3] % 2) === 0;
  const areFirstAndLastDifferent = pin[0] !== pin[3];

  if (onlyNumbers && isLength4 && isLastDigitEven && areFirstAndLastDifferent) {
    return true;
  } else {
    return false;
  }
}

function validPin4(pin) {
  if (
    /^\d{4}$/.test(pin) &&
    pin[0] !== pin[pin.length - 1] &&
    pin[pin.length - 1] % 2 === 0
  ) {
    return true;
  }

  return false;
}
