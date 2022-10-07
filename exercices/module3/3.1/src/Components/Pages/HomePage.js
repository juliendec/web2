import { clearPage, renderPageTitle } from '../../utils/render';

import imagePopcorn from '../../img/pexels-pixabay-33129.jpg';


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
  
  const HomePage = () => {
    clearPage();
    renderPageTitle('Home Page - Film');
    addWrapper();
  };
  
  function renderCinemaImage(imageUrl) {
  const image = new Image;
  image.src = imageUrl;
  return image.outerHTML;
}

function addWrapper() {
  const main = document.querySelector('main');
    main.innerHTML += `<div class="container">
    <div class="row">
      <div class="col-md-6 col-information">
        <h2>Plein d'infos ici !</h2>
        ${renderFilmFromString(FILM)}
      </div>

      <div class="col-md-6 photo-col">
        <h2>Plein de photos ici !</h2>
        ${renderCinemaImage(imagePopcorn)}
        ${renderCinemaImage(imagePopcorn)}
      </div>
    </div>
  </div> `;
  
}


function renderFilmFromString(film){
    const menuTableAsString = getMenuTableAsString(film);
    return menuTableAsString;
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
  
  export default HomePage;
  