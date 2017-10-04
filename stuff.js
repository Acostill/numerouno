
// var radius = 3;
// var circumference = (2 * Math.PI) * radius;
// var area = Math.PI * Math.pow(radius, 2);

// console.log("The circumeference is " + circumference);
// console.log("The area is " + area);


// var celsius = 30;
// var fahrenheit = celsius * (9/5) + 32;

// console.log(celsius + "C is " + fahrenheit + "F");

// fahrenheit = 80;
// celsius = (fahrenheit - 32) * (5/9);

// console.log(fahrenheit + "˚F is " + celsius + "˚C");

//---------- Wed  9/20/17 ----------//
//---------- Thur 9/21/17 ----------//

// var num = 3
// if (num > 2) {
// Use a slash (/) as an escape character so you can use apostrophe (') without interrupting code
//     console.log('It\'s larger than 2');
// } else {
//     console.log('It\'s not larger than 2');
// }

// var catCount = 0;

// //Cat count must be a number. If it isn't, print the message.
// console.assert(typeof(catCount) === 'number', "catCount is not a number");

// if (catCount === 0) {
//     console.log("No cats");
// } else if (catCount === 1) {
//    console.log('There is a single cat');
// } else if (catCount === 2) {
//     console.log("There are a couple of cats");
// } else if (catCount > 1) {
//     console.log("There are many cats");
// }


//Depending on age, it  alcohol sale is permitted or not
//No sales on Sunday
// var age = 22;
// var day = 'Sunday';
// day = day.toLowerCase();

// console.assert(typeof(age) === 'number', 'Variable age must be a number')
// console.assert(day === 'sunday'
//             || day === 'monday'
//             || day === 'tuesday'
//             || day === 'wednesday'
//             || day === 'thursday'
//             || day === 'friday'
//             , 'Variable day must be a weekday.');

// if (age >= 21 && day != 'sunday') {
//     console.log("You may sell this person alcohol");
// } else {
//     console.log("You may not sell this person alcohol");
// }

// //Count of dogs and if 0 print where is Luna
// var dogs = 0;

// console.assert(typeof(dogs) === 'number', "Enter number" );

// //note in javascript 0 = false
// if (dogs) {
//     console.log("Where is Luna?")
// } else {
//     console.log("Count of dogs is " + dogs);
// }

//given day of month as number print day of week
//For September 2017

//Use modulo to make code shorter

// var monthday = 31; 
// var weekday = monthday % 7;
// switch (weekday) {
//     case 1:
//         console.log("Friday");
//         break;
//     case 2:
//         console.log("Saturday");
//         break;
//     case 3:
//         console.log("Sunday");
//         break;
//     case 4:
//         console.log ("Monday");
//         break;
//     case 5:
//         console.log ("Tuesday");
//         break;
//     case 6:
//         console.log ("Wednesday");
//         break;
//     case 0:
//         console.log ("Thursday");
//         break;
// }

// var num1 = 30;
// var num2 = 40;

// if (num1 === num2) {
//     console.log("These two numbers are equal");
// } else if (num1 > num2){
//     console.log("num1 is greater")
// } else {
//     console.log("num2 is greater")
// }

// var language = 'du'

// if (language === 'en') {
//     console.log('Hello world')
// } else if (language === 'es') {
//     console.log("Hola mundo")
// } else if (language === 'fr') {
//     console.log("Bonjour le monde")
// } else {
//     console.log("Hello world") 
// }


// var animal = 'sheep';
// var number = 2;

// console.assert(animal === 'dog'
//             || animal === 'goose'
//             || animal === 'sheep'
//             , "That is not a valid option")
// if (animal === 'goose') {
//     if (number > 1) {
//         console.log(number + ' ' + 'geese')
//     } else {
//         console.log(1 + ' ' + animal)
//     }
// } else if (animal === 'sheep') {
//         console.log(number + ' ' + animal)
// } else if (animal === 'dog') {
//     if (number > 1) {
//          console.log(number + ' ' + animal + 's')
//     } else {
//          console.log(1 + ' ' + animal)
//     }
// } 

