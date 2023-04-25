document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelectorAll('.itc-slider'),
          sliderWrapper = document.querySelectorAll('.itc-slider__wrapper'),
          sliderItems = document.querySelectorAll('.itc-slider__items'),
          sliderItem = document.querySelectorAll('.itc-slider__item'),
          sliderItemActive = document.querySelectorAll('.itc-slider__item_active');

    function removeClass (arr, removableClass, addedClass) {
        arr.forEach(item =>{
            item.classList.remove(removableClass);
            item.classList.add(addedClass);
        });
    }

    if (document.documentElement.clientWidth < 1140) {
        removeClass (slider, 'itc-slider', 'reviews__wrapper');
        removeClass (sliderWrapper, 'itc-slider__wrapper');
        removeClass (sliderItems, 'itc-slider__items', 'reviews__slider-inner');
        removeClass (sliderItem, 'itc-slider__item', 'reviews__item-without-slider');
        removeClass (sliderItemActive, 'itc-slider__item_active', 'reviews__item-without-slider')
        ;
    }
});