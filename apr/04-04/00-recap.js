let word = "hallo";

if (word.includes("a") && word.includes("o")) {
  console.log(`${word} contains the letters "a" and "o"`);
} else {
  console.log(`${word} does NOT contain the letters "a" and "o"`);
}

// something === somethingElse

const light = "blue";

switch (light) {
  case "green": // light === "green"
    console.log("you can go");
    break;
  case "yellow": // light === "yellow"
    console.log("you should stop");
    break;
  case "red": // light === "red"
    console.log("you cannot go");
    break;
  default: // if none of the above was true
    console.log("that's not a valid option");
}



const number = 2;

switch (number) {
  case 1:  // number === 1
    console.log("you selected option 1");
    break;
  case 2: // number === 2
    console.log("you selected option 2");
    break;
  case 3: // number === 3
    console.log("you selected option 3");
    break;
  case 3: // number === 3
    console.log("you selected option 3");
    break;
  default:
    console.log("that's not a valid option");
}



// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".

const percentageComplete = 50;
if (percentageComplete < 30) {
    console.log("still a long way to go")
} else if (percentageComplete > 30 && percentageComplete < 50) {
    console.log("...")
}


