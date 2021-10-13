// Удалить товар
function delete_product() {
    let click_trash = document.querySelectorAll('.add__delete');

    for (var i = 0; i < click_trash.length; i++) {
        click_trash[i].addEventListener('click', del_func, false);
    }

    function del_func(evt) {
        evt.preventDefault();

        this.parentNode.remove();

        // Отнимать цены от суммы
        sum_price();
        // Отнимать количество товаров
        count_product();
    }
}


module.exports = delete_product;