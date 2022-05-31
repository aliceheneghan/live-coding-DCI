function makeCoinFlipper() {
  let score = 0;
  function flipCoin(guess) {
    const coinSides = ["head", "tail"];
    // pick a random number between 0 and 1
    const randomNumber = Math.floor(Math.random() * 2);
    // use the random number to pick "head" or "tail"
    const coinOutcome = coinSides[randomNumber];
    if (guess === coinOutcome) {
      score++;
      return `You won! Current score is: ${score}`;
    } else {
      return `Try again!`;
    }
  }
  return flipCoin;
}

const game1 = makeCoinFlipper();

console.log(game1("head"));
console.log(game1("head"));
console.log(game1("head"));
console.log(game1("tail"));
console.log(game1("tail"));
console.log(game1("head"));
console.log(game1("tail"));
console.log(game1("head"));
console.log(game1("tail"));