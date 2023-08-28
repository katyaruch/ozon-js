import getData from './getData';
import showNotice from './showNotice';
import renderGoods from './renderGoods';
import {categoryFilter, clearFilter} from './filters';

const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button');
  const catalogModal = document.querySelector('.catalog');
  const searchInput = document.querySelector('.search-wrapper_input');
  
  let isOpen = false;
  localStorage.removeItem('currentCategory');

  const toggleModal = () => {
    isOpen = !isOpen;
    if (isOpen) {
      catalogModal.style.display = 'block';
    } else {
      catalogModal.style.display = '';
    }
  };

  btnCatalog.addEventListener('click', () => toggleModal());

  catalogModal.addEventListener('click', (event) => {
    if (event.target.tagName == 'LI') {
      let currentCategory = event.target.textContent;
      localStorage.setItem('currentCategory', currentCategory);
      getData().then((data) => {
        renderGoods(categoryFilter(data, currentCategory));
        showNotice('Товары категории '+currentCategory);
        clearFilter();
        searchInput.value = '';
      });
    }
  });
        
  document.addEventListener('click', (event) => {
    if (!btnCatalog.contains(event.target) && isOpen) {
      toggleModal();
    }
  });
};

export default catalog;