// num = 5;
// console.assert(typeof(num) === 'number', "num must be a number")
// if (num === 0) {
//     console.log("Number is 0")
// } else if (num > 0) {
//     console.log("Number is positive")
// } else {
//     console.log("Number is negative")
// }

// num = 7;

// console.assert(typeof(num) === 'number', "num must be a number")
// if (num % 2 === 0) {
//     console.log("Number is even")
// } else {
//     console.log("Number is odd")
// }

// var double = function (num) {
//     return num + num;
// } 

// console.log(double(10));

// function times3 (num) {

// }

/* Undefined vs not defined: not defined is when a var 
is not declared, undefined is when var is declared,
and it's value is undefined */

// var myNumber = 2

// function inGlobalNum() {
//     myNumber += 1
// }

// inGlobalNum()
// console.log(myNumber)
// inGlobalNum()
// console.log(myNumber)

// function inGlobalNum() {
//     var localNum = 2;
//         localnum += 1
//         console.log(localNum)
// }

// function numPow3(num) {
//     return Math.pow(num, 3);
// }

// console.log(numPow3(127));

// function largestNumber (num1, num2) {
//     if (num1 > num2) {
//         return num1 + ' is greater'
//     } 
//     return num2 + ' is either greater or equal to first number'
// }

// console.log(largestNumber(3, 7))

// var rad = 10;
// function calcCircumference(rad) {
//     return 2 * (Math.PI * rad)
// } 

// function calcArea(rad) {
//     return Math.PI * (Math.pow(rad, 2))
// }

// function circleProps(rad) {
//     console.log('The circumference is ' + calcCircumference(rad))
//     console.log('The area is ' + calcArea(rad))
// }

// circleProps(rad);

// var squareNum = 0;
// var halfSquareNum = 0;
// var area = 0;


// function square(num) {
//     return num * num
// }

// function half(num) {
//     return num / 2
// } 

// function percentOf(num1, num2) {
//     return num1 + ' is ' + (Math.round((num1 / num2) * 10000) /100) + '% of ' + num2
// }

// function areaOfCircle(rad) {
//     var localArea = Math.PI * (rad * rad);
//     //you may use <.toFixed(2)> to round to hundredth, but number will become string
//     var localAreaRounded = Math.round(localArea * 100) / 100
//     return localAreaRounded
// }

// function doStuff(number) {
//     squareNum = square(number);
//     halfSquareNum = half(squareNum)
//     area = areaOfCircle(halfSquareNum)
//     return percentOf(squareNum, area)
// }



// console.log(doStuff(10))
// console.log(squareNum)
// console.log(halfSquareNum)
// console.log(area)

//---------- Thu 9/21/17 ----------//
//---------- Fri 9/22/17 ----------//
// while loops
// var num = 1
// while (num <= 10) {
//     console.log('the number is: ' + num)
//     num ++
// }
// console.log("End of while loop")
// // for loops
// for (var num = 1; num <= 10; num++) {
//     console.log('the number is: ' + num)
// }
// console.log ("End of for loop")


// var sum = 0
// for (var i = 1; i <= 10; i += 1) {
//     sum += i * i - 1
//     console.log(sum)
// }

// function descending(num) {
//     for (var i = num; i >= 1; i -= 1) {
//         console.log(i)
//     }
// }

// descending(10)


// function descending(num) {
//     for (var i = num; i >= 1; i--) {
//         console.log(num)
//         num --
//     }
// }

// descending(10)

// function printOdd (num) {
//     for (var i = 1 ; i <= num ; i += 2){
//          console.log(i)
//     }
// }
    
//     printOdd(10)

// function multiplesOf9(num) {
//     for (var i = 1; i <= num; i++) {
//         console.log(9 * i)
//     }
// }

// multiplesOf9(10)

// function bottlesOfBeer() {
//     for (var i = 99; i >= 1; i--) {
    
