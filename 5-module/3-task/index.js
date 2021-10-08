function initCarousel() {
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const inner = document.querySelector('.carousel__inner');
  const carouselImg = document.querySelector('.carousel__img');
  const carouselImgWidth = carouselImg.offsetWidth;
  let position = 0;

  const checkPosition = () => {
    if (position === 0) {
      buttonLeft.style.display = 'none';
      buttonRight.style.display = null;
    } else if (position === inner.children.length - 1) {
      buttonLeft.style.display = null;
      buttonRight.style.display = 'none';
    } else {
      buttonLeft.style.display = null;
      buttonRight.style.display = null;
    }
  };

  checkPosition();

  buttonRight.addEventListener('click', () => {
    position++;
    inner.style.transform = `translateX(-${position * carouselImgWidth}px)`;
    checkPosition();
  });

  buttonLeft.addEventListener('click', () => {
    position--;
    inner.style.transform = `translateX(-${position * carouselImgWidth}px)`;
    checkPosition();
  });
}
