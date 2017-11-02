var muffinkey = 'muffinCnt';

function muffinChange(n) {
    window.localStorage.setItem(muffinKey, window.localStorage.getItem(muffinkey) + n);
    document
        .querySelector('#muffincnt')
        .innerText = window.localStorage.getItem(muffinkey);
}

document
    .querySelector('#eatone')
    .addEventListener('click',
        function(event) {
            muffinChange(-1)
        }
    );

document
    .querySelector('#bakefive')
    .addEventListener('click',
        function(event) {
            muffinChange(5)
        }
    );