new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-activeBullet',
        clickable: true
      },
});