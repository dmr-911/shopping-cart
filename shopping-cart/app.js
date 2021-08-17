function updatePhone(buttonId, isIncreasing, price) {
    const update = document.getElementById(buttonId + '-increment-decrement');
    let value = update.value;
    if (isIncreasing) {
        value = parseInt(value) + 1;
    }
    else if(value > 0){
        value = parseInt(value) - 1;
    }
    update.value = value;
    const productPrice = document.getElementById(buttonId + '-price');
    productPrice.innerText = price * value;
    totalAmount();
}
function product(amountId) {
    const subTotal = document.getElementById(amountId + '-increment-decrement');
    const subTotalAmount = parseFloat(subTotal.value);
    return subTotalAmount;
}
function totalAmount() {
    const phoneTotal = product("phone") * 1259;
    const caseTotal = product("case") * 59;
    const subTotal = document.getElementById('sub-total');
    const subTotalAmount = phoneTotal + caseTotal;
    subTotal.innerText = subTotalAmount;
    const tax = subTotalAmount / 10;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = subTotalAmount + tax;
}
document.getElementById('add-phone-button').addEventListener('click', function () {
    updatePhone("phone", true, 1219);
})
document.getElementById('phone-minus-button').addEventListener('click', function () {
    updatePhone("phone", false, 1219);
})
document.getElementById('add-case-button').addEventListener('click', function () {
    updatePhone("case", true, 59);
})
document.getElementById('case-minus-button').addEventListener('click', function () {
    updatePhone("case", false, 59);
})