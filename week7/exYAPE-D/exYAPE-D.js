var list = document.querySelector('ol');
document.addEventListener('click', function(event) {
    if (event.target.tagName.toUpperCase() === 'LI') {
        console.log(event.target)
        var n = document.createElement('LI');
        n.innerHTML = event.target.innerHTML;
        list.appendChild(n);
    }
});

/**
 * var body = ...
 * var paragraph = create paragraph
 * 
 * body.appendChild(paragraph)
 */