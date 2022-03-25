'use strict';


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});


const url = 'https://versatileapi.herokuapp.com/api/text/all?$orderby=_created_at%20desc&$limit=20'

fetch(url)
  .then(res => res.json())
  .then((json_data) => {
    console.log(json_data);
  });
