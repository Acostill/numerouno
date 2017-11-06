var outputDiv;

var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var operators = ['+','-','*','/'];
var operations = ['add','sub','mul','div'];

// function eval(mathExp) {
//     var result;
//     for (var i = 0; i < operators.length; i++) {
//         if (operators[i].includes(mathExp)) {
//             mathExp.split(operators[i]);
//             console.log(mathExp);
//         }
//     }
// }
/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp){
    try {
       return eval(mathExp);
    } catch (e) {
       return NaN;
    }
}


document.addEventListener('DOMContentLoaded', function() {
  outputDiv = document.getElementById('output');

  document.addEventListener('click', function(event) {
    var elementId = event.target.id;
    if (numbers.includes(elementId)) {
        outputDiv.innerText += elementId;
    } else if (operations.includes(elementId)) {
        switch (elementId) {
            case 'add':
                outputDiv.innerText += '+';
                break;
            case 'sub':
                outputDiv.innerText += '-';
                break;
            case 'mul':
                outputDiv.innerText += '*';
                break;
            case 'div':
                outputDiv.innerText += '/';
                break;
        }
    } else if (elementId === 'clr') {
        outputDiv.innerText = '';
    } else if (elementId === 'eq') {
        outputDiv.innerText = calculate(outputDiv.innerText);
    }
    //outputDiv.innerText += elementId;
    // logging the element id for debug purposes
    console.log(elementId);
  })
})


//Dave's Code below
/*

var outputWidth;
var outputDiv;
var output;
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'Width']
var checkopr = /[+-/*]/;
var checknum = /[0-9]/;


/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 * /
function calculate(mathExp) {
    try {
        return eval(mathExp)
    } catch (e) {
        return NaN
    }
}


document.addEventListener('DOMContentLoaded', function () {
    outputWidth = document.getElementById('outputWidth');
    outputDiv = document.getElementById('output')
    document.addEventListener('click', function (event) {
        var elementId = event.target.id;
        var input = outputWidth.innerText
        switch (elementId) {
            // Clicking on the "=" runs calculate() on the innertextbox
            case "eq":
                if (input[input.length - 1].match(checkopr)) {
                    input = input.slice(0, input.length - 1);
                }
                outputWidth.innerText = calculate(input);
                break;
            case "clr":
            // Clicking on the "clr" clears the innertextbox
                outputWidth.innerText = "";
                break;
        }
        // As long as the inputbox's width < 85% of the inputbox's div,
        // all keys that are presseddown that are numbers are added into innertext
        // box. If the keys are operators, as long as there isnt one already
        // and a first character already exists, add operator into inner textbox
        if (outputWidth.clientWidth <= outputDiv.clientWidth * .85) {
            console.log(outputWidth.clientWidth, outputDiv.clientWidth * .85)
            if (numbers.includes(elementId)) {
                output = numbers[numbers.indexOf(elementId)];
                outputWidth.innerText += output;
            } else if (operations.indexOf(elementId) > -1) {
                if (!input[input.length - 1].match(checkopr) && input[0]) {
                    output = operators[operations.indexOf(elementId)];
                    outputWidth.innerText += output;
                }
            }
        }
    })
    document.addEventListener("keydown", function (event) {
        var key = event.key
        console.log(key);
        var input = outputWidth.innerText
        switch (key) {
            //"Enter" runs calculate() for the equation in the innertext box
            case "Enter":
                if (input[input.length - 1].match(checkopr)) {
                    input = input.slice(0, input.length - 1);
                }
                outputWidth.innerText = calculate(input);
                break;
            case "Backspace":
            // Slices the the innertext box minus the last character
                outputWidth.innerText = input.slice(0, input.length - 1);
                break;
            case "c":
            // "c" clear
                outputWidth.innerText = "";
                break;
        }
        // As long as the inputbox's width < 85% of the inputbox's div,
        // all keys that are clicked (numbers) are added into innertext
        // box. If operators are clicked, as long as there isnt one already
        // and a first character already exists, add operator into inner textbox
        if (outputWidth.clientWidth <= outputDiv.clientWidth * .85) {
            console.log(outputWidth.clientWidth, outputDiv.clientWidth * .85)
            if (numbers.includes(key)) {
                output = numbers[numbers.indexOf(key)];
                outputWidth.innerText += output;
            } else if (operators.includes(key)) {
                if (!input[input.length - 1].match(checkopr) && input[0]) {
                    outputWidth.innerText += key;
                }
            }
        }
    })
})
 */