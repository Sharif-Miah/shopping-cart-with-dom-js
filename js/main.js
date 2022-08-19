

function priceInProduct(price) {
    const inputField = document.getElementById(price);
    const inputFieldConvertNum = parseInt(inputField.value);
    return inputFieldConvertNum;
}


function setElement(element, mainValue) {
    const phoneNumberValue = document.getElementById(element);
    const phoneValue = phoneNumberValue.value = mainValue;
    return phoneValue;
}