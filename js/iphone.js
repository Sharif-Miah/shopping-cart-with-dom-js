
document.getElementById('iphone-incre-value').addEventListener('click', function () {
    const numberOfPhones = priceInProduct(true, 'iphone-input-field');
    QuentityPrice(numberOfPhones, 'iphone-price');



})

document.getElementById('iphone-incre-decreses').addEventListener('click', function () {
    const numberOfPhones = priceInProduct(false, 'iphone-input-field');
    QuentityPrice(numberOfPhones, 'iphone-price');
})