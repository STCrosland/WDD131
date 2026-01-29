let selectElem = document.querySelector('select');
let logo = document.querySelector('img'); // <-- THIS IS THE ONLY REQUIRED ADDITION

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current == 'dark') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    logo.src = "../../Images/byui_logo_dark_mode.png";
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    logo.src = "../../Images/byui-logo-blue.webp";
  }
}
