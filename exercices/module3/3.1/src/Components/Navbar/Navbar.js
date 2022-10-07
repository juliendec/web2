// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {
  const navbar = document.querySelector('#navbarWrapper');
  navbar.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">My Movies</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" data-uri="/">Home</a>
              </li>
              <li id="filmItem" class="nav-item">
                <a class="nav-link" href="#" data-uri="/film">Ajouter un film</a>
              </li>
              <li id="AjoutFilmItem" class="nav-item">
                <a class="nav-link" href="#" data-uri="/ajoutFilm">Voir tout les films</a>
              </li>           
            </ul>
          </div>
        </div>
      </nav>
  `;
}

export default Navbar;
