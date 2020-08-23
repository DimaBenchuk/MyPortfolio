"use strict";

new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-activeBullet',
    clickable: true
  }
});
$('[data-scroll]').on('click', function (event) {
  event.preventDefault();
  var elementId = $(this).data('scroll');
  var elementOffset = $(elementId).offset().top;
  $('html, body').animate({
    scrollTop: elementOffset
  }, 700);
});