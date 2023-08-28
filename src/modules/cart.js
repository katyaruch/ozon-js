import postData from './postData';
import showNotice from './showNotice';
import renderCart from './renderCart';
import {openModal, closeModal} from './modal';
import renderOrder from './renderOrder';

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartCounter = cartBtn.querySelector('.counter');

  const cartModal = document.querySelector('.cart');
  const cartTotal = cartModal.querySelector('.cart-total > span');
  const cartWrapper = cartModal.querySelector('.cart-wrapper');
  const cartSendBtn = cartModal.querySelector('.cart-confirm');

  const goodsWrapper = document.querySelector('.goods');
  const orderSendBtn = document.querySelector('.order-confirm');

  const getCartItems = () => {
    return localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) :
      [];
  };

  const cartRender = (cartArray) => {
    renderCart(cartArray);

    cartTotal.textContent = cartArray.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
  };

  const changeTotalCounter = () => {
    const cartArray = getCartItems();
    cartCounter.textContent = cartArray.length;
  };
  changeTotalCounter();

  const openCart = () => {
    const cartArray = getCartItems();

    cartModal.style.display = 'flex';
    document.body.classList.add('overflow-hidden');
    cartRender(cartArray);
  };

  const closeCart = () => {
    cartModal.style.display = '';
    document.body.classList.remove('overflow-hidden');
  };

  const addToCart = (event) => {
    const card = event.target.closest('.card');
    const key = card.dataset.key;
    const goods = JSON.parse(localStorage.getItem('goods'));
    const cartArray = getCartItems();

    const goodItem = goods.find((item) => {
      return item.id === +key;
    })

    if (goodItem) {
      cartArray.push(goodItem);
      localStorage.setItem('cart', JSON.stringify(cartArray));
      changeTotalCounter();
      showNotice(`${goodItem.title} добавлен в корзину`);
    }
  };

  const removeFromCart = (event) => {
    const card = event.target.closest('.card');
    const key = card.dataset.key;
    const cartArray = getCartItems();
    const index = cartArray.findIndex((item) => {
      return item.id === +key;
    });

    showNotice(`${cartArray[index].title} удалён из корзины`);
    cartArray.splice(index, 1);
    
    localStorage.setItem('cart', JSON.stringify(cartArray));
    
    changeTotalCounter();
    cartRender(cartArray);
  };

  cartBtn.addEventListener('click', openCart);
  cartModal.addEventListener('click', (event) => {
    if (event.target == event.currentTarget || event.target.className.indexOf('cart-close') != -1) {
      closeCart();
    }
  })

  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      addToCart(event);
    }
  });

  cartWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-delete')) {
      removeFromCart(event);
    }
  });

  cartSendBtn.addEventListener('click', () => {
    const cartArray = getCartItems();
    if (cartArray.length) {
      closeModal('.cart');
      openModal('#modal--confirm');
    }
  });
  orderSendBtn.addEventListener('click', () => {
    closeModal('#modal--confirm');
    const cartArray = getCartItems();
    renderOrder(cartArray);
    if (cartArray.length) {
      postData(cartArray).then(() => {
        openModal('#modal--order');
        localStorage.removeItem('cart');
        cartRender(getCartItems());
        changeTotalCounter();
        showNotice('Отправлен POST-запрос на jsonplaceholder');
      });
    }
  });
};

export default cart;
