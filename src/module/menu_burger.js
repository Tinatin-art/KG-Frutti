function menuBurger(){

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

module.exports = menuBurger;