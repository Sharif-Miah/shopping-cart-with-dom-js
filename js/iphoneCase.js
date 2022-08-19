
document.getElementById('btn-iphone-case-incre').addEventListener('click', function () {
    const numberOfPhonesCase = priceInProduct(true, 'iphone-case-Field');
    QuentityPriceCase(numberOfPhonesCase, 'case-price')
})

document.getElementById('btn-iphone-case-decre').addEventListener('click', function () {
    const numberOfPhonesCase = priceInProduct(false, 'iphone-case-Field');
    QuentityPriceCase(numberOfPhonesCase, 'case-price')
})