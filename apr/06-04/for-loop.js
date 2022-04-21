// for (let i = 0; i < 5; i++) {
//     let total = 0;
//     total += i;
//     console.log(total);
// }


function sumNumbers() {
    let total = 0;
    for (let i = 0; i < 5; i++) {
        // total += i;
        total = total + i;
    }
    return total;
}

let result = sumNumbers();

console.log(result);