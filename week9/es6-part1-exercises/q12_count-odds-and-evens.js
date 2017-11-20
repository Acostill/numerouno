const countOddsAndEvens = (arr) => {
    let evens = arr.filter(el => !(el % 2)).length;
    let odds  = arr.filter(el =>  (el % 2)).length;
    return {odds: odds, evens: evens}
}

console.log(countOddsAndEvens([2, 4, 6, 1, 3, 5, 7, 9, 11, 13]));