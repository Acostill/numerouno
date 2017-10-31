var input1 = window.prompt("Please enter a list item number to swap (a-z characters only)");
var input2 = window.prompt("Please enter a list item number to swap (a-z characters only)");

var item1 = document.getElementById(input1).innerHTML;
var item2 = document.getElementById(input2).innerHTML;

document.getElementById(input1).innerHTML = item2;
document.getElementById(input2).innerHTML = item1;