const food = ["sandwich", "banana", "cake", "pizza", "egg"];

/*
Add a number to each element in the array, from 1 counting up to the last element

1/5. sandwich
2/5. banana
...
*/
const addNumber = (currentItem, i, arr) => {
    console.log("item:", currentItem);
    console.log("index:", i);
    console.log("array:", arr);
    let result = `${i + 1}/${arr.length}. ${currentItem}`;
    return result;
}

console.log(food.map(addNumber));