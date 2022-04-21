// 01
function rangeBetween(start, end) {

    const array = [];

    for (let i = start; i <= end; i++) {
        array.push(i)
    }

    return array;
}
console.log(rangeBetween(4, 7));
console.log(rangeBetween(-4, 7));

// 02
function arrayRange(start, length) {
  const array = [];
  for (let i = 0; i < length; i++, start++) {
    array[i] = start;
  }
  return array;
}

console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));

// 03
function moveIt(array, oldIdx, newIdx) {

    const oldItem = array[newIdx]; //30


    array[newIdx] = array[oldIdx];
    array[oldIdx] = oldItem;
    return array
}

console.log(moveIt([10, 20, 30, 40, 50], 0, 2));
console.log(moveIt([10, 20, 30, 40, 50], 1, 4));

// 04
function fillArray(string, times) {
    
    const array = [];

    for (let i = 0; i < times; i++) {
        array.push(string)
    }

    return array
}
console.log(fillArray('some string', 4))

// 05
const items = [254, 45, 212, 365, 2543];

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
console.log(randomItem(items));

// 06
function checkItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}
console.log(checkItem([2, 5, 9, 6], 5));
console.log(checkItem([2, 5, 9, 6], 1));

// 07
function mergeArrays(array1, array2) {
    const array = [...array1]

    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
            array.push(array2[i])
        }
    }

    return array;
}

console.log(mergeArrays([1, 2, 3], [2, 30, 1])) 

// 08
function removeDuplicates(array){
    const result = []

    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) result.push(array[i])
    }

    return result
}

console.log(removeDuplicates([1,2,3,1]))

// 09
const recipe = {
    'title': 'Mole',
    'servings': 2,
    'ingredients': ['cumin', 'cinnamon', 'cocoa']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

// 10
const books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];
  
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
      console.log('You already read "' + bookInfo);
    } else {
      console.log('You still need to read "' + bookInfo);
    }
  }

// 11
function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));

// 12
function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));