console.clear()
// 01 - Remove duplicates
function removeDuplicates(array) {

    const result = array.reduce((acc, item) => {

        if (!acc.includes(item)) acc.push(item);

        return acc
    }, [])

    return result
}
console.log('------------01--------------')
console.log(removeDuplicates([1, 5, 6, 5, 7, 1, 6, 8, 9, 7]))

// 02
console.log('------------02--------------')
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

// a) list products for user
function listProductsForUser(user, array) {
    console.log(array.filter(item => item.user === user))
}
console.log('------------02A--------------')
listProductsForUser('alkis', carts)


// b) get total number of items for specific user
function getTotalItemsForUser(user, array) {

    total = array
    .filter(item => item.user === user)
    .reduce((total, item) => total + item.quantity, 0)

console.log('Total items for user', user, ' is ', total );
}
console.log('------------02B--------------')
getTotalItemsForUser('alkis', carts)

// c) get total cost of products for specific user
function getTotalCartForUser(user, cartArray, productArray) {

    //{quantity, name}
    const userItems = cartArray.filter(item => item.user === user)
    
    const itemsWithPrices = userItems.map(item => {

        // console.log("Item=", item)
        const product = productArray.filter(prod => prod.name === item.product )
        // console.log("quantity=", item.quantity);
        // console.log("product=", product);

        return price = item.quantity *  product[0].price; 
        // return item.quantity *  product.price //productArray.filter(product => product.product === item.name).price
        // console.log("Price is", price)
    })

    console.log(itemsWithPrices)

    const total = itemsWithPrices.reduce((total, item ) => total + item)

    console.log("Total for the cart =", total)
    // console.log("quantity is ", typeof cartArray[0].quantity, " and price is ", typeof productArray[0].price)
}
console.log('------------02C--------------')
getTotalCartForUser('alkis', carts, products)


// 03
console.log('------------03--------------')
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
// a) Create a function that will search for a given text 
function searchText(array, text) {
    const results = [];
  
    array.forEach((item) => {
      if (
        item.title.includes(text) ||
        item.text.includes(text) ||
        item.description.includes(text)
      )
        results.push(item);
    });
  
    return results.length ? results : "No matching posts found";
  }
  console.log('------------03A--------------')
  console.log(searchText(blogPosts, "pieces"));
  console.log(searchText(blogPosts, "not in a million"));

//   b) Create a function that edits a given post
function editPost(array, postId, field, value) {
    let idx = -1;

    array.forEach((item, index) => {
        if (item.id === postId) idx = index;
    });

    if (idx < 0) return "Post not Found";

    array[idx][field] = value;

    return array[idx];
}
console.log('------------03B--------------')
console.log(editPost(blogPosts, 1, "title", "The AI in the garden"));
console.log(editPost(blogPosts, 1, "author", "alkas"));
console.log(editPost(blogPosts, 3, "author", "alkas"));

// c) create a function that deletes a post with a given id
function deletePost(array, postId) {
    let idx = -1;
  
    array.forEach((item, index) => {
      if (item.id === postId) idx = index;
    });
  
    return idx > -1 ? array.splice(idx, 1) : array;
  }
  console.log('------------03C--------------')
  console.log(deletePost(blogPosts, 33));
  console.log(deletePost(blogPosts, 2));

//   d) create a function that displays the comments

function displayComments(array, postId) {
    let idx = -1;
  
    array.forEach((item, index) => {
      if (item.id === postId) idx = index;
    });
  
    array[idx].comments.forEach((comment) => console.log(comment));
  }
  console.log('------------03D--------------')
  displayComments(blogPosts, 1);


// Bonus: How to Create Chained functions (there is no such exercise given. It's just for demonstration purposes)
const math = {
    result: 0,
    add(a, b) {
        
        this.result = a + b
        return this
    },

    multiply(c) {
        this.result *= c
        console.log(this.result)
    }
}
math.add(1, 1).multiply(2)