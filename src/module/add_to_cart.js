// Добавить товар в корзину

function add_to_cart() {


    let shopCart = document.getElementsByClassName("shop-cart");


    let myFunction = function (evt) {
        evt.preventDefault();

        let title = this.parentNode.parentNode.querySelectorAll(".products__item-content .ttl");
        let price = this.parentNode.parentNode.querySelectorAll(".products__item-content .current-price");
        let image = this.parentNode.parentNode.querySelectorAll(".products__item-image img");
        let create_li = document.createElement('li');
        create_li.classList.add("add__items");

        create_li.innerHTML =

            '<div class="add__img">\
                            <img src="' + image[0].src + '" alt="">\
                        </div>\
                        <div class="add__product">\
                            <p class="add__product-title">' + title[0].innerText + '</p>\
                            <div class="add__product-inner">\
                                <div class="add__current-price"><span class="new-price">' + price[0].innerText + '</span>\
                                        <span>C</span>\
                                </div>\
                                <div class="product__old-price"><span class="old-price">60</span>\
                                        <span>C</span>\
                                </div>\
                                </div>\
                                <div class="product__weight-and-vendor">\
                                    <div class="product__weight">за 1 кг</div>\
                                    <div class="product__product-vendor-code">арт. 000423</div>\
                            </div>\
                        </div>\
                        <div class="add__delete"><i class="far fa-trash-alt"></i></div>';

        let block_cart = document.querySelector('.shoppingCart .shoppingCart__drop-items')
        block_cart.appendChild(create_li);

        alert("Товары успешно добавлены в корзину!");

        // // Удаление товаров
        // delete_product();
        // // Суммирование цен
        // sum_price();
        // // Количество товаров
        // count_product();
    };

    for (var i = 0; i < shopCart.length; i++) {
        shopCart[i].addEventListener('click', myFunction, false);
    }

}


module.exports = add_to_cart;