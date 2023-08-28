const renderOrder = (goods) => {  
  const dataWrapper = document.querySelector('.order-data');

  dataWrapper.innerHTML = '';

  if (goods.length) {
    goods.forEach((goodsItem) => {
      dataWrapper.insertAdjacentHTML('beforeend', `
        <div class="card" data-key="${goodsItem.id}">
          ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
          <div class="card-img-wrapper">
            <span class="card-img-top"
              style="background-image: url('${goodsItem.img}')"></span>
          </div>
          <div class="card-body justify-content-between">
            <div class="card-price">${goodsItem.price} ₽</div>
            <h5 class="card-title">${goodsItem.title}</h5>
          </div>
        </div>
      `);
    });
  }
};

export default renderOrder;