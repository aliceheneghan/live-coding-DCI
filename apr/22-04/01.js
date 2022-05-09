console.log("This is console:", console)
console.clear()

const products = [
    { // 1
        name: "Blue Shirt",
        price: 10
    },
    { // 2
        name: "Hat",
        price: 15
    },
    { // 3
        name: "Coat",
        price: 100
    },
    { // 4
        name: "Ring",
        price: 72
    },
    { // 5
        name: "Bag",
        price: 19
    },
    { // 6
        name: "Scarf",
        price: 9
    },
    { // 7
        name: "Shoes",
        price: 57
    },
    { // 8
        name: "Underware",
        price: 7
    },
    { // 9
        name: "shocks",
        price: 3
    },
    { // 10
        name: "T-shirt",
        price: 50
    }
]

const firstProduct = products[0]

for (let i = 0; i < products.length; i++) {
    console.log(products[i].name)
}

console.log('1st product is:', products[0].name, ' this is the 2nd param', 'another item')
// console.log('1st product is:', products[0])

console.log('The total products are', products.length.toString())
// `` // backticks
// "" // double quotes
// '' // single quotes