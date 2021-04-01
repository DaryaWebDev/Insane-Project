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

const blogSwiper = new Swiper(".blog-posts__swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".blog-posts__button--next",
    prevEl: ".blog-posts__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