//         if (i > 2) {
//             console.log(i + ' bottles of beer on the wall, '
//                         + i + ' bottles of beer.' 
//                         + ' Take one down, pass it around, ' 
//                         + (i - 1) + ' bottles of beer on the wall.')
//         } else if (i === 2) {
//             console.log(i + ' bottles of beer on the wall, '
//                         + i + ' bottles of beer.'
//                         + ' Take one down, pass it around, '
//                         + ' 1 bottle of beer on the wall.')
//         } else {
//             console.log(i + ' bottle of beer on the wall, '
//                         + i + ' bottle of beer.'
//                         + ' Take one down, pass it around, '
//                         + ' no more bottles of beer on the wall.')
//         }
//     }
// }

// bottlesOfBeer()

// function fizzOrBuzz() {
//     for (var i = 1; i <= 100; i++) {
//         if (i % 3 === 0) {
//             console.log('Fizz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzOrBuzz()

// function fizzAndBuzz() {
//     for (var i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         }
//         else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzAndBuzz()

// function assignGrade(score) {
//     if (score > 90) {
//         return 'A'
//     } else if (score > 80) {
//         return 'B'
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }

// function loopGrade() {
//     for (var i = 60; i <= 100; i++) {
//         console.log(i + ' - ' + assignGrade(i))
//     }
// }

// loopGrade()


/* 
    Problem: Print a chessboard like pattern to the terminal

      0 1 2 3 4 5 6 7
    0 □ ■ □ ■ □ ■ □ ■
    1 ■ □ ■ □ ■ □ ■ □
    2 □ ■ □ ■ □ ■ □ ■
    3 ■ □ ■ □ ■ □ ■ □
    4 □ ■ □ ■ □ ■ □ ■
    5 ■ □ ■ □ ■ □ ■ □
    6 □ ■ □ ■ □ ■ □ ■
    7 ■ □ ■ □ ■ □ ■ □
*/


function makeBoard(num) {
    var board = '';
    for (var row = 0; row < num; row++) {
        for (var square = 0; square < num; square++) {
            if ((row + square) % 2 === 0) {
                board += '□ ';
            } else {
                board += '■ ';
            }
        }
        board += '\n';
    }
    return board;
}

console.log(makeBoard(8))

function alternateSquare(previousSquare) {
    if (previousSquare === '■') {
        previousSquare = '□';
    } else if (previousSquare === '□') {
        previousSquare = '■';
    }
    return previousSquare
}

// function makeBoard(num) {
//     var board = '';
//     var previousSquare = '■';
//     for (var row = 0; row < num; row++) {
//         for (var square = 0; square < num; square++) {
//             if (previousSquare === '□') {
//                 board += '■';
//                 previousSquare = alternateSquare(previousSquare);
//             }
//             else {
//                 board += '□';
//                 previousSquare = alternateSquare(previousSquare);
//             }
//         }
//         board += '\n';
//         previousSquare = alternateSquare(previousSquare);
//     }
//     return board;
// }

// console.log(makeBoard(8))

//----- Sum of Primes -----
// function isPrime(num) {
//     if (num === 0 || num === 1) {
//         return false
//     } else {
//     for (var i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         } return true;
//     }
// } 
// function sumPrimes(num) {
//     var sum = 0;
//     for (var i = 0; i <= num; i++) {
//         if (isPrime(i)) {
//             sum += i
//         }
//     }
//     return sum;
//   }
  

// console.log(sumPrimes(10))

//----- Fibonacci -----
// function isFibonacci(num) {
//     var fibList = [1, 1];
//     while (fibList[fibList.length - 1] < num) {
//     fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2]);
//     } if (fibList[fibList.length - 1] === num) {
//         console.log(fibList);
//         return true;
//     } else {
//         return false;
//     }
// }

// function sumOddFibs (num) {
//     var sum = 1;
//     for (i = 0; i <= num; i++) {
//         if (isFibonacci(i) && i % 2 != 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sumOddFibs(4000000));
//----- Fibonacci -----