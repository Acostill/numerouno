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


// function showTasks(arr, func) {
//     for (var i = 0; i < arr.length; i++){
//         func(arr[i])
//     }
// }

// var films = []
// films.push(createFilm('Finding Nemo', 'Andrew Stanton and Lee Unkrich', 2003))
// films.push(createFilm('The Truman Show', 'Peter Weir', 1998))
// films.push(createFilm('The Usual Suspects', 'Bryan Singer', 1995))

// showTasks(films, function(film) {
//     console.log(film.released)
// })

//

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Task App')
rl.on('line', function(input) {
    var inputArr = input.split(' ')
    if (inputArr[0] === 'ADD') {
        //add task with input as description and completed = false'
        createTask(inputArr.slice(1, inputArr.length).join(' '))
        showTasks(tasks, function(task, index) {
            console.log(index + '. ' + task.title + ' Completed: ' + task.completed)
        })
    } else if (inputArr[0] === 'toggle') {
        //switch complete status for task
        toggle(inputArr[1])
        showTasks(tasks, function(task, index) {
            console.log(index + '. ' + task.title + ' Completed: ' + task.completed)
        })
    } else if (inputArr[0] === 'show') {
        //display tasks (options: all, active, completed)
        showTasks(tasks, function(task, index) {
            console.log(index + '. ' + task.title + ' Completed: ' + task.completed)
        }, inputArr[1])
    } else if (inputArr[0] === 'exit') {
        rl.close()
    } else {
        showValidCommands()
    }
})

var tasks = []

function createTask (title) {
    //create uncompleted task
    var task = {
      title: title,
      completed: false
    }
    tasks.push(task)
}

function toggle(index) {
    //toggle boolean of task.completed
    if (tasks[index] === undefined) {
        showValidCommands()
    } else {
        tasks[index].completed = !tasks[index].completed
    }
}

function showTasks(arr, callback, condition) {
    for (var i = 0; i < arr.length; i++){
        if (condition === 'all') {
            callback(arr[i], i)
        } else if (condition === 'active') {
            if (arr[i].completed === false) {
                callback(arr[i], i)
            }
        } else if (condition === 'completed') {
            if (arr[i].completed === true) {
                callback(arr[i], i)
            }
        }
    }
}

function showValidCommands () {
    console.log('Valid commands: \n' +
                'ADD <name of task> \n' +
                'toggle <task ID> \n' +
                'show <"all", "active", or "completed">')
}