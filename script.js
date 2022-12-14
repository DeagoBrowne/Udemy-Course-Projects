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
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check if email is valid
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Check required fields
const checkRequired = (inputArray) => {
  inputArray.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get fieldname
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkRequired([username, email, password, password2]);
})

  //   if (username.value === '') {
  //     showError(username, 'Username is required');
  //   } else {
  //     showSuccess(username);
  //   }
  //   if (email.value === '') {
  //     showError(email, 'Email is required');
  //   } else if (!validateEmail(email.value)) {
  //     showError(email, 'Email is not valid');
  //   } else {
  //     showSuccess(email);
  //   }
  //   if (password.value === '') {
  //     showError(password, 'Password is required');
  //   } else {
  //     showSuccess(password);
  //   }
  //   if (password2.value === '') {
  //     showError(password2, 'Please confirm password');
  //   } else if (password2.value !== password.value) {
  //     showError(password2, 'Passwords do not match');
  //   } else {
  //     showSuccess(password2);
  //   }