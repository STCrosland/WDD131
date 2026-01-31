const btn = document.querySelector('.menu-btn');
const manu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
  manu.classList.toggle('hide');
  btn.classList.toggle('change');
}
