"use strict";

document.querySelector('.login-form button[type="submit"]').textContent = 'Log in';


const form = document.querySelector('.login-form');


form.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: email,
    password: password
  };

  console.log(formData);

  form.reset();
});