/**
 * 04
 * Create the wishlist functionality of an eshop that is selling vitamins. (Only the JS part)
 * 
 * a) create a function that adds a product to a given user's item in the wishlist. If the product id exists for the given user, then remove the product id.
 * If the user doesn't exist in the wishlist array then add the user to the array
 * 
 * b) create a function that lists product details for all products in the wishlist for the given userid
 */
// Data
const products = [
    {
      // 1
      id: 1,
      name: "D3 5000 iu",
      description: "Takes care of your immune system",
      price: 10,
      image: "http://example.com/1",
    },
    {
      // 2
      id: 2,
      name: "C 1000mg",
      description: "180 tabs of vitamin C with Bioflanoids",
      price: 3,
      image: "http://example.com/23",
    },
    {
      // 3
      id: 3,
      name: "B - Complex 50 mg",
      description: "Balanced mix of all basic B vitamins",
      price: 12,
      image: "http://example.com/44",
    },
    {
      // 4
      id: 4,
      name: "Cal-Mag",
      description: "Calcium and Magnesium in the proper analogy",
      price: 15,
      image: "http://example.com/123",
    },
    {
      // 5
      id: 5,
      name: "E 400iu",
      description: "Best for skin issues",
      price: 10,
      image: "http://example.com/456",
    },
];
  
const users = [
    {
        userId: 1,
        name: "alkis"
    },
    {
        userId: 2,
        name: "george"
    },
    {
        userId: 3,
        name: "jim"
    },
    {
        userId: 4,
        name: "Ruby"
    }
    
]

const wishlist = [
    {
        userid: 1,
        products: [1, 2, 3],
    },
    {
        userid: 2,
        products: [1, 3, 5],
    },
    {
        userid: 3,
        products: [2, 4],
    }
];

function updateWishlist(userid, productId) {

    // 1. find the user in wishlist array
    let wishIdx = -1; // index of the wishlist array that the user will be found (if will be found)

    for (let i = 0; i < wishlist.length; i++) {
        if (wishlist[i].userid === userid) {
            wishIdx = i;
            break;
        }
    }

    // 2. check if user was found in the wishlist array
    if (wishIdx === -1) { // user was not found
        console.log('user not found')
        wishlist.push({userid: userid})
        wishlist[wishlist.length - 1].products = [];
        wishlist[wishlist.length - 1].products.push(productId)
        return; // exit no more actions need to be taken
    }

    // 3. check if the user has the given product into his array (products)
    
    if (!wishlist[wishIdx].products.includes(productId)) {
        console.log('product not found')
        wishlist[wishIdx].products.push(productId)
       return;
    } 

    // 4. find the index of the product in order to remove it

    for (let i = 0; i < wishlist[wishIdx].products.length ; i++) {
        
        if (wishlist[wishIdx].products[i] === productId) {
            wishlist[wishIdx].products.splice(i, 1);

            break;
        }
    }

   
}

updateWishlist(3, 2)
updateWishlist(4, 1)
updateWishlist(3, 5)
console.log('wishlist is', wishlist)

function getWishlistforUser(3)