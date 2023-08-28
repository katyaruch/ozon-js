export const debounce = (func, ms = 300) => {
  let timer;

  return(...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {func.apply(this, args)}, ms);
  }
};

export const endingCounts = (num) => {
  let lastNum = Number(String(num).slice(-1));
  if (lastNum === 2 || lastNum === 2 || lastNum === 3 || lastNum === 4) {
    return 'a';
  } else if (lastNum === 1) {
    return '';
  } else {
    return 'ов';
  }
};
