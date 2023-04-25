'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.reviews__item-wrapper'),
        //   slider.querySelector(),
          prev = document.querySelector('.reviews__toggle-dot_active'),
          next = document.querySelector('.reviews__toggle-dot'),
          slidesWrapper = document.querySelector('.reviews__wrapper'),
          slidesField = document.querySelector('.reviews__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length/2 + '%';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    // slides.forEach(slide => {
    //     slide.style.width = width;
    // });

    slidesWrapper.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots =[];
    indicators.classList.add('reviews__carousel-indicators');
    slidesWrapper.append(indicators);

    for (let i = 0; i<slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('reviews__toggle-dot');
        if (i == 0) {
            dot.classList.add('reviews__toggle-dot_active');
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length -2) * (slides.length -1)){
            offset = 0;
        } else {
            offset += +width.slice(0, width.length -2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0){
            offset = +width.slice(0, width.length -2) * (slides.length - 1);            
        } else {
            offset -= +width.slice(0, width.length -2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    // dots.forEach(dot => {
    //     dot.classList.add('reviews__toggle-dot');
    //     dot.classList.remove('reviews__toggle-dot_active');
    //     dots[slideIndex - 1].classList.add('reviews__toggle-dot_active');
    // });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            dot.classList.add('reviews__toggle-dot');
            dot.classList.remove('reviews__toggle-dot_active');
            dots[slideIndex - 1].classList.add('reviews__toggle-dot_active');

            
        });
    });

    // showSlides(slideIndex);

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = '';
    //     slides[slideIndex].style.display = '';
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });
});