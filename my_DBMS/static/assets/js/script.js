'use strict';

/**
 * add event on multiple elements
 */
const addEventOnElements = function (elem, type, callback) {
  for (let i = 0, len = elem.length; i < len; i++) {
    elem[i].addEventListener(type, callback);
  }
}

/**
 * LOADING
 */
const loadingElement = document.querySelector("[data-loading-container]");

if (loadingElement) {
  window.addEventListener("load", function () {
    loadingElement.classList.add("loaded");
    document.body.classList.add("loaded");
  });
} else {
  console.log("Element with [data-loading-container] not found");
}

/**
 * MOBILE NAVBAR TOGGLE
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

if (navbar && overlay && navTogglers.length > 0 && navbarLinks.length > 0) {
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  }

  addEventOnElements(navTogglers, "click", toggleNavbar);

  const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
  }

  addEventOnElements(navbarLinks, "click", closeNavbar);
}

/**
 * HEADER
 */
const header = document.querySelector("[data-header]");

if (header) {
  const headerActive = function () {
    window.scrollY > 200 ? header.classList.add("active")
      : header.classList.remove("active");
  }

  window.addEventListener("scroll", headerActive);
} else {
  console.log("Element with [data-header] not found");
}

/**
 * SCROLL REVEAL
 */
const revealElements = document.querySelectorAll("[data-reveal]");

if (revealElements.length > 0) {
  const scrollReveal = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
      if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
        revealElements[i].classList.add("revealed");
      }
    }
  }

  window.addEventListener("scroll", scrollReveal);
  window.addEventListener("load", scrollReveal);
} else {
  console.log("Elements with [data-reveal] not found");
}

$(document).ready(function() {
  $('.footer-link').click(function(event) { 
      event.preventDefault(); 

      var targetPosition = $($(this).attr('href')).offset().top;

      $('html, body').animate({
          scrollTop: targetPosition
      }, 500); 
  });
});
