/* eslint-disable no-plusplus */

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

const lines = document.querySelector('#columns');
const columns = document.querySelector('#lines');
const btn1 = document.querySelector('#btn1');
const startString = document.querySelector('#startString');
const table = document.querySelector('#tableWrapper');

btn1.addEventListener('click', getFormulaire);

function getFormulaire(event) {
  event.preventDefault();
  const valLines = lines.value;
  const valCol = columns.value;
  const valString = startString.value;

  createTable(valLines, valCol, valString);
}

function createTable(nbrLines, nbrCols, texte) {
  table.innerHTML = 'Loading';

  const menuTable = `
    <div class="table-responsive pt-5">
      <table class="table">
        ${tableLines(nbrLines, nbrCols, texte)}    
      </table>
    </div>
    `;
  table.innerHTML = menuTable;
}

function tableLines(nbrLines, nbrCols, texte) {
  let TableLines = '';

  for (let index1 = 0; index1 < nbrCols; index1++) {
    TableLines += '<tr>';
    for (let index2 = 0; index2 < nbrLines; index2++) {
      TableLines += `<td>${texte}[${index1}][${index2}]</td>`;
    }
    TableLines += '</tr>';
  }

  return TableLines;
}
