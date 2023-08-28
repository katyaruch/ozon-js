import getData from './getData';
import showNotice from './showNotice';
import renderGoods from './renderGoods';
import { searchFilter, clearFilter, categoryFilter } from './filters';
import { debounce } from './helpers';

const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input');
  const getCurrentCategory = () => {
    return localStorage.getItem('currentCategory') ?
      localStorage.getItem('currentCategory') :
      '';
  };
  
  const debounceSearch = debounce((event) => {
    let currentCategory = getCurrentCategory();
    getData().then((data) => {
      renderGoods(searchFilter(categoryFilter(data, currentCategory), event.target.value));
      showNotice('Найденные товары');
      clearFilter();
    });
  });
  searchInput.addEventListener('input', debounceSearch);

}

export default search;