const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show Success outline
const showSuccess = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


//Event listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
  if (email.value === '') {
    showError(email, 'Email is required');
  } else {
    showSuccess(username);
  }
  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(username);
  }
  if (password2.value === '') {
    showError(password2, 'Please confirm password');
  } else {
    showSuccess(username);
  }
})