function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const text = document.querySelector('div');
  button.addEventListener('click', () => {
    if (text.hidden === false) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  });
}
