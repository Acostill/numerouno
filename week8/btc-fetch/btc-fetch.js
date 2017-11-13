document.addEventListener('DOMContentLoaded', function () {
    Array.from(document.querySelector('.convert')).map(function(element) {
        element.addEventListener('click', function(event) {
            fetch('https://api.coindesk.com/v1/bpi/currenprice.json')
            .then(function(response) {
                return response.json()
            }).then(function(currentPrice) {
                var usdRate = currentPrice.bpi.USD.rate_float;
                var valueEntered = Number(document.querySelector('#num').value);
                var result;
                if (event.target.id === 'usdbtc') {
                    result = 'Value of ' + valueEntered + ' USD is ' + (valueEntered / usdRate)
                } else {
                    result = 'Value of ' + valueEntered + ' BTC is ' + (valueEntered * usdRate)
                }
                var p = document.createElement('p')
                p.innerText = result;
                p.classList.add('history');
                document.querySelector('body').insertBefore(
                    p,
                    document.querySelector('.history')
                )
            })
        })
    })
})