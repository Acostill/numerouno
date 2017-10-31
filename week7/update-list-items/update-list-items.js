var listNum = window.prompt("Please enter a list item number to change (a-z characters only)");

if (!listNum.length) {
    listNum = 'one';
}
var item = document.getElementById(listNum);
var update = window.prompt("Enter content that will overwrite this list item");
item.innerHTML = update;