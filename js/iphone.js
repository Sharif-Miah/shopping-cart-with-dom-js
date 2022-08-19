
document.getElementById('iphone-incre-value').addEventListener('click', function () {
    const numberOfPhones = priceInProduct(true, 'iphone-input-field');
    QuentityPrice(numberOfPhones, 'iphone-price');

    const currentPhoneTotal = getTextElementById('iphone-price');
    const currentCaseTotal = getTextElementById('case-price');

    const totalItemMoney = currentPhoneTotal + currentCaseTotal;

    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = totalItemMoney;


})

document.getElementById('iphone-incre-decreses').addEventListener('click', function () {
    const numberOfPhones = priceInProduct(false, 'iphone-input-field');
    QuentityPrice(numberOfPhones, 'iphone-price');
})