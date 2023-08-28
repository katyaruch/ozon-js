import getData from './getData';
import showNotice from './showNotice';
import renderGoods from './renderGoods';
import { priceFilter, saleFilter,searchFilter, categoryFilter } from './filters';
import { debounce } from './helpers';

const filter = () => {
  const filter = document.querySelector('.filter');
  const saleInput = filter.querySelector('#discount-checkbox');
  const saleMark = filter.querySelector('.filter-check_checkmark');
  const searchInput = document.querySelector('.search-wrapper_input');
  let price = {
    min: 0,
    max: Infinity,
  };
  const getCurrentCategory = () => {
    return localStorage.getItem('currentCategory') ?
      localStorage.getItem('currentCategory') :
      '';
  };

  filter.addEventListener('input', (event) => {
    if (event.target.id === 'min') {
      price.min = event.target.value;
      changeFilter();
      showNotice('Товары по цене от: ' +price.min);
    }
    if (event.target.id === 'max') {
      price.max = event.target.value;
      changeFilter();
      showNotice('Товары по цене до: ' +price.max);
    }
  });

  saleInput.addEventListener('change', () => {
    changeFilter();
    if (saleInput.checked) {
      showNotice('Товары только по акции');
      saleMark.classList.add('checked');
    } else {
      showNotice('Товары не только по акции');
      saleMark.classList.remove('checked');
    }
  });

  const changeFilter = debounce(() => {
    getData().then((data) => {
      let currentCategory = getCurrentCategory();
      renderGoods(categoryFilter(priceFilter(saleFilter(searchFilter(data, searchInput.value), saleInput.checked), price.min, price.max), currentCategory));
    });
  });
}

export default filter;