

// Array.prototype.map = function(func) {
//     var results = [];
//     for (var i = 0; i < this.length; i++){
//         results.push(func(this[i]));
//     }

//     return results;
// };

// var arr = [1, 2, 3]
// var arr2 = arr.map(function(num) {
//     return num + 1
// })

// var arr3 = arr.map(function(num) {
//     return num * 2
// })
// console.log(arr2)
// console.log(arr3)

// var original = [1, 2, 3];
// var newArr = original.map(function (num) {
//     return num + 10
// })

// console.log(newArr)

// var original = [1, 2, 'buckle', 'my', 'shoe']
// var newArr = original.map(function (str) {
//     if (str !== String) {
//         return ''
//     } else {
//         return str
//     }
// })

// console.log(newArr)

// var original = [1, 2, 3, 4, 5, 6];
// var newArr = original.filter(function(num) {
//     return num % 2 === 0
// })

// console.log(newArr)

// var original = [true, false, [], '', 0, NaN, 'kittens', 500];
// var newArr = original.filter(function(el) {
//     if (el) {
//         return el
//     }
// })
// console.log(newArr)

// //Monique's version
// var original = [true, false, [], '', 0, NaN, 'kittens', 500];


// var isTruthy = original.filter(function(element){
// //if element true return it
//     if(element === true) {
//     }
//     return element
    
// });
// console.log (isTruthy);
// //end of monique's version

// var arr = [1, 2, 6, 7, 100];
// var sumOfArr = arr.reduce(function(accumulator, curr) {
//     return accumulator + curr
// })

// console.log(sumOfArr)

// var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];
// var newArr = arr.filter(function(el) {
//     if (typeof(el) === 'number') {
//         return el
//     }
// })
// var sumOfArr = newArr.reduce(function(accum, curr) {
//     return accum + curr
// })
// console.log(newArr)
// console.log(sumOfArr)

// var arr = [1, 2, 6, 7, 100];
// var sumOfArr = arr.map(function(num) {return num * 2}).reduce(function(accum, curr) {return accum + curr});
// console.log( sumOfArr );

// var arr = [1, 2, 500, 6, 3, 26];
// var largest = arr.reduce(function(accum, curr) {
//     if (curr > accum) {
//         return curr
//     } else {
//         return accum
//     }
// })
// console.log(largest)

//Write a function elementDivisibleBy with parameters divisor and arr. 
//Use .filter() to return a new array of every element of arr that can be evenly divided by divisor.
// function elementDivisibleBy(divisor, arr) {
//     var result = arr.filter(function(el){
//         return el % divisor === 0
//     })
//     return result
// }
// console.log(elementDivisibleBy(2, [1, 2, 3, 4]));
// console.log(elementDivisibleBy(5, [5, 25, 4, 8, 100]));

// Write a function joinByReduce with arguments str and arr. 
// Use .reduce() to return a string consisting of every element of arr separated by str.  
// (There will be an extra occurrence of str at the end of your return value - this is okay.)

// function joinByReduce(str, arr) {
//     var result = arr.reduce(function(accum, curr) {
//         return accum + str + curr
//     })
//     return result
// }
// console.log( joinByReduce( '-', [2, 4, 'sportsball', 'sewing machine'] ));
// // "2-4-sportsball-sewing machine-"
// console.log( joinByReduce( '+', [1, 2, 3] ));
// "1+2+3+";


// Write a function countZeroes, which takes an array of numbers as its argument 
// and returns the amount of zeroes that occur in it. Use reduce.

// function countZeroes(arr) {
//     var newArr = []
//     var result = arr.reduce(function(accum, curr) {
//         if (curr === 0) {
//             newArr.push(curr)
//         }
//     })
//     return newArr.length
// }
// console.log(countZeroes([1, 2, 0, 12, 0, 3, 0]))

// var text =  'I may not have been sure about what really did interest me, ' +
//             'but I was absolutely sure about what didn\'t.';

// var pattern = /may/;
// console.log(pattern.exec(text).input)

/**
 * Regex ---------
 * word boundaries with /b beginning of word, end of word
 * ^ marks beginning of string, $ marks end of string
 * ^ if it's the first character in a bracket works as a not operator
 * ^ if it's a later character just counts as ^
 */
// var text  = 'I looked up at the mass of signs and stars in the night sky and laid myself open ' +
//             'for the first time to the benign indifference of the world.';

