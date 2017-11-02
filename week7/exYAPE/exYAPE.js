document.addEventListener('click', function(event) {
    if (event.target.tagName.toUpperCase() === 'LI') {
        console.log(event.target)
    }
});