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
const carts = [
    { // 1
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 2
        user: "alkis",
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
        product: "Hat",
        quantity: 3
    },
    { // 6
        user: "george",
        product: "Hat",
        quantity: 3
    },
    { // 7
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 8
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 9
        user: "alkis",
        product: "Hat",
        quantity: 3
    },
    { // 10
        user: "alkis",
        product: "Hat",
        quantity: 3
    }
]

// a) list products from cart for specific user

function listProducts(user) {

    // The 'old' way
    // for (let i = 0; i< carts.length; i++) {
    //     if (carts[i].user === user) console.log(carts[i])
    // }

    // arrayname.method
    // filter method returns an array
    // console.log(carts.filter(item => item.user === user))

    // array.map return an array
    // console.log(carts.map(item => item.user === user ? item : null))

    // array.foreach
    carts.forEach(item => {
        
        if (item.user === user) console.log(item)
    })
}

listProducts('alkis')