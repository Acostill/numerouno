// var muffinkey = 'muffinCnt';

// function muffinChange(n) {
//     window.localStorage.setItem(muffinKey, window.localStorage.getItem(muffinkey) + n);
//     document
//         .querySelector('#muffincnt')
//         .innerText = window.localStorage.getItem(muffinkey);
// }

// document
//     .querySelector('#eat')
//     .addEventListener('click',
//         function(event) {
//             muffinChange(-1)
//         }
//     );

// document
//     .querySelector('#bake')
//     .addEventListener('click',
//         function(event) {
//             muffinChange(5)
//         }
//     );

document.addEventListener('DOMContentLoaded', function(event) {
    var countEl = document.getElementById("count");
    var count = Number(window.localStorage.getItem('countKey'));
    var eat = document.getElementById("eat");
    var bake = document.getElementById("bake");
    
    console.log('countEl.innerText is : ' + countEl.innerText)
    console.log('count is: ' + count);
    console.log(eat);
    console.log(bake);
    console.log(window.localStorage.getItem('countKey'))
    if (window.localStorage.getItem('countKey') !== null) {
        countEl.innerText = count;
    } else {
        count = Number(countEl.innerText);
    }
    eat.addEventListener('click', function (event) {
        if (count > 0) {
            count--
            countEl.innerText = count;
            window.localStorage.setItem('countKey', countEl.innerText);
            console.log('count is : ' + count);
        }
    });
    
    document.getElementById('bake').addEventListener('click', function (event) {
         count += 5;
         countEl.innerText = count
         window.localStorage.setItem('countKey', countEl.innerText);
         console.log('count is: ' + count);
    });
});


