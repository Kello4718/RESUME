import {preloader, slider} from './variables.js';
import {} from './courses.js';

// Переменные

//const preloader = document.querySelector('.preloader');

const hobbyItemsDescription = document.querySelectorAll('.hobby__item-description');
const hobbySvgFrontend = document.querySelector('.hobby__svg-frontend');
const hobbyButton = document.querySelector('.hobby__button');

//const slider = document.querySelector('.photo-gallery__slider');
const slides = document.querySelectorAll('.photo-gallery__slide');
const sliderButtons = document.querySelectorAll('.photo-gallery__button');

let currentOrder = 0;

// Прелоэдер

window.addEventListener('load', () => {
  preloader.remove();
});

// Кнопка в разделе хобби

hobbyButton.addEventListener('click', () => {
  hobbyButton.remove();
  hobbyItemsDescription[7].textContent = 'Фронтенд-разработка';
  hobbySvgFrontend.classList.remove('hide');
});

// Функция определяющая положение каждого слайда

const toSetPositionOfSlide = () => {
  const {width, height} = slider.getBoundingClientRect();
  const a = width / 2;
  const b = height / 2;

  const delta = Math.PI / slides.length / 4;
  for (let i = 0; i < slides.length; i++) {
    const leftSlide = document.querySelector(`.photo-gallery__slide[data-order='${currentOrder - i}']`);
    if (leftSlide) {
      leftSlide.style.zIndex = slides.length - i;
      leftSlide.style.opacity = 1 - (1.5 * i) / slides.length;
      leftSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)}px`;
      leftSlide.style.top = `${-b * Math.sin((Math.PI * 3) / 2 - delta * i * 2)}px`;
    }
    const rightSlide = document.querySelector(`.photo-gallery__slide[data-order='${currentOrder + i}']`);
    if (rightSlide) {
      rightSlide.style.zIndex = slides.length - i;
      rightSlide.style.opacity = 1 - (1.5 * i) / slides.length;
      rightSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 + delta * i * 2)}px`;
      rightSlide.style.top = `${-b * Math.sin((Math.PI * 3) / 2 + delta * i * 2)}px`;
    }
  }
};

// Функция переключения слайда по самому слайду

function slideHandler() {
  const order = parseInt(this.dataset.order, 10);
  currentOrder = order;
  toSetPositionOfSlide();
}

// Функция переключения слайда по кнопке

function buttonHandler() {
  const {dir} = this.dataset;
  if (dir === 'prev') {
    currentOrder = Math.max(0, currentOrder - 1);
  } else if (dir === 'next') {
    currentOrder = Math.min(slides.length - 1, currentOrder + 1);
  }
  toSetPositionOfSlide();
}

// Функция, запускающая слайдер

const activateSlider = () => {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    slide.dataset.order = i;
    slide.style.transform = 'translate(-50%, -50%)';
    slide.addEventListener('click', slideHandler);
  }
  for (const sliderButton of sliderButtons) {
    sliderButton.addEventListener('click', buttonHandler);
  }
  currentOrder = Math.floor(slides.length / 2);
  toSetPositionOfSlide();
};

activateSlider();
