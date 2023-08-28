import getData from './getData';
import showNotice from './showNotice';
import renderGoods from './renderGoods';

const load = () => {
  getData().then((data) => {
    renderGoods(data);
    showNotice('Товары загружены');
  });
};

export default load;
