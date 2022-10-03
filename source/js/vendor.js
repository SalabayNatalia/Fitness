// Swiper 7.4.1
import './vendor/swiper';
const feedbackSlider = new Swiper('.feedback__slider', {
  slidesPerView: 1,
  spaceBetween: 300,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

const coachesSlider = new Swiper('.coaches__slider', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev'
    nextEl: '.coaches__button-next',
    prevEl: '.coaches__button-prev'
  },
  breakpoints: {
    1201: {
      slidesPerView: 4,
      spaceBetween: 10,

    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    }

  }
});
