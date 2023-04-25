'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const slidesWrapper = document.querySelector('.itc-slider__wrapper'),
      slides = document.querySelectorAll('.itc-slider__item'),
      indicators = document.createElement('ol'),
          dots =[];
    indicators.classList.add('itc-slider__indicators');
    slidesWrapper.append(indicators);

    for (let i = 0; i<slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i);
        dot.classList.add('itc-slider__indicator');
        if (i == 0) {
            dot.classList.add('itc-slider__indicator_active');
        }
        indicators.append(dot);
        dots.push(dot);
    }

});