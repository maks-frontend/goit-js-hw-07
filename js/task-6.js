function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls').firstElementChild;

function createBoxes() {
  let width = 30;
  let height = 30;
  if (input.value < 0 || input.value > 100) {
    return;
  }
  boxes.innerHTML = '';
  for (let i = 0; i < input.value; i++) {
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
    width += 10;
    height += 10;
  }
  input.value = '';
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);