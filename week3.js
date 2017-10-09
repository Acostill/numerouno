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

// var readline = require('readline')

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// console.log('Task App')
// rl.on('line', function(input) {
//     var inputArr = input.split(' ')
//     if (inputArr[0] === 'ADD') {
//         //add task with input as description and completed = false'
//         createTask(inputArr.slice(1, inputArr.length).join(' '))
//         showTasks(tasks, function(task, index) {
//             console.log(index + '. ' + task.title + ' Completed: ' + task.completed)
//         })
//     } else if (inputArr[0] === 'toggle') {
//         //switch complete status for task
//         toggle(inputArr[1])
//         showTasks(tasks, function(task, index) {
//             console.log(index + '. ' + task.title + ' Completed: ' + task.completed)
//         })
//     } else if (inputArr[0] === 'show') {
//         //display tasks (options: all, active, completed)
//         showTasks(tasks, function(task, index) {
//             console.log(index + '. ' + task.title + ' Completed: ' + task.completed)
//         }, inputArr[1])
//     } else if (inputArr[0] === 'exit') {
//         rl.close()
//     } else {
//         showValidCommands()
//     }
// })

// var tasks = []

// function createTask (title) {
//     //create uncompleted task
//     var task = {
//       title: title,
//       completed: false
//     }
//     tasks.push(task)
// }

// function toggle(index) {
//     //toggle boolean of task.completed
//     if (tasks[index] === undefined) {
//         showValidCommands()
//     } else {
//         tasks[index].completed = !tasks[index].completed
//     }
// }

// function showTasks(arr, callback, condition) {
//     for (var i = 0; i < arr.length; i++){
//         if (condition === 'all') {
//             callback(arr[i], i)
//         } else if (condition === 'active') {
//             if (arr[i].completed === false) {
//                 callback(arr[i], i)
//             }
//         } else if (condition === 'completed') {
//             if (arr[i].completed === true) {
//                 callback(arr[i], i)
//             }
//         }
//     }
// }

// function showValidCommands () {
//     console.log('Valid commands: \n' +
//                 'ADD <name of task> \n' +
//                 'toggle <task ID> \n' +
//                 'show <"all", "active", or "completed">')
// }

//Dates and time

// var birthDate = new Date(1993, 11, 9)
// birthDate.setDate(birthDate.getDate() + 180)
// console.log(birthDate.toString())

// var date = new Date(2016, 2, 14, 3, 12)

// console.log(date.toString())

// var date = new Date(2012, 0, 3);
// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// function getWeekDay(date) {
//     return days[date.getDay()]
// }
// console.log(getWeekDay(date));

// var today = new Date(2015, 0 , 1)

// function getDateBefore (date, days) {
//     var beforeDate = new Date(date);
//     beforeDate.setDate(today.getDate() - days)
//     return beforeDate.toString()
// }

// console.log(getDateBefore(today, 15))

// function getLastDayOfMonth (year, month) {
//     var date = new Date(year, month)
//     var lastDay = new Date(date)
//     lastDay.setMonth(date.getMonth() + 1)
//     lastDay.setDate(lastDay.getDate() - 1)
//     return lastDay.toString()
// }

// console.log(getLastDayOfMonth(2012, 1))

// var months = ['January', 'February', 'March', 'April', 
//               'May', 'June', 'July', 'August', 'September', 
//               'October', 'November' , 'December'];

// var date = new Date(2017, 5)

// function nameOfMonth (dateObj) {
//     var index = dateObj.getMonth().toString()
//     return months[index]
// }

// console.log(nameOfMonth(date))

// function getSecondsToday() {
//     var today = new Date()
//     today.setHours(0, 0, 0)
//     var midnight = today.getTime()
//     var currentHour = new Date().getTime()
//     return ((currentHour - midnight)/1000)
// }

// console.log(getSecondsToday())

// function getSecondsToTomorrow() {
//     var today = new Date()
//     var tomorrow = new Date(today)
//     tomorrow.setDate(today.getDate() + 1)
//     tomorrow.setHours(0, 0, 0)
//     return ((tomorrow.getTime() - today.getTime()) / 1000)
// }

// console.log(getSecondsToTomorrow())

//another way of creating objects

// function Dog (name, breed, weight) {
//     // this = {}
//     this.name   = name;
//     this.breed  = breed;
//     this.weight = weight;
//     //return this
// }

// var pluto = new Dog("Charlie", "Mixed", 38)
// console.log(pluto.name)

/**
 * functions themselves have properties
 * for function dog () {} will return a value
 * All functios also have a property called prototype
 * Prototype property is an empty object
 * Functions also have a property called constructor
 */

//  function Rabbit (type) {
//      this.type = type;
//  }

//  var killerRabbit = new Rabbit("killer");
//  var kr = {
//      type: 'killer'
//  }

//  console.log(kr)
//  console.log(killerRabbit)

function Vector (x, y) {
    this.x = x
    this.y = y
}

Vector.prototype.plus = function (vec) {
    this.x += vec.x
    this.y += vec.y
    return this
}

Vector.prototype.minus = function (vec) {
    this.x -= vec.x
    this.y -= vec.y
    return this
}

Vector.prototype.getLength = function (vec) {
    return Math.sqrt(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2))
}

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
var v3 = new Vector(3, 4)
//v1.minus(v2)
console.log(v3.getLength())