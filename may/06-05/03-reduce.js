// array.reduce(funtion)
// with initial value
[1, 2, 3, 4, 5].reduce((prev, current) => {
    console.log('Prev and current', prev, current)
}, 0);

console.log('---------------------------');
// without initial value
[1, 2, 3, 4, 5].reduce((prev, current) => {
    console.log('Prev and current', prev, current)

    prev = prev + current
    return prev
});

const products = [
    "t-shirt",
    "jeans",
    "jeans",
    "shoes",
    "shoes",
    "shoes",
    "hat",
  ];

function countProducts(previousValue, currentValue) {
    previousValue[currentValue] =
      previousValue[currentValue] === undefined
        ? 1
        : previousValue[currentValue] + 1;
    return previousValue;
  }

const result = products.reduce(countProducts, {});

const numbers = [2111, 22, 5453, 1,-55]

function findMax(prev, current) {
    // return prev > current ?  prev : current

    if (prev > current) {
        return prev
    } else return current;
}

const max = numbers.reduce(findMax)

console.log('max is', max)

function findMin(prev, current) {
    if (prev < current) {
        return prev
    } else {
        return current
    }
}

console.log(numbers.reduce(findMin))

// 
const duplicates = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7]

function removeDuplicates(acc, item) {

    console.log('acc is', acc)
    if (!acc.includes(item)) {
        
        acc.push(item)
    } 
    
    return acc

}

console.log(duplicates.reduce(removeDuplicates, []))
