function initCarousel() {
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const inner = document.querySelector('.carousel__inner');
  const carouselImg = document.querySelector('.carousel__img');
  const carouselImgWidth = carouselImg.offsetWidth;
  let position = 0;

  const checkPosition = () => {
    if (position === 0) {
      buttonLeft.classList.add('hidden');
      buttonRight.classList.remove('hidden');
    } else if (position === inner.children.length - 1) {
      buttonLeft.classList.remove('hidden');
      buttonRight.classList.add('hidden');
    } else {
      buttonLeft.classList.remove('hidden');
      buttonRight.classList.remove('hidden');
    }
  };

  checkPosition();

  buttonRight.addEventListener('click', () => {
    position++;
    inner.style.transform = `translateX(-${position * carouselImgWidth}px)`;
    checkPosition();
  });

  buttonLeft.addEventListener('click', () => {
    console.log('!!!');
    position--;
    inner.style.transform = `translateX(-${position * carouselImgWidth}px)`;
    checkPosition();
  });
}
