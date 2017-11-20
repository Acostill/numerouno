const map = (arr, callback) => arr.map(el => callback(el));

const cubed = num => Math.pow(num, 3);

console.log(map([1, 2, 3, 4, 5], cubed));