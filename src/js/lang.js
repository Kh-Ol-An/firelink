'use strict';

const formLang = document.querySelector('.topper__switches-lang');
const langEN = document.getElementById('en');
const langFR = document.getElementById('fr');
const langGM = document.getElementById('gm');
const lang = localStorage.getItem('lang');

if (lang) {
  lang === 'en' && langEN.setAttribute('checked', true);
  lang === 'fr' && langFR.setAttribute('checked', true);
  lang === 'gm' && langGM.setAttribute('checked', true);
} else {
  langEN.setAttribute('checked', true);
  localStorage.setItem('lang', 'en');
}

formLang.addEventListener('click', handleClickLang);
function handleClickLang({ target }) {
  target === langEN && localStorage.setItem('lang', 'en');
  target === langFR && localStorage.setItem('lang', 'fr');
  target === langGM && localStorage.setItem('lang', 'gm');
}
