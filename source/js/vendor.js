import {swiper} from './vendor/swiper.js';
swiper();
// // const swiper = new Swiper('.trainers__swiper', {
// const swiper = new Swiper('.trainers__swiper', {
//   navigation: {
//     nextEl: '.trainers__swiper-button--next',
//     prevEl: '.trainers__swiper-button--prev',
//   },

//   // отключение скролла
//   simulateTouch: false,

//   // Бесконечная прокрутка
//   loop: true,

//   breakpoints: {
//     320: {
//       // Количество слайдов на странице
//       slidesPerView: 1,
//       // порядковый номер первого слайда
//       initialSlide: 2,
//     },
//     768: {
//       slidesPerView: 2,
//       // Отступ между слайдами
//       spaceBetween: 30,
//       initialSlide: 2,
//     },
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//       initialSlide: 0,
//     },
//     1366: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//       initialSlide: 0,
//     },
//   },
// });

// const swiperFeedback = new Swiper('.feedback__swiper', {

//   navigation: {
//     prevEl: '.feedback__swiper-button--prev',
//     nextEl: '.feedback__swiper-button--next',
//   },

//   loop: false,
//   simulateTouch: false,
//   slidesPerView: 1,

// });

// // Swiper 7.4.1
// import './vendor/swiper';
// const getFeedbackSlider = () => {
//   const feedbackSlider = new Swiper('.feedback__slider', {
//     slidesPerView: 1,
//     loop: false,
//     grabCursor: true,
//     centeredSlides: true,
//     centeredSlidesBounds: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// };

// getFeedbackSlider();

// // export const getfeedbackSlider = () => {
// const coachesSlider = new Swiper('.coaches__slider', {
//   spaceBetween: 40,
//   loop: true,
//   grabCursor: true,
//   resizeObserver: true,
//   updateOnWindowResize: true,
//   navigation: {

//     nextEl: '.coaches__button-next',
//     prevEl: '.coaches__button-prev',
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       initialSlide: 2,
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//       initialSlide: 2,
//       slidesOffsetBefore: 55,

//     },
//     1201: {
//       slidesPerView: 4,
//       spaceBetween: 10,
//       initialSlide: 0,
//     },
//   },
// });
// coachesSlider.updateSlides();
// // };
