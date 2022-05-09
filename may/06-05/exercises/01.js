/**
 * 01
 * Create a function to remove duplicates in an array.
 * E.g. when receiving an array like this:
 * [1, 5, 6, 5, 7, 1, 6, 8, 9, 7]
 * the function should return an array without duplicates:
 * [1, 5, 6, 7, 8, 9]
 */

/**
 * 02
 * Given the following arrays of products and carts,
 * create the following functions using arrays methods:
 * 
 * a) list products from cart for specific user
 * e.g. listProducts('alkis')
 * 
 * b) get total number of items for specific user
 * e.g. getTotalItems('alkis')
 * 
 * c) get total cost of products for specific user
 * e.g. getTotalCost('alkis')
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

/**
 * Given the following array of blog posts,
 * create the following functions:
 *
 * a) Create a function that will search for a given text in all text properties of a blog post and
 * return the results in an array. In case the text was not found in any of the blog post properties, then return the text 'No matching posts found'
 * 
 * b) Create a function that edits a given post. The user should be able to edit 
 * any object property he would like and should return the updated object
 * If the post is not found then the function should return 'Post not found'
 * 
 * c) create a function that deletes a post with a given id from the array 
 * and returns the updated array
 * 
 * d) create a function that displays the comments of a given post one per row
 */

const blogPosts = [
{
    id: 1,
    title: 'The AI in military',
    text: `And when the time he was in front of the army were cut short.

    The horse would have been trampled to pieces,
    
    And the men who would have been killed, and the whole town would have been burned.
    
    But I have been there, and we are done, for the king has gone forward,
    
    And if he is still in front of us, it says that it is time for him to see it again.
    
    Now let us come back to the place,
    
    For our own sake I will take an oath.
    
    Then shall we come back and lay hands on their bodies,
    
    And all that has no other will be eaten
    
    And there will be a thousand thousand more people to be massacred.
    
    Now let us go and lay hands on theirs.`,
    author: 'deepai.org',
    description: 'text generated from a machine in deepai.org',
    comments: ['Awesome posts, thanks!', 'Cannot agree more']
},
{
    id: 2, 
    title: 'A garden in Babylon',
    text: `As a result, the first of the ten disciples of Samaria, 
    called the "Tray-Bearer of Wisdom," was known by her as the 
    "Empire of the Tungis." 
    The Tungis are the divine spirits of the Dead and of the Prophets. 
    She taught these beings that in every person who does not know any of them,
        all they can do is to look for a spirit that has been placed at the root 
        of any man's estate. She even stated this to the Prophet Joseph.`,
    author: 'deepai.org',
    description: 'text generated from a machine in deepai.org',
    comments: ['Amazed wow!', 'I dislike that']
}
]