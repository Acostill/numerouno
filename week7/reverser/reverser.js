

// window.alert(message);
// document.getElementById('par').innerHTML = reverse;
document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById('submit');
    var p = document.querySelector("p");
    var form = document.querySelector("form");
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // console.log("testing");
        var message = document.querySelector("#text").value;
        console.log(message)
        
        p.innerText = message.split('').reverse().join('');

        // document.getElementById('par').innerHTML = reverse;
    });
})

