// var myGlobal = 0;
// function sumFromNTo1(n) {
//     myGlobal += n
//     if (n > 0) {
//         sumFromNTo1(n -1)        
//     }
    
// }
// sumFromNTo1(5)
// console.log(myGlobal)


function sumFromNTo1(n) {
    if (n > 0) {
        console.log('N is now: ' + n)
        return n + sumFromNTo1(n - 1)
    }
    console.log('This should be last: ' + n)
    return n
}

console.log(sumFromNTo1(5))

