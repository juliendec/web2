const clearPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
  };
  
  const renderPageTitle = (title) => {
    if (!title) return;
    const main = document.querySelector('main');

    main.innerHTML += `<div class="container"><div class="row justify-content-md-center"><div class="col-md-auto"><h4 class="title_page">${title}</h4></div></div></div>`;
  };
  
  export { clearPage, renderPageTitle };
  