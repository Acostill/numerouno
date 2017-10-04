// //Write a function that takes a decimal number as argument and returns a string with the binary representation of the number. 



// function toBinary (num){
//     var number = num; 
//     var result = [];

//     while(number >= 1){
//         result.unshift(number % 2);
//         number = Math.floor(number/2);
//     }
//     return result;
//     }

// console.log(toBinary(13));

// toBinary = (num)=>{
//     return num.toString(2)
// }
// console.log(toBinary(27));

// function binarytoDecimal(num) {
//     var ans = 0;
//     var a = num.toString();
//     for (var i = 0; i < a.length; i++) {
//      if (a[i] == '1')
//       ans += Math.pow(2, a.length - 1 - i);
//     }
//     return ans;
//    }

//    console.log(binarytoDecimal(11011));
/* // Binary to Decimal
    function binaryToHex(str) {
        var sum = 0;
        var ex = 0;
        var alpha = "";

        for (var i = str.length - 1; i >= 0; i--) {
            if (str[i] === '1') {
                sum += Math.pow(2, ex);
                ex++
            } else {
                ex++;
            }
        }

        switch(sum)
        {
            case 10:
            alpha = "A"
            break;
            case 11:
            alpha = "B"
            break;
            case 12:
            alpha = "C"
            break;
            case 13:
            alpha = "D"
            break;
            case 14:
            alpha = "E"
            break;
            case 15:
            alpha = "F"
            break;

            default:

            return sum;

        }
        return alpha;
    }

    console.log(binaryToHex('1111'));
*/

/* // D
    function hexToBinary(str) {
        var sum = 0;
        var ex = 0;
        var alpha = "";

        for (var i = str.length - 1; i >= 0; i--) {
            if (str[i] === '1') {
                sum += Math.pow(2, ex);
                ex++
            } else {
                ex++;
            }
        }

        switch(sum)
        {
            case 10:
            alpha = "A"
            break;
            case 11:
            alpha = "B"
            break;
            case 12:
            alpha = "C"
            break;
            case 13:
            alpha = "D"
            break;
            case 14:
            alpha = "E"
            break;
            case 15:
            alpha = "F"
            break;

            default:

            return sum;

        }
        return alpha;
    }

    console.log(hexToBinary('1111'));
*/

/*
6000
 700 6784//
  80
   9 [0001 1010 1000 0101]

       8192 4096 2048 1024 512  256  128  64    32   16    8    4    2    1
              1    1   0    1    0    1    0     0    0     0   1    0    1

        6    7    8    9
    0110 0111 1000 1001


*/