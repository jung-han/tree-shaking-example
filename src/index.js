import { cube } from './math.js';
//import math from './math.js';

function component() {
  var element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5),
    //'5 cubed is equal to ' + math.cube(5),
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());