// var pattern = /\b\w{3}\b/g

// console.log(pattern.exec(text))

/*
    //Regex Q9
    //For the following strings, write an expression that matches and captures both the full date, 
    //as well as the year of the date.

    var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];
    var pattern = /\d{1,2}\/\d{1,2}\/\d{2,4}/g
    console.log(pattern.exec(dates))
*/

/*
    //Regex Q10
    var html = '<html><head>'+
    '<title>Simple</title>'+
    '</head><body>'+
    'Nothing to see here'+
    '</body></html>';

    var anHtmlTag = /<.+?>/g
    var m;

     
*/

//touch.js

// var fs = require('fs')

// fs.writeFile('/tmp/fs.tm', 'ABCDEF',function(err) {
//     if (err) throw err;
// })

/*
    //Q1
    // Load the fs (filesystem) module
    var fs = require('fs');

    // Read the contents of the file into memory.
    fs.readFile('dirlist.txt', function (err, logData) {

    // If an error occurred, throwing it will
    // display the exception and end our app.
    if (err) throw err;

    // logData is a Buffer, convert to string.
    var text = logData.toString();
    textRows = text.split('\n')
    textLog = []
    for (var i = 0; i < textRows.length; i++) {
        textLog.push(textRows[i].split(' '))
    }
    console.log(textLog)
    });
*/

/**
 * assert.strictEqual(val1, val2, message) compares if two value are strictly equal (===)
 * assert.equal(val1, val2, message) used only double equals for comparing two values
 * 
 * use code below for error handling
 * try {
 *    //code here
 * } catch (error) {
 *    //error handling here
 *    console.log(error)
 * }
 */

// "use strict";
// var assert = require("assert");
// var util = require("util");

// function Vector(x, y) {
//     this.x = x;
//     //this.y = y;
// }

  
// function test1(){
//     var p1 = new Vector(1, 2);

//     assert.strictEqual(p1.x, 1, "p1.x");
//     assert.strictEqual(p1.y, 2, "p1.y");
// }

// try {
//     test1();
// } catch (error){
//     console.log("--- Test Failed ---")
//     console.log(error.message + " should be " + error.expected + " but is " + error.actual );
//     console.log(error.stack.split("\n")[1])
// }

// "use strict";
// var assert = require("assert");

// function runTests(tests) {
//     var passed = 0;
//     var failed = 0;

//     tests.forEach(function(test){
//         try {
//             console.log()
//             console.log(test)
//             test();

//             passed += 1;
//         } catch (error) {
  
//             console.log("--- Test Failed ---")
//             console.log(error.message + " should be " + error.expected + " but is " + error.actual );
//             console.log(error.stack.split("\n")[1])

//             failed += 1;
//         }
//     })

//     console.log()
//     console.log("---Total---")
//     console.log(passed + " passed")
//     console.log(failed + " failed")
// }

// function Vector(x, y) {
//     this.x = x;
//     this.y = y
// }


// Vector.prototype.plus = function(other) {
//     return new Vector(this.x + other.x, this.y + other.y);
// };

// function test1(){
//     var p1 = new Vector(1, 2);

//     assert.strictEqual(p1.x, 1, "p1.x");
//     assert.strictEqual(p1.y, 2, "p1.y");
// }

// function test2() {
//   var p1 = new Vector(1, 2);
//   var p2 = new Vector(2, 4);
//   var p3 = p1.plus(p2);

//   assert.strictEqual(p3.x, 3, 'p3.x');
//   assert.strictEqual(p3.y, 6, 'p3.y');
// }

// var tests = [test1, test2];

// runTests(tests)

// function quadraticTime(characterNames) {
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//                 console.log("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j])
//         }
//     }
// }


// quadraticTime(["Agnes", "Bart", "Carl"])


// function logBoard(board){
//     for (var row = 0; row < board.length; row++){
//         for (var i = 0; i < board.length; row++) {

//         }
//         console.log(board[i])
//     }
//   }
  
  
//   var board = [ ["X", "O", "O"], 
//                 ["O", "X", "O"], 
//                 ["X", "O", "X"]  ]
// logBoard(board)  

// var readline = require('readline');
// var r = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function clear() {
//   process.stdout.write('\u001B[2J\u001B[0;0f');
// }

