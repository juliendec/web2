const Header = () => {
  renderTitleAndWrapper();
};

function renderTitleAndWrapper() {
  const header = document.querySelector('header');
  header.innerHTML = '<div class="container"><div class="row"><div id="navbarWrapper"></div></div></div>';
}


export default Header;
