'use strict';

console.log('LOADER.JS LOADED');

function loader() {
  fetch(
    `https://api.airtable.com/v0/app92BlzQFv5IKqof/journalData?api_key=keyoVMiz3n49GzOHb`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const { records } = data;
      const div = document.createElement('div');
      div.classList.add('parent');

      var markup = '';

      for (var i = 0; i < data.records.length; i++) {
        markup += `
        <div class="note">
            <p>${data.records[i].fields.Notes}</p>
            <p>${data.records[i].fields.Date}</p>
        </div>
        `;

        div.innerHTML = markup;
        document.getElementById('container').appendChild(div);
      }
    });
}
loader();
