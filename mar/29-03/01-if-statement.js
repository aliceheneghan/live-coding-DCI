let hour = 12;

if (hour >= 12) {
  console.log("time for the break");
}

console.log("after the if");

// let day = "Tuesday";

// if (day === "Saturday" || day === "Sunday") {
//   console.log("it's the weekend!");
// } else {
//   console.log("there are classes");
// }

day = "Tuesday";
if (day === "Monday") {
  console.log("ugh, I want to sleep");
} else if (day === "Tuesday" || day === "Wednesday") {
  console.log("I can make it");
} else if (day === "Thursday") {
  console.log("oh no, tomorrow is language class");
} else if (day === "Friday") {
  console.log("language class, but almost the weekend");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("WEEKEND!");
} else {
  console.log(`${day} is not a real day`);
}
