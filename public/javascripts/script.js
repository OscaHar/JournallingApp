'use strict';

console.log('SCRIPT.JS LOADED');

window.onload = function () {
  document.querySelector('.circle').addEventListener('click', function () {
    document.querySelector('.circle').classList.toggle('displayElement');
    document
      .querySelector('.header--BigText')
      .classList.toggle('displayElement');
    document.querySelector('.header--arrow').classList.toggle('displayElement');
    document.querySelector('.noteInput2').classList.toggle('displayElement');
    console.log('CLICK!');
  });

  document
    .querySelector('.header--arrow')
    .addEventListener('click', function () {
      addData();
      document.querySelector('.circle').classList.toggle('displayElement');
      document
        .querySelector('.header--BigText')
        .classList.toggle('displayElement');
      document
        .querySelector('.header--arrow')
        .classList.toggle('displayElement');

      document.querySelector('.noteInput2').classList.toggle('displayElement');
      document.querySelector('.noteInput2').textContent = '';
      //TODO: Clear textarea
    });
};
