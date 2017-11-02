var blurbkey = 'allTheBlurb'
var appendblurb = document.querySelector('#appendblurb');
appendblurb.addEventListener('click', function(event) {
    var input = document.querySelector('#blurb');
    var allTheBlurb = document.querySelector('#alltheblurb');
    allTheBlurb.innerText += ' ' + input.value;
    window.localStorage.setItem('allTheBlurB', allTheBlurb.innerHTML);
    input.value = '';
});

var allTheBlurB = document.querySelector('#alltheblurb');
allTheBlurB.innerText = window.localStorage.getItem(blurbkey);

var clearblurb = document.querySelector('#clearblurb');
clearblurb.addEventListener('click', function(event) {
    var input = document.querySelector('#blurb');
    var allTheBlurb = document.querySelector('#alltheblurb');
    input.value = '';
    window.localStorage.setItem(blurbkey, '');
    allTheBlurB.innerText = '';
});
