var input = window.prompt("Please enter a number");
if (input.length === 0) {
    window.alert("No input!");
}
else if (isNaN(input)) {
    window.alert("That is not a number!")
}
else if (Number(input) % 2 === 0) {
    window.alert("That number is even");
} else {
    window.alert("That number is odd");
}