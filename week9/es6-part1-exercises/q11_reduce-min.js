const reduceMin = arr => arr.reduce((acc, el) => el < acc ? el : acc)

console.log(
    reduceMin([2, 3, 4, 5, 1]), //returns 1
    reduceMin([6, 7, 7, 4]), //returns 4
    reduceMin([10, 0, 100, 1, -100, 20, 33]) //returns -100
)