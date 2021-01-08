'use strict';

console.log('ADD.JS LOADED');

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let order = today.getTime();
let date = `${year}-${month + 1}-${day} ${hour}:${minute}`;

function addData() {
  //Grabbing the text content from our textarea
  let note = document.getElementById('noteInput').value;

  //If a newline would be added, it would get replaced with a space instead
  note = note.replace(/\n/g, ' ');

  if (note != '' && note != ' ') {
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
            },
          ],
        }),
      }
    )
      .then(response => response.json())
      .catch(error => console.error(error));
  } else {
    console.log('CANT ADD EMPTY NOTE');
  }
}

function refresh() {
  location.reload();
  console.log('RELOAD');
}
