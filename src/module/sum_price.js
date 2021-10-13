// Суммировать цены товара
function sum_price() {
    var count_price = document.querySelectorAll('.add__current-price .new-price')

    var result = 0;

    for (var i = 0; i < count_price.length; i++) {
        result = result + (+count_price[i].textContent);

    }
    document.querySelector('.shoppingCart__score .shoppingCart__score-price').innerHTML = result;
    document.querySelector(".shoppingCart__drop-total .total-price").innerHTML = result;
}


module.exports = sum_price;