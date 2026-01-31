const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', () => {
  menu.classList.toggle('open');
  btn.classList.toggle('change');
});
