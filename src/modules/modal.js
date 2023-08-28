export const openModal = (id) => {
  const modalTemplate = document.querySelector(id);
  
  modalTemplate.addEventListener('click', (event) => {
    if (event.target == event.currentTarget || event.target.className.indexOf('modal-close') != -1) {
      closeModal(id);
    }
  });
  modalTemplate.style.display = 'flex';
  document.body.classList.add('overflow-hidden');
};

export const closeModal = (id) => {
  const modalTemplate = document.querySelector(id);

  modalTemplate.style.display = '';
  document.body.classList.remove('overflow-hidden');
};
