/**
 * 01
 * Write a function to create an object named student as the following:
 * 
 * const student = {
 * name : "David Rayy",
 * sclass : "VI",
 * rollno : 12 };
 * 
 * then delete the rollno property from the following object. 
 * Also print the object before or after deleting the property.
 */

/**
 * 02 
 * Create an object to store the following information about your favorite movie: 
 * title (a string), duration (a number), and stars (an array of strings).
 * Create a function to print out the movie information like so: 
 * "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
 */

/**
 * 03 medium
 * 
 * Build your eshop product catalogue like that:
 * 1. Build and array with 10 objects. Each object should have a name property and 
 * a value and a price property and a value.
 * Example of product: 
 *     { 
            name: "Blue Shirt",
            price: 10
        }
 * 2. Build a list of carts of an online eshop like that:
 * Build an array with 10 objects. 
 * example of cart:
 *     {
            user: "alkis",
            product: "Hat",
            quantity: 3
        }
 * Each object should have:
 *  a name property and a value  (the value should be a product name from the first array)
 *  a quantity property and a value (the value should be a number)
 *  a user property and a value (the value should be the username)
 * 
 * Write functions to:
 * a) add a given product to the cart
 * b) list the products of the cart for a given user
 * c) list the total items in the cart for a given user
 * d) change the quantity of a given product in that cart
 * e) delete a product from the cart
 * f) find the total value of the cart of a given user
 */

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