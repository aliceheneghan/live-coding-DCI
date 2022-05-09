const carts = [
    { // 1
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 2
        user: "Alkis",
        product: "shocks",
        quantity: 2
    },
    { // 3
        user: "jim",
        product: "Hat",
        quantity: 3
    },
    { // 4
        user: "john",
        product: "Underware",
        quantity: 3
    },
    { // 5
        user: "jim",
        product: "Underware",
        quantity: 3
    },
    { // 6
        user: "george",
        product: "Hat",
        quantity: 3
    },
    { // 7
        user: "alkis",
        product: "Coat",
        quantity: 3
    },
    { // 8
        user: "alkis",
        product: "Scarf",
        quantity: 3
    },
    { // 9
        user: "alkis",
        product: "Bag",
        quantity: 3
    },
    { // 10
        user: "alkis",
        product: "Underware",
        quantity: 3
    }
]

function addToCart(item) { // item is a parameter
    carts.push(item)
}

addToCart({
    user: "Maykal",
    product: "Ring",
    quantity: 1
})

const newItem = {
    user: "Lucia",
    product: "Hat",
    quantity: 5
}

addToCart(newItem) // when calling a function the variable that is being passed, is called argument

console.log('Array is:', carts)