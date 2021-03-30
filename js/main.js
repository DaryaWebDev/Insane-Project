const swiper = new Swiper(".practice__swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".practice__button--next",
    prevEl: ".practice__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
