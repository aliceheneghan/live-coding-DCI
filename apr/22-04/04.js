// c) list the total items in the cart for a given user

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

function getTotalItems(name) {
    
    let total = 0;

    for ( let i = 0; i < carts.length; i++) {


        if (carts[i].user === name) {

            total = total + carts[i].quantity

        }

    }

    console.log(`The total for user ${name} is ${total} items`)
}

getTotalItems('alkis')