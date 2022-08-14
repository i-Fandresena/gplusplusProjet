var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 8000,
      },
   /* effect: 'fade',
    fadeEffect: {
    crossFade: true
  },*/
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });
