

function priceInProduct(totalPrice, numbersIdField) {
    const phoneInputFifeld = document.getElementById(numbersIdField);
    const phonenumbers = parseInt(phoneInputFifeld.value)
    let nweCaseNumber;
    if (totalPrice === true) {
        nweCaseNumber = phonenumbers + 1;
    } else {
        nweCaseNumber = phonenumbers - 1;
    }
    phoneInputFifeld.value = nweCaseNumber;
    return nweCaseNumber;
}

function QuentityPrice(numberOfPhones, price) {
    const pricInIphone = numberOfPhones * 1219;
    const totalMoney = document.getElementById(price);
    totalMoney.innerText = pricInIphone;
}
function QuentityPriceCase(numberOfPhones, price) {
    const pricInIphone = numberOfPhones * 59;
    const totalMoney = document.getElementById(price);
    totalMoney.innerText = pricInIphone;
}



