const array = ['chicken', 'fish', 'cat'];

function addToArray( ...items) { // rest operator

    console.log('items is', items)// items is an array
    // const copyArray = [...array] // or just copy the array
    return [...array, ...items] // spreading
}

console.log(addToArray('dog', 'bird', 'insect'))