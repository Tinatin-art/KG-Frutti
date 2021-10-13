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