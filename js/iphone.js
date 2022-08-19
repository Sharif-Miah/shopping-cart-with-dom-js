
document.getElementById('iphone-incre-value').addEventListener('click', function () {
    const iphoneInput = priceInProduct('iphone-input-field');
    const numberOfIphoneIncrese = iphoneInput + 1;
    setElement('iphone-input-field', numberOfIphoneIncrese)
})

document.getElementById('iphone-incre-decreses').addEventListener('click', function () {
    const currentIphoneNumber = priceInProduct('iphone-input-field')

    const numberOfIphoneDecrese = currentIphoneNumber - 1;

    setElement('iphone-input-field', numberOfIphoneDecrese);
})