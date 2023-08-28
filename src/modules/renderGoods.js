import { endingCounts } from "./helpers";

const renderGoods = (goods) => {
  localStorage.setItem('goods', JSON.stringify(goods));
  const getCurrentCategory = () => {
    return localStorage.getItem('currentCategory') ?
      localStorage.getItem('currentCategory') :
      '';
  };
  let category = getCurrentCategory();

  const goodsInfo = document.querySelector('.goods-info');

  goodsInfo.innerHTML = '';

  goodsInfo.insertAdjacentHTML('beforeend', `
      ${category ? `<p class="h3 my-3">${category}</p>`: ''}
      ${goods.length ? `<p class="mb-3">${goods.length} товар${endingCounts(goods.length)}</p>` : ''}
`);

  const goodsWrapper = document.querySelector('.goods');

  goodsWrapper.innerHTML = '';

  if (goods.length === 0) {
    goodsWrapper.insertAdjacentHTML('beforeend', `
      <div class="">
        По вашему запросу ничего не найдено
      </div>
    `);
  } else {
    goods.forEach((goodsItem) => {
      goodsWrapper.insertAdjacentHTML('beforeend', `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card" data-key="${goodsItem.id}">
          ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
            <div class="card-img-wrapper">
              <span class="card-img-top"
                style="background-image: url('${goodsItem.img}')"></span>
            </div>
            <div class="card-body justify-content-between">
              <div class="card-price">${goodsItem.price} ₽</div>
              <h5 class="card-title">${goodsItem.title}</h5>
              <button class="btn btn-primary">В корзину</button>
            </div>
          </div>
        </div>
      `);
    });
  } 
};

export default renderGoods;