'use strict';

// LOG
const btnLog = document.querySelector('.logotype-nav__item-btn_log');
const formLog = document.querySelector('.autorization-form_log');

btnLog.addEventListener('click', handleClickLog);
function handleClickLog() {
  formLog.classList.add('autorization-form_scale');
  btnCloses.forEach(btnClose =>
    btnClose.addEventListener('click', handleCloseForm),
  );
  btnLog.removeEventListener('click', handleClickLog);
}

// REG
const btnReg = document.querySelector('.logotype-nav__item-btn_reg');
const formReg = document.querySelector('.autorization-form_reg');

btnReg.addEventListener('click', handleClickReg);
function handleClickReg() {
  formReg.classList.add('autorization-form_scale');
  btnCloses.forEach(btnClose =>
    btnClose.addEventListener('click', handleCloseForm),
  );
  btnReg.removeEventListener('click', handleClickReg);
}

// CLOSE FORM
const btnCloses = document.querySelectorAll('.autorization-form__close');

function handleCloseForm() {
  formLog.classList.remove('autorization-form_scale');
  formReg.classList.remove('autorization-form_scale');
  btnCloses.forEach(btnClose =>
    btnClose.removeEventListener('click', handleCloseForm),
  );
  btnLog.addEventListener('click', handleClickLog);
  btnReg.addEventListener('click', handleClickReg);
}
