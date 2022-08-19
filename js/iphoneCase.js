
document.getElementById('btn-iphone-case-incre').addEventListener('click', function () {
    const iphoneCaseInput = priceInProduct('iphone-case-Field');
    const iphoneCaseNum = iphoneCaseInput + 1;
    setElement('iphone-case-Field', iphoneCaseNum);



    const iphoneCaseQun = pricintText('case-price');
    const iphoneCasePrice = iphoneCaseQun * iphoneCaseNum;
    console.log(iphoneCasePrice);
    setElement('case-price', iphoneCasePrice)
})

document.getElementById('btn-iphone-case-decre').addEventListener('click', function () {
    const totalCaseNumber = priceInProduct('iphone-case-Field');
    const iphoneCaseDecres = totalCaseNumber - 1;
    setElement('iphone-case-Field', iphoneCaseDecres);
})