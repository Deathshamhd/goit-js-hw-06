const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const elements = form.elements;

  const email = elements.email.value;
  const password = elements.password.value;

  if (!email || !password) {
    alert('All fields must be filled in');
    return;
  }

  const data = {
    email,
    password,
  };

  console.log(data);

  form.reset();
});
