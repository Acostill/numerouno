let forEach = (array, callback) => {
    array.forEach(el => {callback(el)});
}

let log = val => {console.log(val)}

forEach([1, 2, 3, 4, 5], log);