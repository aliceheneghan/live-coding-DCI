/**
 * 01
 * Create a function that adds an item to a given array using the spread operator
 * 
 * E.g. in an array fruits = ['bananas', 'oranges', 'kiwis']
 * addItem('apples', fruits) the result should be ['bananas', 'oranges', 'kiwis', 'apples']
 */

/**
 * 02
 * Your app is accepting an object as the one named "recipe" just after the exercise description.
 * This object contains details for a cooking recipe.
 * 
 * a) Create a function that accepts such an object and returns an array of the ingredients that object contains  
 * b) Create another similar function that returns an array of the quantities of each ingredient
 * c) Create a function that accepts an array of ingredients and an array of quantities and prints a list in the form of:
 * ingredient - quantity
 * 
 * N.B. data come from here: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52818
 */

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

/**
 * 03
 * Create a function that adds any number of objects to another existing object
 */
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
        productId: [1, 3, 5],
    },
    {
        userid: 3,
        productId: [2, 4],
    }
];