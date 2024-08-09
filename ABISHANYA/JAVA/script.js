

var homeswiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: 'true',
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

