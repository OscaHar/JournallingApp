'use strict';
//const { response } = require('express');
console.log('ADD.JS LOADED');
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();

// let removeParent = document.querySelectorAll('.parent')[0];

let date = `${year}-${month + 1}-${day} ${hour}:${minute}`;
console.log(date);
function addData() {
  console.log('WORKS');
  //Grabbing the text content from our textarea
  let note = document.getElementById('noteInput').value;
  //TODO: Get the current time

  //Fetches airtable so we can use it
  fetch(
    `https://api.airtable.com/v0/app92BlzQFv5IKqof/journalData?api_key=keyoVMiz3n49GzOHb`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Notes: note,
              Date: date,
            },
          },
        ],
      }),
    }
  ).then(response => response.json());
  document.querySelector('.noteInput2').textContent = '';

  // removeParent.parentNode.removeChild(removeParent);
  document.getElementById('parent2').outerHTML = '';
  let loadingTime = setTimeout(loader, 5000);
}
