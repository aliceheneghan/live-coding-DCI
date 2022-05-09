// d) change the quantity of a given product in that cart
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

addToCart(newItem)

function updateQuantity(user, product, number) {

    for ( let i = 0; i < carts.length; i++) {

        if (carts[i].user === user && carts[i].product === product) {

            carts[i].quantity += number
        }
    }

    console.log('the new array is', carts)

}

updateQuantity('Maykal', 'Ring', 10)
updateQuantity('Lucia', 'Hat', 11)