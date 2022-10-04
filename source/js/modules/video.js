const video = document.querySelector('.video');
const buttonPlay = document.querySelectorAll('.video__play-button');
// const videoImg = document.querySelector('.video__image');

export const activateVideo = () => {
  if (buttonPlay) {
    buttonPlay.addEvevtListener('click', (evt) => {
      evt.preventDefault();
      // if (video.classList.contains('.is-play')) {
      video.classList.add('.is-play');
      // } else {

      // }
    })
  }
}
