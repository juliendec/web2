import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import imagePopcorn from './img/pexels-pixabay-33129.jpg';

const colPhoto = document.querySelector('.photo-col');
const colInfo = document.querySelector('.col-information');

const FILM = [
    {
      id: 1,
      title: '4 fantastiques',
      content: 'super-héros',
    },
    {
      id: 2,
      title: 'Iron man',
      content: 'super-héros',
    },
    {
      id: 3,
      title: 'E.T',
      content: 'Alien',
    },
    {
      id: 4,
      title: 'Taxi',
      content: 'course',
    },
    {
      id: 5,
      title: 'Inception',
      content: 'mindfuck',
    },
  ];

renderTitleCol("Plein d'infos ici !", colInfo);
renderTitleCol("Plein de photos ici !", colPhoto);
renderCinemaImage(imagePopcorn);
renderCinemaImage(imagePopcorn);
renderFilmFromString(FILM);

function renderCinemaImage(imageUrl) {
  const image = new Image(); // or document.createElement('img');
  image.src = imageUrl;
  colPhoto.appendChild(image);
}

function renderTitleCol(text, colone){
    const h2 = document.createElement('h2');
    h2.innerText = text;
    colone.appendChild(h2);
}

function renderFilmFromString(film){
    const menuTableAsString = getMenuTableAsString(film);
    colInfo.innerHTML += menuTableAsString;
}

function getMenuTableAsString(film) {
    const filmTableLines = getAllTableLinesAsString(film);
    const filmTable = addLinesToTableHeadersAndGet(filmTableLines);
    return filmTable;
}

function addLinesToTableHeadersAndGet(tableLines) {
    const menuTable = `
    <div class="table-responsive pt-5">
      <table class="table">
        <tr>
          <th>Film</th>
          <th>Description</th>
        </tr>
        ${tableLines}    
      </table>
    </div>
    `;
    return menuTable;
  }
  
  function getAllTableLinesAsString(filmInfo) {
    let filmTableLines = '';
  
    filmInfo?.forEach((film) => {
      filmTableLines += `<tr>
        <td>${film.title}</td>
        <td>${film.content}</td>
      </tr>`;
    });
  
    return filmTableLines;
  }