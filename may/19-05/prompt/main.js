const prompt = require("prompt-sync")({ sigint: true });

function main() {
  console.log("Welcome to the game!");
  play();
}

function getNumber() {
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

function getGuess() {
  const guess = prompt("Guess the random number: ");
  return parseInt(guess);
}
function play() {
  let numberToGuess = getNumber();
  while (true) {
    const guess = getGuess();
    if (guess === numberToGuess) {
      console.log("congratulations");
      const playAgain = prompt("Play again? Y/N ");
      if (playAgain.toLowerCase() === "y") {
        main();
      } else {
        console.log("thanks for playing");
        return;
      }
    } else {
      console.clear();
      console.log(`Your attemp was: ${guess}`);
      console.log("Wrong, try again.\n");
    }
  }
}

main();
