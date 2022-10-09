export const initSwiper = function () {

  const swiper = new Swiper('.trainers__swiper', {

    navigation: {
      nextEl: '.trainers__swiper-button--next',
      prevEl: '.trainers__swiper-button--prev',
    },

    // отключение скролла
    simulateTouch: false,

    // Бесконечная прокрутка
    loop: true,

    breakpoints: {
      320: {
        // Количество слайдов на странице
        slidesPerView: 1,
        // порядковый номер первого слайда
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        // Отступ между слайдами
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },
  });

  const swiperFeedback = new Swiper('.feedback__slider', {

    navigation: {
      prevEl: '.feedback__swiper-button--prev',
      nextEl: '.feedback__swiper-button--next',
    },

    loop: false,
    simulateTouch: false,
    slidesPerView: 1,

  });


};
