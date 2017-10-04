var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function accum(numbers, callback) {
    var result = numbers[0]
    for (var i = 1; i < numbers.length; i++) {
        result = callback(result, numbers[i])
    }
    return result
}

var operations = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b },
    '**': function (a, b) { return Math.pow(a, b) },
}

rl.on('line', function (input) {
    var inputArr = input.split(' ')
    console.log('Input array is: ' + inputArr)
    var opr = inputArr[0]

    if (!operations[opr]) {
        console.log('Valid expression must be: "operator num1 num2 num3..."' +
            '\nValid operators are "+ - * /"');
    } else {
        for (var i = 1; i < inputArr.length; i++) {
            if (isNaN(inputArr[i])) {
                console.log('Valid expression must be: "operator num1 num2 num3..."' +
                    '\nValid operators are "+ - * /"');
                return;
            } else {
                inputArr[i] = Number(inputArr[i])
            }

        }

        var numbers = inputArr.slice(1)
        console.log(accum(numbers, operations[opr]))
    }
})