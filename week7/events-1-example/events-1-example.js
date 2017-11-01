document.addEventListener('mousemove', function(event) {
    document.getElementById('coords').innerHTML = 'Coordinate X: ' + event.clientX + ' Coordinate Y: ' + event.clientY;
})
