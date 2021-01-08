'use strict';
//const { response } = require('express');
console.log('ADD.JS LOADED');
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let order = today.getTime();

// let removeParent = document.querySelectorAll('.parent')[0];

let date = `${year}-${month + 1}-${day} ${hour}:${minute}`;
function addData() {
  console.log('WORKS');
  //Grabbing the text content from our textarea
  let note = document.getElementById('noteInput').value;
  //TODO: Get the current time

  if (note != '') {
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
                Sorting: order,
              },
              //id: order,
            },
          ],
        }),
      }
    ).then(response => response.json());
    document.querySelector('.noteInput2').textContent = '';
  } else {
    console.log('CANT ADD EMPTY NOTE');
  }

  // document.getElementById('parent2').outerHTML = '';
  //REMINDER: If new note is not added before it gets refreshed, removed comment below to increas loading time
}

function refresh() {
  location.reload();
  console.log('RELOAD');
}
