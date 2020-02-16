'use strict';

const formLog = document.querySelector('.autorization-form_log');
const formReg = document.querySelector('.autorization-form_reg');
const inputsLog = document.querySelectorAll('.autorization-form_log .required');
const inputsReg = document.querySelectorAll('.autorization-form_reg .required');
const emailInputLog = document.querySelector(
  '.autorization-form_log input[name=email]',
);
const emailInputReg = document.querySelector(
  '.autorization-form_reg input[name=email]',
);
const passwordInput = document.querySelector(
  '.autorization-form input[name=password]',
);
const repeatInput = document.querySelector(
  '.autorization-form input[name=repeat]',
);

formLog.addEventListener('submit', handleSubmitLog);
function handleSubmitLog(e) {
  e.preventDefault();
  resetErrorMessage();

  requiredInput(inputsLog);
  validationEmail(emailInputLog);
}

formReg.addEventListener('submit', handleSubmitReg);
function handleSubmitReg(e) {
  e.preventDefault();
  resetErrorMessage();

  requiredInput(inputsReg);
  validationEmail(emailInputReg);
  repeatPassword();
}

const resetErrorMessage = () => {
  const errors = document.querySelectorAll('.autorization__error');
  errors.forEach(error => error.remove());
};

const createErrorMessage = (input, message) => {
  const error = document.createElement('p');
  error.className = 'autorization__error';
  error.textContent = message;
  input.after(error);
};

const requiredInput = inputs =>
  inputs.forEach(input => {
    if (input.value) return;
    const requiredMessage = 'Это поле обязательно к заполнению';
    createErrorMessage(input, requiredMessage);
  });

const validationEmail = emailInput => {
  const validEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(
    emailInput.value,
  );
  if (validEmail) return;
  const validEmailMessage = 'Введите валидный email';
  createErrorMessage(emailInput, validEmailMessage);
};

const repeatPassword = () => {
  if (passwordInput.value === repeatInput.value) return;
  const repPas = 'Пароли должны совпадать';
  createErrorMessage(repeatInput, repPas);
};
