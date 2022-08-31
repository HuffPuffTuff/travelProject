const sliderLine = document.querySelector('.slider__line');
const sliderItemFirst = document.querySelector('.slider__item');
const slides = document.querySelectorAll('.slider__item');
const rightArrow = document.querySelector('.slider__arrow-right')
const leftArrow = document.querySelector('.slider__arrow-left');
export let screenWidth = window.screen.availWidth; 
let itemWidth;

const getWidth = () => {
  const width = getComputedStyle(sliderItemFirst).width;
  itemWidth = Number(width.slice(0, 3));
}


// Dots
const indicatorDots = document.querySelector('.slider__dots'); 
let sum = '';

for (let i = 0; i < 3; i++) {
  sum += '<span class="slider-dot slider-dot"></span>';
}

indicatorDots.innerHTML = sum;
const indicatorDotsAll = document.querySelectorAll('span.slider-dot');


const dotOff = (num) => {
  indicatorDotsAll[num].style.cssText = 'background-color:rgba(242, 120, 92, 0.5); cursor:pointer;';
}

const dotOn = (num) => {
  indicatorDotsAll[num].style.cssText = 'background-color:#F2785C; cursor:default;';
}

let count = 1;
dotOn(count);


window.onresize = function() {
  sliderLine.style.transform = `translate(0, 0)`;
  dotOff(count);
  count = 1;
  dotOn(count);
  screenWidth = window.screen.availWidth;
  diffNum = 0;
}

let diffNum = 0;
function sliderNext() {
  getWidth();
  diffNum = diffNum + itemWidth;
  dotOff(count);
  count += 1;
  if (count > 2) count = 0;

  sliderLine.classList.remove('slider__line-transition');
  sliderLine.style.transform = `translate(-${diffNum}px, 0)`;

  if (diffNum >= itemWidth * 2) {
    diffNum = -itemWidth;
    setTimeout( () => {
      sliderLine.classList.add('slider__line-transition');
      setTimeout(() => {
        sliderLine.style.transform = `translate(${-diffNum}px, 0)`;
      }, 100);
    }, 900);
  }
  dotOn(count);
}


function sliderPrev() {
  getWidth();
  diffNum = diffNum - itemWidth;
  dotOff(count);
  count -= 1;
  if (count < 0) count = 2;
  
  sliderLine.style.transform = `translate(${-diffNum}px, 0)`;
  sliderLine.classList.remove('slider__line-transition');

  if (diffNum <= -itemWidth * 2) {
    diffNum = itemWidth;
    setTimeout( () => {
      sliderLine.classList.add('slider__line-transition');
      setTimeout( () => {
        sliderLine.style.transform = `translate(${-diffNum}px, 0)`;
      }, 100);
    }, 900);
  };

  dotOn(count);
}


// Big slider

slides.forEach( function( photo, index ) {
  photo.addEventListener('click', () => {
    getWidth();
    dotOff(count);
    sliderLine.classList.remove('slider__line-transition');
    
    if (screenWidth > 600) {
      const itemStyle = getComputedStyle(sliderLine);
      const gap = Number(itemStyle.gap.slice(0, 2));
      const wdth = gap + itemWidth;

      switch (index) {
        case 1:
          sliderLine.style.transform = `translate(${wdth*2}px, 0)`;
          setTimeout(() => {
            sliderLine.classList.add('slider__line-transition');
            setTimeout( () => {
              sliderLine.style.transform = `translate(-${wdth}px, 0)`;
            }, 100);
          }, 900);
          count = 2;
          break;

        case 2:
          sliderLine.style.transform = `translate(${wdth}px, 0)`;
          count = 0;
          break;

        case 3:
          sliderLine.style.transform = `translate(0, 0)`;
          count = 1;
          break;

        case 4:
          sliderLine.style.transform = `translate(-${wdth}px, 0)`;
          count = 2;
          break;

        case 5:
          sliderLine.style.transform = `translate(-${wdth*2}px, 0)`;
          setTimeout(() => {
            sliderLine.classList.add('slider__line-transition');
            setTimeout( () => {
              sliderLine.style.transform = `translate(${wdth}px, 0)`;
            }, 100);
          }, 900);
          count = 0;
          break;
      }
    }
    dotOn(count);
  });
});


rightArrow.addEventListener('click', () => {
  sliderNext();
});
leftArrow.addEventListener('click', () => {
  sliderPrev();
});


