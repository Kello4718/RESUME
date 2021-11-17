import {coursesMainSlide, coursesMainSlideSource, coursesMainSlideImage, coursesSlides} from './variables.js';

const changeMainSlide = (slide) => {
  slide.addEventListener('mouseover', () => {
    if (slide === coursesSlides[0]) {
      coursesMainSlideSource.srcset = './img/html-css.webp';
      coursesMainSlideImage.src = './img/html-css.png';
      coursesMainSlide.classList.add('courses__main-slide--current');
    } else if (slide === coursesSlides[1]) {
      coursesMainSlideSource.srcset = './img/html-css-adaptiv.webp';
      coursesMainSlideImage.src = './img/html-css-adaptiv.png';
      coursesMainSlide.classList.add('courses__main-slide--current');
    } else if (slide === coursesSlides[2]) {
      coursesMainSlideSource.srcset = './img/js.webp';
      coursesMainSlideImage.src = './img/js.png';
      coursesMainSlide.classList.add('courses__main-slide--current');
    } else if (slide === coursesSlides[3]) {
      coursesMainSlideSource.srcset = './img/frontend.webp';
      coursesMainSlideImage.src = './img/frontend.png';
      coursesMainSlide.classList.add('courses__main-slide--current');
    }
  });

  slide.addEventListener('mouseout', () => {
    coursesMainSlide.classList.remove('courses__main-slide--current');
    coursesMainSlideSource.srcset = './img/frontend.webp';
    coursesMainSlideImage.src = './img/frontend.png';
  });
};

for (let i = 0; i < coursesSlides.length; i++) {
  changeMainSlide(coursesSlides[i]);
}

console.log(coursesMainSlideImage);


