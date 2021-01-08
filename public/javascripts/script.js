'use strict';

console.log('SCRIPT.JS LOADED');

let circle = document.querySelector('.circle');
let BigText = document.querySelector('.header--BigText');
let arrow = document.querySelector('.header--arrow');
let noteInput2 = document.querySelector('.noteInput2');
let noteInput = document.getElementById('noteInput');

window.onload = function () {
  loader();
  circle.addEventListener('click', function () {
    circle.classList.toggle('displayElement');
    BigText.classList.toggle('displayElement');
    arrow.classList.toggle('displayElement');
    noteInput2.classList.toggle('displayElement');
    document.querySelector('.parent').classList.toggle('displayElement');
    noteInput.focus();
  });

  arrow.addEventListener('click', function () {
    addData();
    let loadingTime = setTimeout(refresh, 100);
  });
};
