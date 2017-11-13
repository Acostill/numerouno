
var button = document.getElementById('joke-button');
var setUpDiv = document.querySelector('#setup')
var punchLineDiv = document.querySelector('#punchline');

function reqListener () {
    var joke = JSON.parse(this.responseText);
    setUpDiv.innerText = joke.setup
    punchLineDiv.innerText = '';
    setTimeout(function() {
        punchLineDiv.innerText = joke.punchline
    }, 3000)
    console.log(this.responseText);
}

button.addEventListener('click', function() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1");
    oReq.send();
})