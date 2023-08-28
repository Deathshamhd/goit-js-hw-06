const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {};
  for (const element of form.elements) {
    if (element.value === '') {
      alert('All fields must be filled in.');
      return;
    }
    formData[element.name] = element.value;
  }
  console.log(formData);
  form.reset();
});