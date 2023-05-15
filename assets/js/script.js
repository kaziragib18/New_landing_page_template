'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Access the testimonials
let testSlide = document.querySelectorAll('.testItem');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Add click event to the indicators
function switchTest(currentTest){
  currentTest.classList.add('active');
  var testId = currentTest.getAttribute('attr');
  if(testId > counter){
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = testId;
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
  }
  else if(testId == counter){return;}
  else{
    testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = testId;
    testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
  }
  indicators();
}

// Add and remove active class from the indicators
function indicators(){
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}

// Code for auto sliding
function slideNext(){
  testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
  if(counter >= testSlide.length - 1){
    counter = 0;
  }
  else{
    counter++;
  }
  testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
  indicators();
}
function autoSliding(){
  deleteInterval = setInterval(timer, 2000);
  function timer(){
    slideNext();
    indicators();
  }
}
autoSliding();

// Stop auto sliding when mouse is over the indicators
const carusal_container = document.querySelector('.indicators');
carusal_container.addEventListener('mouseover', pause);
function pause(){
  clearInterval(deleteInterval);
}

// Resume sliding when mouse is out of the indicators
carusal_container.addEventListener('mouseout', autoSliding);


