function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const color = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
colorBtn.addEventListener('click', changeColor);

function changeColor() {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  color.textContent = randomHexColor;
}