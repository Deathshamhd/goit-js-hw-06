const form = document.querySelector('.login-form');


// Form submission (form.login-form) must be processed on the submit event.
form.addEventListener('submit', (event) => {
    //The page must not reload when the form is submitted.
  event.preventDefault();

  const elements = form.elements;

  const email = elements.email.value;
  const password = elements.password.value;
//If the form has empty fields, display alert saying that all fields must be filled in.
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
