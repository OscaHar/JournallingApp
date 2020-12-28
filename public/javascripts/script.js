'use strict';

console.log('SCRIPT.JS LOADED');

window.onload = function () {
  document.querySelector('.circle').addEventListener('click', function () {
    document.querySelector('.circle').classList.toggle('displayElement');
    document
      .querySelector('.header--BigText')
      .classList.toggle('displayElement');
    console.log('CLICK!');
  });
};
