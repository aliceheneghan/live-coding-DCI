/**
 * FUNCTIONS
 * 
 * function () {
 *  statements;
 * }
 */
helloWorld()

function helloWorld() { // function declaration
    console.log('Hello world from our first function')
}


const array = ['roses', 'jasmine', 'tulip', 'pasiflora', 'roses', 'jasmine' ];
const newFlower = 'daffodil'
addToArray()

function addToArray() {

    if (!array.includes(newFlower)) {
        array.push(newFlower);
    }
}

; // it's an empty statement


addToArray()
console.log('array now is', array)

const itemToDelete = 'roses'
// ['roses', 'roses', 'jasmine', 'tulip', 'pasiflora'];
function deleteFromArray() {
    // let idx;
    // 1. loop over the array

    for (let i = 0; i <= array.length - 1 ; i ++) {
        // 2. compare each item of the array with item to delete
        if (array[i] === itemToDelete) {
            // 3. if the items match then store the index
            // idx = i;
            array.splice(i, 1)
            // ['roses', 'jasmine', 'tulip', 'pasiflora', 'roses'];
            // break; // stop the loop
        }

    }

    // 4. after the loop delete the item
    // array.splice(idx, 1)

    // 5. print the array
    console.log('array is now', array)

}

// deleteFromArray()

/// ['roses', 'roses', 'jasmine', 'tulip', 'pasiflora', 'jasmine'];
function removeDuplicates() {

    const results = [];

    for (let i = 0; i <= array.length - 1 ; i ++) {
        // 2. compare each item of the array with item to delete
        if (!results.includes(array[i])) {
            results.push(array[i])
        }

    }

    console.log('resutls is:', results)

}
removeDuplicates()

// functions can be overwritten
function removeDuplicates() {
    console.log('hello from new remove duplicates')
}