let jennaAge = 28;
let jimAge = 33;

// if (jennaAge > jimAge) {
//   console.log("Jenna is older than Jim");
// } else {
//   console.log("Jim is older than Jenna");
// }

// if (jennaAge > jimAge) {
//   console.log("Jenna is older than Jim");
// } else if (jimAge > jennaAge) {
//   console.log("Jim is older than Jenna");
// } else {
//   console.log("Jim and Jenna have the same age");
// }

if (jennaAge > jimAge) {
  console.log("Jenna is older than Jim");
} else if (jimAge > jennaAge) {
  console.log("Jim is older than Jenna");
} else if (jimAge === jennaAge) {
  console.log("Jim and Jenna have the same age");
}

/**
 * You have to go to the supermarket and buy something for dinner
 *
 * If they have burgers, you have to buy burgers
 * if burgers are not available, you have to buy tomato soup
 * if also tomato soup is not available, you have to buy beans
 * if none of the options above are available, buy some pasta
 *
 */

let areBurgersAvailable = true;
let isTomatoSoupAvailable = false;
let areBeansAvailable = false;

if (areBurgersAvailable) {
  console.log("buy burgers");
} else if (isTomatoSoupAvailable) {
  console.log("buy tomato soup");
} else if (areBeansAvailable) {
  console.log("buy beans");
} else {
  console.log("buy pasta or any other kind of food");
}

/**
 * We have a variable called month that has values from 1 to 12
 * 1 is January
 * 2 is February
 * ...
 * 12 is December
 *
 * We want to write an if...else statement that depending on the month, tells us
 * the name of the season
 *
 * 12, 1, 2: Winter
 * 3, 4, 5: Spring
 * 6, 7, 8: Summer
 * 9, 10, 11: Autumn
 *
 */

let month = 3;

if ((month > 0 && month < 3) || month === 12) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Autumn");
} else {
  console.log(`${month} is not a month`);
}
