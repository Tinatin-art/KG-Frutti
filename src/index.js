(function () {

    const add_to_cart = require('./module/add_to_cart'),
        count_product = require('./module/count_product'),
        delete_product = require('./module/delete_product'),
        sum_price = require('./module/sum_price'),
        slide = require('./module/slide'),
        script = require ('./module/script'),
        menuBurger = require ('./module/menu_burger')

    add_to_cart();
    delete_product();
    sum_price();
    count_product();
    slide();
    script();
    menuBurger();
}());