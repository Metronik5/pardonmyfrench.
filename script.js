const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('open');
  menu.classList.toggle('open');
});
