function updateProduct(product, price, isIncrease){
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value
    if(isIncrease){
        productNumber = parseInt(productNumber) + 1
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price

    //calculating total price
    calculateTotal()

}
function getInput(product){
    const productInput = document.getElementById(product+'-number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}

function calculateTotal(){
    const phoneTotal = getInput('phone') * 1219;
    const caseTOtal = getInput('case') * 59

    const subTotal = phoneTotal + caseTOtal
    document.getElementById('sub-total').innerText = subTotal

    const tax = subTotal / 10
    document.getElementById('tax-amount').innerText = tax

    const total = subTotal + tax
    document.getElementById('total-price').innerText = total
}
//phone
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProduct('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProduct('phone', 1219,false)
})

//case
document.getElementById('case-plus').addEventListener('click',function(){
    updateProduct('case', 59,true)
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProduct('case', 59, false)
})