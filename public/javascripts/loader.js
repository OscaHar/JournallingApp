'use strict';

console.log('LOADER.JS LOADED');

function loader() {
  console.log('LOADER CALLED');
  fetch(
    `https://api.airtable.com/v0/app92BlzQFv5IKqof/journalData?api_key=keyoVMiz3n49GzOHb`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const { records } = data;
      const div = document.createElement('div');
      div.id = 'parent2';
      div.classList.add('parent');

      var markup = '';
      // data.sort(
      //   (a, b) =>
      //     parseFloat(a.records.fields.ID) - parseFloat(b.records.fields.ID)
      // );
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
  var removeParent = document.getElementById('parent2');
  removeParent.parentNode.removeChild(removeParent);
}

loader();
