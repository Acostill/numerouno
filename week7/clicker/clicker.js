var body = document.querySelector("body");
body.addEventListener('click', function(event) {
    var mid = window.innerWidth/2;
    if (event.clientX < mid) {
        body.style.backgroundColor = "mediumaquamarine"
    } else if (event.clientX > mid ) {
        body.style.backgroundColor = "peachpuff"
    }
});