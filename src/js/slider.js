'use strict';

const containerWidth = document.querySelector('.section .container')
  .clientWidth;
let sliderWidth = document.querySelector('.slider').clientWidth;
const sliderLine = document.querySelector('.slider__line');
const sliderLineWrappers = document.querySelectorAll('.slider__line-wrapper');
const sliderNavLeft = document.querySelector('.slider__nav_left');
const sliderNavRight = document.querySelector('.slider__nav_right');
const sliderIndicatorsIcons = document.querySelectorAll(
  '.slider__indicators-icon',
);
let widthArr = [];
let sliderLineWidth = 0;
let offset = 0;
let step = 0;

sliderLineWrappers.forEach(sliderLineWrapper => {
  sliderLineWrapper.style.width = containerWidth + 'px';
  widthArr.push(sliderLineWrapper.offsetWidth);
  sliderLineWidth += sliderLineWrapper.offsetWidth;
});

sliderLine.style.width = sliderLineWidth + 'px';

window.addEventListener('resize', function() {
  const containerWidth = document.querySelector('.section .container')
    .clientWidth;
  sliderWidth = document.querySelector('.slider').clientWidth;
  const sliderLineWrappers = document.querySelectorAll('.slider__line-wrapper');
  widthArr = [];
  sliderLineWidth = 0;

  sliderLineWrappers.forEach(sliderLineWrapper => {
    sliderLineWrapper.style.width = containerWidth + 'px';
    widthArr.push(sliderLineWrapper.offsetWidth);
    sliderLineWidth += sliderLineWrapper.offsetWidth;
  });

  sliderLine.style.width = sliderLineWidth + 'px';
  offset = widthArr[step] * (step + 1) - widthArr[step];
  sliderLine.style.left = -offset + 'px';
});

sliderNavRight.addEventListener('click', handleClickRight);
function handleClickRight() {
  if (step + 1 <= sliderIndicatorsIcons.length - 1) {
    offset += widthArr[step];
    sliderLine.style.left = -offset + 'px';
    step++;
  }
  sliderIndicatorsIcons.forEach((sliderIndicatorsIcon, idx) => {
    sliderIndicatorsIcon.classList.remove('slider__indicators-icon_active');
    idx === step &&
      sliderIndicatorsIcon.classList.add('slider__indicators-icon_active');
  });
}

sliderNavLeft.addEventListener('click', handleClickLeft);
function handleClickLeft() {
  if (step > 0) {
    offset -= widthArr[step];
    sliderLine.style.left = -offset + 'px';
    step--;
  }
  sliderIndicatorsIcons.forEach((sliderIndicatorsIcon, idx) => {
    sliderIndicatorsIcon.classList.remove('slider__indicators-icon_active');
    idx === step &&
      sliderIndicatorsIcon.classList.add('slider__indicators-icon_active');
  });
}
