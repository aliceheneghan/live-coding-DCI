const body = document.querySelector("body");

let currentValue = 0;
let tileMarked = -1; // variable ready to be used in case a tile has been clicked

let mistakes = 3; // countdown will begin at 3

function initialize() {
  setDefaultValues(true);
  // remove all tiles before creating new ones?
  const tiles = document.querySelectorAll(".tile"); // stores all tiles with this class
  tiles.forEach((tile) => tile.remove());
  for (let i = 0; i < 10; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile"); // this adds the class tile to the div
    tile.textContent = randomNumber(); // uses random number function to create random number for tile
    tile.id = i; // gives each tile an id using the iteration number
    body.appendChild(tile); // adds tile div to HTML document
    tile.onclick = handleTileCLick; // calls handleTileClick function when tile is clicked
  }
}
initialize();
function randomNumber() {
  return Math.ceil(Math.random() * 10); // Math.ceil instead of Math.floor to avoid 0
}

// cases:
// 1. user clicked a tile that is not marked
// 2. user clicked a tile that is marked
// 3. user clicked the same tile twice
// 4. user clicked a different tile
// 5. user clicked a tile that is not correct
// 6. user clicked the correct tile

function handleTileCLick(event) { // event comes from tile.onclick line 19
  const tile = document.getElementByID(event.target.id); // target is the element where the event has taken place, whole line stores target id in tile variable
  if (currentValue > 0) { // currentValue set to 0 in line 3, if it's more, there is a tile clicked
    if (tileMarked == event.target.id) { // event.target.id set to -1 on first click in line 
      tile.classList.remove("marked"); // marked class added on line 57, deselects tile
      setDefaultValues(); // resets tile values to default
    } else { // if the user clicked a different tile
        if (tile.textContent == currentValue) { // user clicked a matching tile
        removeTiles(tile.id, tileMarked);
        setDefaultValues(); // resets all other tiles?
      } else { // user clicked the wrong tile
        mistakes--; // deducts 1 from mistakes variable line 6
        updateMistakes();
        if (mistakes == 0) {
          lost(false);
        }
      }
    }
  } else { // first time a tile is clicked
    console.log("tilemarked", tileMarked, "tileid", tile.id);
    currentValue = event.target.textContent;
    tileMarked = event.target.id;
    tile.classList.add("marked"); // changes background color by adding new css class, line 31
  }
  if (!checkForMoreMoves()) setTimeout(() => lost(true), 100); // need to add some time to wait for the DOM to update
  console.log("clicked: event=", event.target.textContent);
  currentValue = event.target
}
function removeTiles(a, b) {
  const tileA = document.getElementById(a); // tile.id stored in 'a' on line 43
  const tileB = document.getElementById(b); // tileMarked value stored in b on line 43
  // if they match (questioned on line 42) remove them both
  tileA.remove();
  tileB.remove();
}

function setDefaultValues(newGame) {
  currentValue = 0;
  tileMarked = -1;
  if (newGame) mistakes = 3;
}

function checkPlayerWon() {
  const tiles = document.querySelectorAll(".tile");
  if (tiles.length == 0) {
    alert("you won!");
  }
}

function checkForMoreMoves() {
  console.log("checkForMoreMoves here");
  const tiles = [...document.querySelectorAll(".tile")];

  if (tiles.length < 2) return false;

  const cleanedTiles = tiles.reduce((arr, tile) => {
    console.log("in reduce", tile.textContent);
    console.log("in reduce", arr);

    if (!arr.includes(tile.textContent)) {
      arr.push(tile.textContent);
    }
    return arr;
  }, []);
  console.log("tiles: cleaned/original", cleanedTiles.length, tiles.length);

  if (cleanedTiles.length < tiles.length) return true;

  return false;
}

function lost(moves) {
  if (moves) { // if moves true
    alert("Oh no! no more moves! you can play again"); // alert is a preset method 
  } else { // mistakes set as false in line 49
    alert("Oh no! Too many mistakes! you can play again");
  }
  setDefaultValues(true); // resets all tiles
  updateMistakes();
  const footer = document.createElement("div"); // creates footer to house play again?
  footer.classList.add("footer");
  const button = document.createElement("button"); // creates button to relaunch game
  button.textContent = "Play again";
  button.onclick = handlePlayAgain; // launches game restart function on click
  footer.appendChild(button);
  body.appendChild(footer);
  // make remaining tiles unclickable as game over due to too many mistakes
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => (tile.onclick = null));
}

function updateMistakes() {
  const score = document.querySelector(".score"); // class from div HTML line 25
  score.textContent = "Remaining mistakes: " + mistakes; // either refreshes mistakes count with updated amount after line 46 or resets to default in case of lost()
}

function handlePlayAgain() {
  const footer = document.querySelector(".footer");  // local access to footer element created in lost function line 116
  footer.remove();
  initialize(); // restarts whole game
}
