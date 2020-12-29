//const { response } = require('express');

function addData() {
  console.log('WORKS');
  //Grabbing the text content from our textarea
  let note = document.getElementById('noteInput').value;

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
            },
          },
        ],
      }),
    }
  ).then(response => response.json());
  document.querySelector('.noteInput2').textContent = '';
}
