// let forEachSum = array => {
//     var sum = 0;
//     array.forEach(el => {sum += el})
//     return sum;
// }

// console.log(forEachSum([1, 2, 3, 4, 5]));

let forEachSum = array => {
    var sum = 0;
    array.forEach(el => sum += el)
    return sum;
}

console.log(forEachSum([1, 2, 3, 4, 5]));