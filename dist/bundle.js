/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/add_to_cart.js":
/*!***********************************!*\
  !*** ./src/module/add_to_cart.js ***!
  \***********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/module/count_product.js":
/*!*************************************!*\
  !*** ./src/module/count_product.js ***!
  \*************************************/
/***/ ((module) => {

// Считает количество товаров

function count_product() {
    let count_product = document.querySelectorAll('.add__items').length;
    document.querySelector('.shoppingCart__score-cart').innerHTML = count_product;
}

module.exports = count_product;

/***/ }),

/***/ "./src/module/delete_product.js":
/*!**************************************!*\
  !*** ./src/module/delete_product.js ***!
  \**************************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/module/script.js":
/*!******************************!*\
  !*** ./src/module/script.js ***!
  \******************************/
/***/ ((module) => {

function script() {
    function openNav() {
        document.querySelector('.header-menu').style.display = "block";
        document.querySelector('.header_burger').style.display = "none";
    }

    function closeNav() {
        document.querySelector('.header-menu').style.display = "none";
        document.querySelector('.header_burger').style.display = "block";
    }

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


    // Меню бургер Сайдбар

    const burgerMenuBtn = document.querySelector(".burger-btn");
    const burgerMenu = document.querySelector('.header__menu');
    const burgerDeleteBtn = document.querySelector('.burger__delete');


    burgerMenuBtn.addEventListener("click", function () {
        burgerMenu.style.display = "block"
    })

    burgerDeleteBtn.addEventListener("click", function () {
        burgerMenu.style.display = "none"
    })

}

module.exports = script;

/***/ }),

/***/ "./src/module/slide.js":
/*!*****************************!*\
  !*** ./src/module/slide.js ***!
  \*****************************/
/***/ ((module) => {

// Слайд о нас

function slide() {


    const upBtn = document.querySelector('.up-button');
    const downBtn = document.querySelector('.down-button');
    const sidebar = document.querySelector('.aboutUs__sidebar');
    const mainSlider = document.querySelector('.aboutUs__main-slide');
    const container = document.querySelector('.aboutUs__container');
    const SlidesCount = mainSlider.querySelectorAll('div').length;

    sidebar.style.top = `-${(SlidesCount - 1) * 80}vh`;

    let activeSlideIndex = 0;

    upBtn.addEventListener('click', () => {
        changeSlide('up');
    });

    downBtn.addEventListener('click', () => {
        changeSlide('down');
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowUp') {
            changeSlide('up');
        } else if (event.key === 'ArrowDown') {
            changeSlide('down');
        }
    });

    function changeSlide(deriction) {
        if (deriction === 'up') {
            activeSlideIndex++;
            if (activeSlideIndex === SlidesCount) {
                activeSlideIndex = 0;
            }
        } else if (deriction === 'down') {
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = SlidesCount - 1;
            }
        }
        const height = container.clientHeight;

        mainSlider.style.transform = `translateY(-${activeSlideIndex * height}px)`;
        sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;

    }

}

module.exports = slide;

/***/ }),

/***/ "./src/module/sum_price.js":
/*!*********************************!*\
  !*** ./src/module/sum_price.js ***!
  \*********************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(function () {

    const add_to_cart = __webpack_require__(/*! ./module/add_to_cart */ "./src/module/add_to_cart.js"),
        count_product = __webpack_require__(/*! ./module/count_product */ "./src/module/count_product.js"),
        delete_product = __webpack_require__(/*! ./module/delete_product */ "./src/module/delete_product.js"),
        sum_price = __webpack_require__(/*! ./module/sum_price */ "./src/module/sum_price.js"),
        slide = __webpack_require__(/*! ./module/slide */ "./src/module/slide.js"),
        script = __webpack_require__ (/*! ./module/script */ "./src/module/script.js")

    add_to_cart();
    delete_product();
    sum_price();
    count_product();
    slide();
    script();
}());
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map