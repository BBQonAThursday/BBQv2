const carousel = document.querySelector('.location--carousel');
const slides = document.querySelectorAll('.slide');
const activeIndicator = document.querySelector('.active--indicator');
const rightArrow = document.querySelector('.gg-arrow-right-o');
const leftArrow = document.querySelector('.gg-arrow-left-o');
const centerImageContainer = document.querySelector('.location--image');
const topRightImageContainer = document.querySelector('.location--topRight-content');
let slideCount = slides.length;
let indicatorTrack = document.querySelector('.indicator--track').clientWidth;
let slideIndex = 0;
slides[0].classList.toggle('active');
let currentIndicatorWidth = activeIndicator.clientWidth;
let currentActiveNumber = checkActiveSlide();
let slideIncrement =  1 / slideCount;

// console.log(slideCount);
// console.log(slides[0]);

rightArrow.addEventListener('click', advanceSlider);
leftArrow.addEventListener('click', reverseSlider);


function checkActiveSlide() {
  for(i = 0; i <= slideCount; i++) {
    if(slides[i].classList.contains('active')) {
     // console.log("active slide is " + i);
      return i;
    }
  }
}


console.log(currentActiveNumber);

function toggleActive() {
  slides[currentActiveNumber].classList.toggle('active');
  if(currentActiveNumber === (slideCount - 1)){
    slides[0].classList.toggle('active');
    currentActiveNumber = checkActiveSlide();
  } else {
    slides[currentActiveNumber + 1 ].classList.toggle('active');
    currentActiveNumber++;
  }
  console.log(currentActiveNumber);
}



function advanceSlider() {
  toggleActive();
  
  console.log(currentIndicatorWidth);
  if(currentIndicatorWidth === indicatorTrack){
    currentIndicatorWidth = 0;
    activeIndicator.style.width = 0;
  } else {
    activeIndicator.style.width = `${currentIndicatorWidth + ((slideIncrement*100)*2)}px`;
    currentIndicatorWidth = currentIndicatorWidth + activeIndicator.clientWidth;
  }
}

function reverseSlider() {
  toggleActive();
  console.log(currentIndicatorWidth);
  if(currentIndicatorWidth === 0){
    currentIndicatorWidth = indicatorTrack;
    activeIndicator.style.width = '100%';
  } else {
  currentIndicatorWidth = currentIndicatorWidth - activeIndicator.clientWidth;
  activeIndicator.style.width = `${currentIndicatorWidth - ((slideIncrement*100)*2)}px`;
  }
}



// 1: create the carousel movements with sliding progress bar
  // 1.1 create a slide counter and have that display in the UI

  // 1.2 create a range slider and counter. have it update over the course of a given time frame

  // 1.3 have the counter restart after switching to the next slide.


// 2: make the images change along with the carousel

