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
    document.querySelector('.parent').classList.toggle('displayElement');
    document.getElementById('noteInput').focus();
    console.log('CLICK!');
  });

  document
    .querySelector('.header--arrow')
    .addEventListener('click', function () {
      //TODO: Check if textarea is empty or not before saving to airtable
      document.querySelector('.circle').classList.toggle('displayElement');
      document
        .querySelector('.header--BigText')
        .classList.toggle('displayElement');
      document
        .querySelector('.header--arrow')
        .classList.toggle('displayElement');
      document.querySelector('.parent').classList.toggle('displayElement');

      document.querySelector('.noteInput2').classList.toggle('displayElement');
      //FIXME
      addData();
      loader(); //Loads the new note so it gets displayed
      document.getElementById('noteInput').value = '';
    });
};
