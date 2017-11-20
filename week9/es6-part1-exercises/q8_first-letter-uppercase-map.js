const upCaseFirst = str => str.split(' ').map(word => {
    return word.slice(0, 1).toUpperCase(0) + word.slice(1)
}).join(' ');


console.log(upCaseFirst('the quick brown fox jumped over the lazy dog!'));