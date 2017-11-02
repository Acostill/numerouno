var textarea = document.querySelector('#textarea')
textarea.addEventListener('input', function() {
    window.localStorage.setItem('mykey', textarea.value)
});

textarea.value = window.localStorage.getItem('mykey');