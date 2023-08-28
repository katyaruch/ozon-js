export const searchFilter = (items, value) => {
  return items.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
};

export const categoryFilter = (items, value) => {
  return items.filter((item) => value ?  item.category === value : true);
};

export const priceFilter = (items, min, max) => {
  if (max === '') max = Infinity;
  return items.filter((item) => {
    return item.price >= min && item.price <= max;
  });
};

export const saleFilter = (items, isSale) => {
  return items.filter((item) => {
    return isSale ? item.sale : true;
  });
};

export const clearFilter = () => {
  const filterInputs = document.querySelectorAll('.filter input');
  const saleMark = document.querySelector('.filter-check_checkmark');

  filterInputs.forEach((input) => {
    if (input.type === 'checkbox') input.checked = false;
      else input.value = '';
  });
  saleMark.classList.remove('checked');
}