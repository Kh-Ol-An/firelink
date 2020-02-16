'use strict';

const formCurrency = document.querySelector('.topper__switches-currency');
const currencyUSD = document.getElementById('usd');
const currencyEUR = document.getElementById('eur');
const currencyGBP = document.getElementById('gbp');
const currency = localStorage.getItem('currency');

if (currency) {
  currency === 'usd' && currencyUSD.setAttribute('checked', true);
  currency === 'eur' && currencyEUR.setAttribute('checked', true);
  currency === 'gbp' && currencyGBP.setAttribute('checked', true);
} else {
  currencyUSD.setAttribute('checked', true);
  localStorage.setItem('currency', 'usd');
}

formCurrency.addEventListener('click', handleClickCurrency);
function handleClickCurrency({ target }) {
  target === currencyUSD && localStorage.setItem('currency', 'usd');
  target === currencyEUR && localStorage.setItem('currency', 'eur');
  target === currencyGBP && localStorage.setItem('currency', 'gbp');
}
