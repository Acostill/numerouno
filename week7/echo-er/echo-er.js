document.addEventListener('keypress', function(event) {
    var htag = document.getElementById('htag');
    var node = document.createTextNode(event.key)
    htag.appendChild(node);
    console.log(event.key.toUpperCase());
    if (/[A-Z]/.test(event.key)) {
        htag.style.textDecoration = 'underline';
    }

    if (event.key === '.' ||
        event.key === '?' ||
        event.key === '!') {
            htag.style.textDecoration = 'none';
        }
})