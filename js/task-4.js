const form = document.querySelector('.login-form');
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  if (!elements.email.value.trim() || !elements.password.value.trim()) {
    alert('All form fields must be filled in');
    return;
  }

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  console.log(info);
  form.reset();
}
form.addEventListener('submit', handleSubmit);
