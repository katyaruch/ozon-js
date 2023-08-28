const showNotice = (text) => {
  console.log(text);
  const notice = document.getElementById('notice');
  notice.textContent = text;
  notice.classList.remove('d-none');
  setTimeout(()=>{
    notice.classList.add('d-none');
  }, 2000)
};

export default showNotice;