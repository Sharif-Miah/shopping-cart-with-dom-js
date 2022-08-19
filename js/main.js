

function priceInProduct(totalPrice) {
    const phoneInputFifeld = document.getElementById('iphone-input-field');
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




