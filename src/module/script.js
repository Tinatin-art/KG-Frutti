function script() {
    // Обявление переменных
    const searchForm = document.forms['search-item'];

    const searchBtn1 = document.forms['search-item'].querySelector("#search-btn");
    const deleteBtn = document.forms['search-item'].querySelector("#delete-btn");
    const searchItem = searchForm.querySelector('input');

    const searchBtn = searchForm.querySelector("#search-btn");
    const filterItems = document.querySelectorAll('.products__item');
    const previousBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");


    // Shopping cart
    let shoppingCart = document.querySelector('.shoppingCart');
    shoppingCart.onclick = function () {
        this.classList.toggle('open');
    };

    // Скрол для корзины
    document.querySelector('.shoppingCart').addEventListener('scroll', () => {
        console.log('scrolled');
    });

    // Перебираем овощи и фрукты нажав на кнопки
    document.querySelector('.nav').addEventListener('click', event => {
        if (event.target.tagName !== 'LI') return false;

        let filterClass = event.target.dataset['f'];

        filterItems.forEach(elem => {
            elem.classList.remove('hide');
            if (!elem.classList.contains(filterClass)) {
                elem.classList.add('hide');
            }
        });
    });


    // Найти через поиск товаров
    searchBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const term = searchItem.value.toLowerCase();
        const items = document.querySelectorAll('.elastic > li .ttl');
        Array.from(items).forEach(function (book) {
            const title = book.innerText;
            if (title.toLowerCase().indexOf(term) !== -1) {
                book.parentElement.parentElement.classList.remove('hide');
            } else {
                book.parentElement.parentElement.classList.add('hide');
            }
        });

    });

    // Скрыть иконку поиск и вывести иконку удалить 
    searchBtn1.addEventListener('click', function (e) {
        e.preventDefault();

        document.getElementById('elastic').value = "";
        deleteBtn.style.display = 'block';
        searchBtn1.style.display = 'none';



    });

    // Удалить текст инпут и поменять иконки
    // При пустом поле инпута вернуть все товары
    deleteBtn.addEventListener('click', function (del) {
        del.preventDefault();


        document.getElementById('elastic').value = "";
        // del.remove();
        deleteBtn.style.display = 'none';
        searchBtn1.style.display = 'block';

        const term = searchItem.value.toLowerCase();
        const items = document.querySelectorAll('.elastic > li .ttl');
        Array.from(items).forEach(function (book) {
            const title = book.innerText;
            book.parentElement.parentElement.classList.remove('hide');
        });

    });

}

module.exports = script;