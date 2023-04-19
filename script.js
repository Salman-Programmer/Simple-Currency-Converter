var convertBtn = document.getElementById('convertBtn');
convertBtn.onclick = function () {
    var money = document.getElementById('money').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    var exchangeRates = {
        USD: 1,
        EUR: 0.91,
        GBP: 0.80,
        PKR: 280,
        INR: 82.17,
        CAD: 1.34,
        AUD: 1.48,
        CHF: 0.89,
        CNY: 6.88,
        TRY: 19.40,
        JPY: 134,
        KWD: 0.306,
        PHP: 56.36,
        VEF: 2450670.59,
        SGD: 1.33,
        BGN: 1.78,
        NZD: 1.61,
        AED: 3.67

    };

    var result = (money * exchangeRates[to] / exchangeRates[from]).toFixed(2);

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = money + ' ' + from + ' = ' + result + ' ' + to;
};