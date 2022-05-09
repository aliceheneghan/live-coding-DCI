function someFunction(param) {
    const random = 5;

    console.log(this)
}

someFunction()

for (let i = 0; i < 10; i++) {

    const variable = 4;

    console.log(this)
}

console.log('this in a file is:', this)

const user = {
    name: 'george',
    age: 20,
    print() {
        console.log('this inside an object', this.name)
    }
}

user.print()

const array = ['chicken', 'fish', 'cat']
// for ... of not to be used with objects
for (let key of array) {
    console.log('key is', key)
}

// for (let key of user) { // i gives error
//     console.log('key with object is', key)
// }

// for ... in better to be used with objects
for ( let key in array) {
    console.log('key is with IN', key)
}

for ( let key in user) {
    console.log('key is with IN with OBJECT', key)
}
const arrayObjects = [{type:'chicken'}, {type: 'fish'}, {type: 'cat'}]

console.clear()
console.log('---------------------------')
for (let item of arrayObjects) { // print each item of the array
    // console.log('each item in an array is', idx)

    for (let key in item) { // item is an object from the array
        console.log('properties of each item in array', key)
    }
}
console.log('---------------------------')
