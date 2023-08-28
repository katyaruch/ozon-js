(()=>{"use strict";const e=e=>{console.log(e);const t=document.getElementById("notice");t.textContent=e,t.classList.remove("d-none"),setTimeout((()=>{t.classList.add("d-none")}),2e3)},t=e=>{const t=document.querySelector(e);t.addEventListener("click",(t=>{t.target!=t.currentTarget&&-1==t.target.className.indexOf("modal-close")||c(e)})),t.style.display="flex",document.body.classList.add("overflow-hidden")},c=e=>{document.querySelector(e).style.display="",document.body.classList.remove("overflow-hidden")},r=()=>fetch("https://test-ozon-92652-default-rtdb.europe-west1.firebasedatabase.app/goods.json").then((e=>e.json())),n=(e,t=300)=>{let c;return(...r)=>{clearTimeout(c),c=setTimeout((()=>{e.apply(void 0,r)}),t)}},a=e=>{localStorage.setItem("goods",JSON.stringify(e));let t=localStorage.getItem("currentCategory")?localStorage.getItem("currentCategory"):"";const c=document.querySelector(".goods-info");c.innerHTML="",c.insertAdjacentHTML("beforeend",`\n      ${t?`<p class="h3 my-3">${t}</p>`:""}\n      ${e.length?`<p class="mb-3">${e.length} товар${(e=>{let t=Number(String(e).slice(-1));return 2===t||2===t||3===t||4===t?"a":1===t?"":"ов"})(e.length)}</p>`:""}\n`);const r=document.querySelector(".goods");r.innerHTML="",0===e.length?r.insertAdjacentHTML("beforeend",'\n      <div class="">\n        По вашему запросу ничего не найдено\n      </div>\n    '):e.forEach((e=>{r.insertAdjacentHTML("beforeend",`\n        <div class="col-12 col-md-6 col-lg-4 col-xl-3">\n          <div class="card" data-key="${e.id}">\n          ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n            <div class="card-img-wrapper">\n              <span class="card-img-top"\n                style="background-image: url('${e.img}')"></span>\n            </div>\n            <div class="card-body justify-content-between">\n              <div class="card-price">${e.price} ₽</div>\n              <h5 class="card-title">${e.title}</h5>\n              <button class="btn btn-primary">В корзину</button>\n            </div>\n          </div>\n        </div>\n      `)}))},o=(e,t)=>e.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))),s=(e,t)=>e.filter((e=>!t||e.category===t)),l=()=>{const e=document.querySelectorAll(".filter input"),t=document.querySelector(".filter-check_checkmark");e.forEach((e=>{"checkbox"===e.type?e.checked=!1:e.value=""})),t.classList.remove("checked")};(()=>{const r=document.getElementById("cart"),n=r.querySelector(".counter"),a=document.querySelector(".cart"),o=a.querySelector(".cart-total > span"),s=a.querySelector(".cart-wrapper"),l=a.querySelector(".cart-confirm"),d=document.querySelector(".goods"),i=document.querySelector(".order-confirm"),u=()=>localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],m=e=>{(e=>{const t=document.querySelector(".cart-wrapper");t.innerHTML="",0===e.length?t.insertAdjacentHTML("beforeend",'\n      <div id="cart-empty">\n        Ваша корзина пока пуста\n      </div>\n    '):e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n        <div class="card" data-key="${e.id}">\n          ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n          <div class="card-img-wrapper">\n            <span class="card-img-top"\n              style="background-image: url('${e.img}')"></span>\n          </div>\n          <div class="card-body justify-content-between">\n            <div class="card-price">${e.price} ₽</div>\n            <h5 class="card-title">${e.title}</h5>\n            <button class="btn btn-primary btn-delete">Удалить</button>\n          </div>\n        </div>\n      `)}))})(e),o.textContent=e.reduce(((e,t)=>e+t.price),0)},g=()=>{const e=u();n.textContent=e.length};g(),r.addEventListener("click",(()=>{const e=u();a.style.display="flex",document.body.classList.add("overflow-hidden"),m(e)})),a.addEventListener("click",(e=>{e.target!=e.currentTarget&&-1==e.target.className.indexOf("cart-close")||(a.style.display="",document.body.classList.remove("overflow-hidden"))})),d.addEventListener("click",(t=>{t.target.classList.contains("btn-primary")&&(t=>{const c=t.target.closest(".card").dataset.key,r=JSON.parse(localStorage.getItem("goods")),n=u(),a=r.find((e=>e.id===+c));a&&(n.push(a),localStorage.setItem("cart",JSON.stringify(n)),g(),e(`${a.title} добавлен в корзину`))})(t)})),s.addEventListener("click",(t=>{t.target.classList.contains("btn-delete")&&(t=>{const c=t.target.closest(".card").dataset.key,r=u(),n=r.findIndex((e=>e.id===+c));e(`${r[n].title} удалён из корзины`),r.splice(n,1),localStorage.setItem("cart",JSON.stringify(r)),g(),m(r)})(t)})),l.addEventListener("click",(()=>{u().length&&(c(".cart"),t("#modal--confirm"))})),i.addEventListener("click",(()=>{c("#modal--confirm");const r=u();var n;(e=>{const t=document.querySelector(".order-data");t.innerHTML="",e.length&&e.forEach((e=>{t.insertAdjacentHTML("beforeend",`\n        <div class="card" data-key="${e.id}">\n          ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n          <div class="card-img-wrapper">\n            <span class="card-img-top"\n              style="background-image: url('${e.img}')"></span>\n          </div>\n          <div class="card-body justify-content-between">\n            <div class="card-price">${e.price} ₽</div>\n            <h5 class="card-title">${e.title}</h5>\n          </div>\n        </div>\n      `)}))})(r),r.length&&(n=r,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json()))).then((()=>{t("#modal--order"),localStorage.removeItem("cart"),m(u()),g(),e("Отправлен POST-запрос на jsonplaceholder")}))}))})(),r().then((t=>{a(t),e("Товары загружены")})),(()=>{const t=document.querySelector(".search-wrapper_input"),c=n((t=>{let c=localStorage.getItem("currentCategory")?localStorage.getItem("currentCategory"):"";r().then((r=>{a(o(s(r,c),t.target.value)),e("Найденные товары"),l()}))}));t.addEventListener("input",c)})(),(()=>{const t=document.querySelector(".catalog-button"),c=document.querySelector(".catalog"),n=document.querySelector(".search-wrapper_input");let o=!1;localStorage.removeItem("currentCategory");const d=()=>{o=!o,c.style.display=o?"block":""};t.addEventListener("click",(()=>d())),c.addEventListener("click",(t=>{if("LI"==t.target.tagName){let c=t.target.textContent;localStorage.setItem("currentCategory",c),r().then((t=>{a(s(t,c)),e("Товары категории "+c),l(),n.value=""}))}})),document.addEventListener("click",(e=>{!t.contains(e.target)&&o&&d()}))})(),(()=>{const t=document.querySelector(".filter"),c=t.querySelector("#discount-checkbox"),l=t.querySelector(".filter-check_checkmark"),d=document.querySelector(".search-wrapper_input");let i={min:0,max:1/0};t.addEventListener("input",(t=>{"min"===t.target.id&&(i.min=t.target.value,u(),e("Товары по цене от: "+i.min)),"max"===t.target.id&&(i.max=t.target.value,u(),e("Товары по цене до: "+i.max))})),c.addEventListener("change",(()=>{u(),c.checked?(e("Товары только по акции"),l.classList.add("checked")):(e("Товары не только по акции"),l.classList.remove("checked"))}));const u=n((()=>{r().then((e=>{let t=localStorage.getItem("currentCategory")?localStorage.getItem("currentCategory"):"";var r,n;a(s(((e,t,c)=>(""===c&&(c=1/0),e.filter((e=>e.price>=t&&e.price<=c))))((r=o(e,d.value),n=c.checked,r.filter((e=>!n||e.sale))),i.min,i.max),t))}))}))})()})();
//# sourceMappingURL=main.js.map