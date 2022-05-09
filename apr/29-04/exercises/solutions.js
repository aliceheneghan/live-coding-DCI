// 01
console.clear()
console.log('------------01--------------')
const fruits = ['bananas', 'oranges', 'kiwis'];

function addItem(item, array) {

    return [...array, item]
}

console.log(addItem('apples', fruits))

// 02
console.log('------------02--------------')
const recipe = {
    "idMeal": "52818",
      "strMeal": "Chicken Fajita Mac and Cheese",
      "strDrinkAlternate": null,
      "strCategory": "Chicken",
      "strArea": "American",
      "strInstructions": "Fry your onion, peppers and garlic in olive oil until nicely translucent. Make a well in your veg and add your chicken. Add your seasoning and salt. Allow to colour slightly.\r\nAdd your cream, stock and macaroni.\r\nCook on low for 20 minutes. Add your cheeses, stir to combine.\r\nTop with roasted peppers and parsley.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
      "strTags": "Pasta,Cheasy,Meat",
      "strYoutube": "https://www.youtube.com/watch?v=bwTSmLTZKNg",
      "strIngredient1": "macaroni",
      "strIngredient2": "chicken stock",
      "strIngredient3": "heavy cream",
      "strIngredient4": "fajita seasoning",
      "strIngredient5": "salt",
      "strIngredient6": "chicken breast",
      "strIngredient7": "olive oil",
      "strIngredient8": "onion",
      "strIngredient9": "red pepper",
      "strIngredient10": "garlic",
      "strIngredient11": "cheddar cheese",
      "strIngredient12": "parsley",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "500g",
      "strMeasure2": "2 cups",
      "strMeasure3": "1/2 cup",
      "strMeasure4": "1 packet",
      "strMeasure5": "1 tsp",
      "strMeasure6": "3 diced",
      "strMeasure7": "2 tbsp",
      "strMeasure8": "1 small finely diced",
      "strMeasure9": "2 finely diced",
      "strMeasure10": "2 cloves minced",
      "strMeasure11": "1 cup",
      "strMeasure12": "garnish chopped",
      "strMeasure13": "",
      "strMeasure14": "",
      "strMeasure15": "",
      "strMeasure16": "",
      "strMeasure17": "",
      "strMeasure18": "",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "http://twistedfood.co.uk/chicken-fajita-mac-n-cheese/",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": null
}

// a)
function getIngredients(object) {

    const ingredients = [] // create an array that will hold the ingredients

    const localRecipe = Object.entries(object) // create an array that contains all key and all values

    // find the object properties that are ingredients
    for (let i = 0; i < localRecipe.length; i++) {

        // check if object property contains the 'strIngredient' string and also check if the value is not empty
        if (localRecipe[i][0].includes('strIngredient') && localRecipe[i][1].length) {
            ingredients.push(localRecipe[i][1])
        }
    }

    return ingredients
}
console.log(getIngredients(recipe))
// b)
function getQuantities(object) {

    const quantities = [] // create an array that will hold the ingredients

    const localRecipe = Object.entries(object) // create an array that contains all key and all values

    // find the object properties that are ingredients
    for (let i = 0; i < localRecipe.length; i++) {

        // check if object property contains the 'strIngredient' string and also check if the value is not empty
        if (localRecipe[i][0].includes('strMeasure') && localRecipe[i][1].length) {
            quantities.push(localRecipe[i][1])
        }
    }

    return quantities
}
console.log(getQuantities(recipe))

// c)
function printRecipe(ingredients, quantities) {

    for (let i = 0; i < ingredients.length; i++) {
        console.log(`${ingredients[i]} - ${quantities[i]}`)
    }
}

printRecipe(getIngredients(recipe), getQuantities(recipe))

// 03
console.log('------------03--------------')
const user = {
    username: 'Kane',
    email: 'test@email.com',
    age: 30,
}

const userAddress = {
    country: 'Germany',
    address: 'berlin',
    image: 'logo.png'
}

const favorites = {
    animal: 'cat',
    food: 'chicken',
    music: 'rock'
}

function mergeObjects(targetObject, ...sourceObjects) {

    return Object.assign(targetObject, ...sourceObjects)
}

console.log(mergeObjects(user, userAddress, favorites))

// 04
console.log('------------04--------------')
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

// a)
function updateWishlist(userid, productid) {

    // 1. find the index for the user in wishlist
    let wishIdx = -1;

    for (let i = 0; i < wishlist.length; i++) {

        if (wishlist[i].userid === userid) {
            wishIdx = i;
            break; // stop the loop since index has been found
        }
    }

    if (wishIdx === -1) { // user not found in the wishlist
        wishlist.push({userid})// add user to wishlist
        wishlist[wishlist.length - 1].products = [] // create an empty array for this user
        wishlist[wishlist.length - 1].products.push(productid) // add product to the newly inserted user
        return; // nothing else to do in that case
    }

    // check if product is in the nested array for that user
    for (let i = 0; i < wishlist[wishIdx].products.length; i ++) {

        if (wishlist[wishIdx].products[i] === productid) { // product found so needs to be deleted
            wishlist[wishIdx].products.splice(i, 1);
            return; // product found and deleted
        }
    }

    // since the function reached this place, then the productid isn't in the user's array so we need to add it
    wishlist[wishIdx].products.push(productid)
}

updateWishlist(1, 3) // delete productid 3 for user 1
console.log(wishlist)
updateWishlist(4, 1)
console.log(wishlist) // add a new user
updateWishlist(4, 2)
console.log(wishlist) // add a new product

// b)
function printWishlist(user) {

    let wishIdx = -1

    // find the index in wishlist for given user
    for (let i = 0; i < wishlist.length ;i ++) {

        if (wishlist[i].userid === user) {

            wishIdx = i;
            break;
        }
    }

    // if the user is found print product for each item in the nested products array inside wishlist
    if (wishIdx > -1) {

        console.log('User with id', user, ' has the following products wishlisted:')
        for ( let i = 0; i < wishlist[wishIdx].products.length; i++) {
            const product = getProduct(wishlist[wishIdx].products[i])
            console.log('Name: ', product.name)
            console.log('Decription: ', product.description)
            console.log('Price: ', product.price)
            console.log('----')

        }

        return
    }
}

/**
 * 
 * @param {*} productId 
 * @returns an object from products array
 */
function getProduct(productId) {

    for (let i = 0; i < products.length;i++) {
        if (products[i].id === productId) {
            return products[i]
        }
    }
}

printWishlist(4)