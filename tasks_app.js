
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
    } else if (inputArr[0] === 'toggle') {
        //switch complete status for task
        toggle(inputArr[1])
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
        } else {
            showValidCommands()
        }
    }
}

function showValidCommands () {
    console.log('Valid commands: \n' +
                'ADD <name of task> \n' +
                'toggle <task ID> \n' +
                'show <"all", "active", or "completed"> \n' + 
                'exit')
}