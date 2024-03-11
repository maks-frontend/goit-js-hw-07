const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function typeName() {
  if (!this.value.trim()) {
    return (nameOutput.innerHTML = 'Anonymous');
  }
  return (nameOutput.innerHTML = this.value.trim());
}
nameInput.addEventListener('input', typeName);