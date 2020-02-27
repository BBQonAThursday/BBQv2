const carousel = document.querySelector('.location--carousel');
const slides = document.querySelectorAll('.slide');
const activeIndicator = document.querySelector('.active--indicator');
const rightArrow = document.querySelector('.gg-arrow-right-o');
const leftArrow = document.querySelector('.gg-arrow-left-o');
const centerImageContainer = document.querySelector('.location--image');
const topRightImageContainer = document.querySelector('.location--topRight-content');
let indicatorTrack = document.querySelector('.indicator--track');
let slideIndex = 0;
let reloop = false;
let numSlides = slides.length;
let activeSlide = 1;
let slideRatio = 200 / numSlides;
slides[0].classList.toggle('active');
let currentIndicatorWidth = activeIndicator.clientWidth;
let currentActiveNumber = checkActiveSlide();
let slideIncrement =  1 / numSlides;



// console.log(slideCount);
// console.log(slides[0]);

rightArrow.addEventListener('click', advanceSlider);
leftArrow.addEventListener('click', reverseSlider);


function checkActiveSlide() {
  for(i = 0; i <= numSlides; i++) {
    if(slides[i].classList.contains('active')) {
     // console.log("active slide is " + i);
     console.log("active slide is " + i); 
     return i;
    }
  }
}


console.log(currentActiveNumber);

function toggleActive(direction) {
  slides[currentActiveNumber].classList.toggle('active');
  if(direction === 'forward') {
    if(currentActiveNumber === (numSlides - 1)){
      slides[0].classList.toggle('active');
      currentActiveNumber = checkActiveSlide();
    } else {
      slides[currentActiveNumber + 1].classList.toggle('active');
      currentActiveNumber++;
    }
  } else if (direction === 'backward') {
    if(currentActiveNumber === 0){
      slides[numSlides - 1].classList.toggle('active');
      currentActiveNumber = checkActiveSlide();
    } else {
      slides[currentActiveNumber - 1].classList.toggle('active');
      currentActiveNumber--;
    }
  }
  console.log(currentActiveNumber);
}



function advanceSlider() {
   toggleActive('forward');
  if(activeSlide < numSlides) {
    activeSlide++;
    activeIndicator.style.width = `${(activeSlide * slideRatio)}px`;
    //console.log("right click: " + ((activeSlide * slideRatio) - slideRatio));
  } else if (activeSlide === numSlides) {
    activeSlide = 1;
    activeIndicator.style.width = `${(activeSlide * slideRatio)}px`;
    //console.log("right click: " + ((activeSlide * slideRatio) - slideRatio));
  }
}

function reverseSlider() {
  toggleActive('backward');
  if(activeSlide > 1) {
    activeSlide--;
    activeIndicator.style.width = `${(activeSlide * slideRatio)}px`;
    //console.log("right click: " + ((activeSlide * slideRatio) - slideRatio));
  } else if (activeSlide === 1) {
    activeSlide = numSlides;
    activeIndicator.style.width = `${(activeSlide * slideRatio)}px`;
    //console.log("right click: " + ((activeSlide * slideRatio) - slideRatio));
  }
  // console.log('active slide is: ' + activeSlide);
  // console.log('activeIndicator width is: ' + activeIndicator.clientWidth)
}



// 1: create the carousel movements with sliding progress bar
  // 1.1 create a slide counter and have that display in the UI

  // 1.2 create a range slider and counter. have it update over the course of a given time frame

  // 1.3 have the counter restart after switching to the next slide.


// 2: make the images change along with the carousel

