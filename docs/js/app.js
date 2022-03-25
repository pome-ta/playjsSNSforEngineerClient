'use strict';


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});


async function res_json(uri) {
  const res = await fetch(uri);
  const json_data = await res.json();
  return json_data;
}


function createElementAddClass(tag, ...names) {
  const element_obj = document.createElement(tag);
  for (const name of names){
    element_obj.classList.add(name);
  }
  return element_obj;
}

function outputResult(data) {
  const pTag = createElementAddClass('p', 'out');
  pTag.innerHTML = data;
  document.body.appendChild(pTag);
}



const url = 'https://versatileapi.herokuapp.com/api/text/all?$orderby=_created_at%20desc&$limit=20'

const json_data = await res_json(url);
outputResult(json_data);
