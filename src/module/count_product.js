// Считает количество товаров

function count_product() {
    let count_product = document.querySelectorAll('.add__items').length;
    document.querySelector('.shoppingCart__score-cart').innerHTML = count_product;
}

module.exports = count_product;