// var readline = require('readline');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function accum(numbers, callback) {
//     var result = numbers[0]
//     for (var i = 1; i < numbers.length; i++) {
//         result = callback(result, numbers[i])
//     }
//     return result
// }

// var operations = {
//     '+': function (a, b) { return a + b },
//     '-': function (a, b) { return a - b },
//     '/': function (a, b) { return a / b },
//     '*': function (a, b) { return a * b },
//     '**': function (a, b) { return Math.pow(a, b) },
// }

// rl.on('line', function (input) {
//     var inputArr = input.split(' ')
//     console.log('Input array is: ' + inputArr)
//     var opr = inputArr[0]

//     if (!operations[opr]) {
//         console.log('Valid expression must be: "operator num1 num2 num3..."' +
//             '\nValid operators are "+ - * /"');
//     } else {
//         for (var i = 1; i < inputArr.length; i++) {
//             if (isNaN(inputArr[i])) {
//                 console.log('Valid expression must be: "operator num1 num2 num3..."' +
//                     '\nValid operators are "+ - * /"');
//                 return;
//             } else {
//                 inputArr[i] = Number(inputArr[i])
//             }

//         }

//         var numbers = inputArr.slice(1)
//         console.log(accum(numbers, operations[opr]))
//     } 
// })


// /**
//  * @function addFilm
//  * @param  {string} name
//  * @param  {string} director
//  * @param  {number} released
//  */
// function createFilm(name, director, released){
//     var film = {
//         name: name,
//         director: director,
//         released: released
//     }

//     return film;
// }


// function forEachElem(arr, func) {
//     for (var i = 0; i < arr.length; i++){
//         func(arr[i])
//     }
// }

// var films = []
// films.push(createFilm('Finding Nemo', 'Andrew Stanton and Lee Unkrich', 2003))
// films.push(createFilm('The Truman Show', 'Peter Weir', 1998))
// films.push(createFilm('The Usual Suspects', 'Bryan Singer', 1995))

// forEachElem(films, function(film) {
//     console.log(film.released)
// })

//

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(input) {
    var inputArr = input.split(' ')
    if (inputArr[0] === 'ADD') {
        //add task with input as description and completed = false
    } else if (inputArr[0] === 'exit') {
        rl.close()
    } else {
        console.log('IGNORED!!')
    }
})

function createTask (title, completed){
    var task = {
      title: title,
      completed: completed
    }
    return task
}

function forEachElem(arr, callback) {
    for (var i = 0; i < arr.length; i++){
        callback(arr[i], i)
    }
}

var tasks = []
tasks.push(createTask("walk dog", false))
tasks.push(createTask("wash cat", false))

forEachElem(tasks, function(task, index) {
    console.log(index + '. ' + task.title + ' Completed: ' + task.completed)
})