function getNumbersUntil(number) {
    const list = [];
    for (let i = 0; i < number; i++) {
        list.push(i);
    }
    return list;
}

const list1 = getNumbersUntil(10);
const list2 = getNumbersUntil(8);
const list3 = getNumbersUntil(20);


console.log(list1);
console.log(list2);
console.log(list3);