// var title = '\nEscape from Duck Dungeon\n';
//     title += '<--------------->\n\n';

// var map = [
//   ['c4q office', 'mobile class', 'fsw class', 'smash lounge'],
//   ['hallway', 'hallway', 'kitchen', 'hallway'],
//   ['other office 1', 'restrooms', 'elevator', 'other office 2']
// ];
// var turns = 7;
// var coordX = 0;
// var coordY = 2;

// clear();
// console.log( title );
// console.log('You must escape before you a killed by a duck!');
// console.log('Good luck.\n');
// console.log( 'You are in the ' + map[coordX][coordY].toUpperCase() + '.');
// r.setPrompt('enter N/S/E/W: ');
// r.prompt();

// r.on('line', function(input) {
//   console.log('');
//   if( !'nsewNSEW'.includes(input) ) {
//     console.log('bad input, minus one turn');
//   } else {
//     if ('sS'.includes(input)) {
//       coordX -= 1;
//     } else if ('nN'.includes(input)) {
//       coordX += 1;
//     } else if ('wW'.includes(input)) {
//       coordY -= 1;
//     } else if ('eE'.includes(input)) {
//       coordY += 1;
//     }
//   }
//   turns -= 1;

//   if (!map[coordX] || !map[coordX][coordY]) {
//     console.log('You fall to your death. Game over.');
//     return r.close();
//   }
//   console.log('You are in the ' + map[coordX][coordY].toUpperCase() + '.');

//   if (map[coordX][coordY] === 'elevator') {
//     console.log('You escape down the elevator. YOU WIN!');
//     console.log('(you hear the anguished cry of one giant duck)');
//     return r.close();
//   }

//   console.log('You have ' + turns + ' turns left.');
//   if (!turns) {
//     console.log('One giant duck eats you before you escape. Game over.');
//     return r.close();
//   }
//   r.prompt();
// });


/*
 *   Boilerplate
 */
'use strict';

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

// End of boilerplate

/**
 * @function returns a random number between min and max
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function getRandomNumber (min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

/**
 * @function Game
 * @param  {Number} number {the number to guess}
 * @param  {Number} triesLeft {number of attempts }
 * @param  {Boolean} win
 * @param  {String} message
 * @return {Game} a Game object
 */
function Game (number, triesLeft, gameOver, message) {
  var game = {
    number: number,
    triesLeft: triesLeft,
    gameOver: gameOver,
    message: message
  }
  return game
}

/**
 * @function updateGame
 * @param {Game}
 * @param {Number} guess
 * @param {Game} The updated game
 */
function updateGame (game, guess) {
var number = game.number
var triesLeft = game.triesLeft - 1
var message = ''
var gameOver
var isGuessed = (guesses.filter(function(el) {
    return el === guess
}))[0] === guess;


if (!triesLeft) {
    gameOver = true
    message = 'You lose!'
} else if (isGuessed) {
    message = 'You guessed this number already'
} else if (guess === number) {
    gameOver = true
    message = 'You win!'
} else if (guess < number) {
    gameOver = false
    message = 'Aim higher'
} else {
    gameOver = false
    message = 'Aim lower'

//   if (/**/) {
//       message = 'You tried this number already'
//   }
  }

  guesses.push(guess)
  var updatedGame = Game(number, triesLeft, gameOver, message)
  return updatedGame
}


/**
 *  Called when a user presses <Enter>
 */
rl.on('line', function (input) {
  var guess = Number(input)
  
  game = updateGame(game, guess)
  if (game.gameOver){
    render (game, '')
    process.exit()
  } else {
    render(game, 'guess a number')
  }
});

/**
 * Logs the game message and a prompt
 * @function
 * @param  {Game} game   
 * @param  {String} prompt 
 */
function render(game, prompt){
  clear()
  console.log(game.message)
  console.log(prompt)
  console.log('Your Attempts: ' + guesses.join(', '))
  console.log('Tries left: ' + game.triesLeft)
}


/**
 * Called when the user starts the game. Sets up the game object.
 * @function startGame 
 *
 */
function startGame(){
  var gameNumber = getRandomNumber(1, 10)
  var tries = 10
  var gameOver = false
  var message = 'Guess The Number'
  game = Game(gameNumber, tries, gameOver, message)

  render(game, 'guess a number')
}

var guesses = []
var game
startGame()