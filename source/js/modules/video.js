const video = document.querySelector('.video');
const buttonPlay = document.querySelector('.video__play-button');

export const activateVideo = function () {
  if (buttonPlay) {
    buttonPlay.addEventListener('click', function (evt) {
      evt.preventDefault();
      video.classList.add('is-play');
    });
  }
};
