const body = document.querySelector('body')

let markedId = -1;
let markedText = 0;

function initialize() {

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

    } else { // there are tiles marked

        if (markedId === e.target.id) { // same tile clicked
            console.log('this is the same tile')
            tile.classList.remove('marked')
            markedId = -1;
        } else { // another tile clicked
    
            if (markedText == e.target.innerText) { // user clicked the correct tile

            } else { // user clicked wrong tile

            }
            tile.classList.add('marked')
        }
    }
   
    console.log('tile is', markedId)

}