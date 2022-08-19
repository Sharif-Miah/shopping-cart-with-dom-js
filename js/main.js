

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

function getTextElementById(valueId) {
    const totalProctuctMoneyString = document.getElementById(valueId);
    const totalProctuctMoney = parseInt(totalProctuctMoneyString.innerText);
    return totalProctuctMoney;
}

function setTextElementById(element, value) {
    const subtotalElement = document.getElementById(element);
    subtotalElement.innerText = value;
}


function calculateSubTotal() {
    const currentPhoneTotal = getTextElementById('iphone-price');
    const currentCaseTotal = getTextElementById('case-price');
    const totalItemMoney = currentPhoneTotal + currentCaseTotal;



    setTextElementById('sub-total', totalItemMoney);

    const taxtAmount = parseFloat((totalItemMoney * 0.1).toFixed(2));
    setTextElementById('tax', taxtAmount);

    const totalAmount = totalItemMoney + taxtAmount;
    setTextElementById('total-all', totalAmount);
    console.log(typeof totalAmount);


}