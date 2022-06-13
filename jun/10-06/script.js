const body = document.querySelector('body')

let markedId = -1; // it's the id of the tile
let markedText = 0; // this is the text of the tile
let mistakes = 0; 

function initialize() {
    
    resetGlovalVariables()

    for (let i = 0; i < 10; i++) {

        const tile = document.createElement('div')

        tile.classList.add('tile')
        tile.innerText = Math.ceil(Math.random() * 10)
        tile.id = i;
        tile.onclick = handleClick
        body.appendChild(tile)
    }
}

initialize()
// 1. user clicked on an unmarked tile
// 2. user clicked on a marked tile
// 3. the marked tile was the same as before

function handleClick(e) {
    
    const tile = document.getElementById(e.target.id)

    if (markedId === -1) { // this is the first tile
        tile.classList.add('marked');
        markedId = e.target.id;
        markedText = e.target.innerText;
    } else { // there are tiles marked

        if (markedId === e.target.id) { // same tile clicked
            console.log('this is the same tile')
            tile.classList.remove('marked')
            markedId = -1;
        } else { // another tile clicked
    
            if (markedText == e.target.innerText) { // user clicked the correct tile

            } else { // user clicked wrong tile

                mistakes += 1;
                console.log('mistakes is', mistakes)
                if (mistakes > 2) {

                   loose()
                }
            }
            tile.classList.add('marked')
        }
    }
   
    console.log('tile is', markedId)

}

function loose() {
    alert('Many mistakes you loose!')
    removeTiles()
    initialize()
}

function removeTiles() {

    const tiles = document.querySelectorAll('.tile')

    tiles.forEach(tile => tile.remove())

}

function resetGlovalVariables(){
    mistakes = 0;
    markedId = -1;
    markedText = 0;
}