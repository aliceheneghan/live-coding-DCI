const body = document.querySelector('body')

let currentValue = 0;
let tileMarked = -1;

let mistakes = 3;

function initialize() {

    setDefaultValues(true);

    // remove all tiles before creating new ones
    const tiles = document.querySelectorAll('.tile')

    tiles.forEach(tile => tile.remove())

    for (let i = 0; i < 10; i++) {

        const tile = document.createElement('div')
        tile.classList.add('tile')
        tile.textContent = randomNumber()
        tile.id = i;
        body.appendChild(tile);
        tile.onclick = handleTileCLick
    }


}
initialize()

function randomNumber() {
    return Math.ceil(Math.random() * 10)
}

// cases:
// 1. user clicked a tile that is not marked
// 2. user clicked a tile that is marked    
// 3. user clicked the same tile twice
// 4. user clicked a different tile
// 5. user clicked a tile that is not correct
// 6. user clicked the correct tile

function handleTileCLick(event) {

    const tile = document.getElementById(event.target.id);

    if (currentValue > 0) { // there is a tile clicked

        if (tileMarked == event.target.id) { // user clicked the same tile twice

            tile.classList.remove('marked')
            setDefaultValues()
        } else { // user clicked a different tile
        
            if (tile.textContent == currentValue) { // user clicked the correct tile
                removeTiles(tile.id, tileMarked)
                setDefaultValues()
            } else { // user clicked the wrong tile
                mistakes--;
                updateMistakes();
                if (mistakes == 0) {
                    lost(false)
                }
            }
        }
        

    } else { // first time a tile is clicked
        console.log('tilemarked', tileMarked, 'tileid', tile.id)
       
        currentValue = event.target.textContent;
        tileMarked = event.target.id;

        // change background color
        
        tile.classList.add('marked')
        
    }

    if (!checkForMoreMoves()) setTimeout(() => lost(true), 100) // need to add some time to wait for the DOM to update

    console.log('clicked: event=', event.target.textContent)
    // currentValue = event.targe
}

function removeTiles(a, b) {
    const tileA = document.getElementById(a);
    
    const tileB = document.getElementById(b);

    tileA.remove();
    tileB.remove();
}

function setDefaultValues(newGame){

    currentValue = 0;
    tileMarked = -1;
    if (newGame) mistakes = 3;
}

function checkPlayerWon() {
    const tiles = document.querySelectorAll('.tile')
    if (tiles.length == 0) {
        alert('you won!')
    }
}

function checkForMoreMoves() {
    
    console.log('checkForMoreMoves here')
    const tiles = [...document.querySelectorAll('.tile')]
    
    if (tiles.length < 2) return false;
    
    const cleanedTiles = tiles.reduce((arr, tile) => {

        console.log('in reduce', tile.textContent)
        console.log('in reduce', arr)

        if(!arr.includes(tile.textContent)){
            arr.push(tile.textContent)
            
        }
        return arr
    }
    , [])
    console.log('tiles: cleaned/original', cleanedTiles.length, tiles.length)

    if (cleanedTiles.length < tiles.length) return true;

    return false;
}

function lost(moves) {

    if (moves) {
        alert('Oh no! no more moves! you can play again')

    } else {

        alert('Oh no! Too many mistakes! you can play again')
    }

    setDefaultValues(true)
    updateMistakes();
    
    const footer = document.createElement('div')
    footer.classList.add('footer')
    const button = document.createElement('button')
    button.textContent = 'Play again'
    button.onclick = handlePlayAgain
    footer.appendChild(button)
    body.appendChild(footer)

    // make rest tiles unclickable
    const tiles = document.querySelectorAll('.tile')
    tiles.forEach(tile => tile.onclick = null)
}

function updateMistakes() {
    
    const score = document.querySelector('.score')
    score.textContent = 'Remaining mistakes: ' + mistakes;
}

function handlePlayAgain() {
    const footer = document.querySelector('.footer')
    footer.remove()
    initialize()
}