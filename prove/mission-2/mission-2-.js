let selectElem = document.querySelector('select');
let logo = document.querySelector('img'); // <-- THIS IS THE ONLY REQUIRED ADDITION

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current == 'dark') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    logo.src = "../../images/byui-logo-dark-mode.png";
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    logo.src = "../../images/byui-logo-blue.webp";
  }
}
