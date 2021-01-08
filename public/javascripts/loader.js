'use strict';

console.log('LOADER.JS LOADED');

function loader() {
  fetch(
    `https://api.airtable.com/v0/app92BlzQFv5IKqof/journalData?api_key=keyoVMiz3n49GzOHb`
  )
    .then(response => response.json())
    .then(data => {
      const { records } = data;
      const div = document.createElement('div');
      div.id = 'parent2';
      div.classList.add('parent');

      var markup = '';

      //Sorts the notes in the wished order
      records.sort((a, b) => (b.fields.Sorting > a.fields.Sorting ? 1 : -1));

      //Displayes all the notes

      if (data.records.length < 1) {
        console.log('NO NOTES');
        markup += `
        <div class="note">
        <p>No notes added! Click the add button to get started!</p>
        <p class="date">01-01-01 01:01</p>
        </div>
        `;
        div.innerHTML = markup;
        document.getElementById('container').appendChild(div);
      } else {
        for (var i = 0; i < data.records.length; i++) {
          markup += `
          <div class="note">
          <p>${data.records[i].fields.Notes}</p>
          <p class="date">${data.records[i].fields.Date}</p>
          </div>
          `;

          div.innerHTML = markup;
          document.getElementById('container').appendChild(div);
        }
      }
    });
}
