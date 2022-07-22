(()=>{"use strict";function e(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(t),t&&clearInterval(t)}function t(e){const t=document.querySelector(e);t.classList.remove("show"),t.classList.add("hide"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>e(".modal",n)),99e3);(function(e,t,n,o){const s=document.querySelectorAll(e),a=document.querySelectorAll(t);function r(){a.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),s.forEach((e=>{e.classList.remove(o)}))}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;a[e].classList.add("show","fade"),a[e].classList.remove("hide"),s[e].classList.add(o)}document.querySelector(n).addEventListener("click",(t=>{const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{n==e&&(r(),c(t))}))})),r(),c()})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(){class e{constructor(e,t,n,o,s,a){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=s;for(var r=arguments.length,c=new Array(r>6?r-6:0),i=6;i<r;i++)c[i-6]=arguments[i];this.classes=c,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price*=this.transfer}render(){const e=document.createElement("div");this.classes.forEach((t=>e.classList.add(t))),e.classList.contains("menu__item")||e.classList.add("menu__item"),e.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{let{img:n,altimg:o,title:s,descr:a,price:r}=t;new e(n,o,s,a,r,".menu .container").render()}))})),fetch("http://localhost:3000/menu").then((e=>e.json())).then((e=>console.log(e)))}(),function(n,o,s){const a=document.querySelectorAll(n),r=document.querySelector(o);a.forEach((t=>{t.addEventListener("click",(()=>e(o,s)))})),r.addEventListener("click",(e=>{e.target!==r&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&r.classList.contains("show")&&t(o)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(o,s),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",n),function(e,t){function n(e){return e>=0&&e<10?`0${e}`:e}!function(e,t){const o=document.querySelector(e),s=o.querySelector("#days"),a=o.querySelector("#hours"),r=o.querySelector("#minutes"),c=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date);let n=0,o=0,s=0,a=0;return t>0&&(n=Math.floor(t/864e5),o=Math.floor(t/36e5%24),s=Math.floor(t/6e4%60),a=Math.floor(t/1e3%60)),{total:t,days:n,hours:o,minutes:s,seconds:a}}(t);s.textContent=n(e.days),a.textContent=n(e.hours),r.textContent=n(e.minutes),c.textContent=n(e.seconds),e.total<=0&&clearInterval(i)}l()}(e,t)}(".timer","2022-08-01"),function(e){let{container:t,slide:n,nextArrow:o,prevArrow:s,totalCounter:a,currentCounter:r,wrapper:c,field:i}=e;const l=document.querySelectorAll(n),d=document.querySelector(t),u=document.querySelector(s),m=document.querySelector(o),h=document.querySelector(a),f=document.querySelector(r),g=document.querySelector(c),y=document.querySelector(i),p=window.getComputedStyle(g).width;let v=1,_=0;function w(e){return+e.replace(/\D/g,"")}function L(){f.textContent=v<10?`0${v}`:v}l.length<10?h.textContent=`0${l.length}`:h.textContent=l.length,L(),g.style.overflow="hidden",y.style.width=100*l.length+"%",y.style.display="flex",y.style.transition="0.5s all",l.forEach((e=>{e.style.width=p})),d.style.position="relative";const S=document.createElement("ol"),E=[];S.classList.add("slider-dots"),S.style.cssText="\n         position: absolute;\n         right: 0;\n         bottom: 0;\n         left: 0;\n         z-index: 15;\n         display: flex;\n         justify-content: center;\n         margin-right: 15%;\n         margin-left: 15%;\n         list-style: none;\n     ",d.append(S);for(let e=0;e<l.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n             box-sizing: content-box;\n             flex: 0 1 auto;\n             width: 30px;\n             height: 6px;\n             margin-right: 3px;\n             margin-left: 3px;\n             cursor: pointer;\n             background-color: #fff;\n             background-clip: padding-box;\n             border-top: 10px solid transparent;\n             border-bottom: 10px solid transparent;\n             opacity: .5;\n             transition: opacity .6s ease;\n         ",e+1===v&&(t.style.opacity="1"),S.append(t),E.push(t)}m.addEventListener("click",(()=>{_===w(p)*(l.length-1)?_=0:_+=w(p),y.style.transform=`translateX(${-_}px)`,v>=l.length?v=1:v++,L(),E.forEach((e=>e.style.opacity="0.5")),E[v-1].style.opacity="1"})),u.addEventListener("click",(()=>{0===_?_=w(p)*(l.length-1):_-=w(p),y.style.transform=`translateX(${-_}px)`,v<=1?v=l.length:v--,L(),E.forEach((e=>e.style.opacity="0.5")),E[v-1].style.opacity="1"})),E.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");v=t,_=w(p)*(t-1),y.style.transform=`translateX(${-_}px)`,E.forEach((e=>e.style.opacity="0.5")),E[v-1].style.opacity="1",L()}))}))}({wrapper:".offer__slider-wrapper",field:".offer__slider-inner",container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current"}),function(n,o){function s(n){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),s.classList.remove("show"),e(".modal",o);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n              <div class="modal__content">\n                  <div class="modal__close" data-close>×</div>\n                  <div class="modal__title">${n}</div>\n              </div>\n          `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),s.classList.add("show"),s.classList.remove("hide"),t(".modal")}),4e3)}document.querySelectorAll(n).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="icons/spinner.svg",n.style.cssText="\n                  display: block;\n                  margin: 0 auto;\n              ",t.insertAdjacentElement("afterend",n);const o=new FormData(t);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{console.log(e),s("Спасибо, мы скоро свяжемся с вами!"),n.remove()})).catch((()=>{s("Что-то пошло не так...")})).finally((()=>{t.reset()}))}))}))}("form",n),function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,a;function r(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function c(){e.textContent=t&&o&&s&&a&&n?"female"===t?Math.round((447.6+9.2*s+3.1*o-4.3*a)*n):Math.round((88.36+13.4*s+4.8*o-5.7*a)*n):"____"}function i(e,o){const s=document.querySelectorAll(e);s.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(n=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",n)):(t=e.target.getAttribute("id"),localStorage.setItem("sex",t)),console.log(n,t),s.forEach((e=>{e.classList.remove(o)})),e.target.classList.add(o),c()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":o=+t.value;break;case"weight":s=+t.value;break;case"age":a=+t.value}c()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex",t)),localStorage.getItem("ratio")?n=localStorage.getItem("ratio"):(n=1.375,localStorage.setItem("ratio",n)),r("#gender div","calculating__choose-item_active"),r(".calculating__choose_big div","calculating__choose-item_active"),c(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}()}))})();
//# sourceMappingURL=bundle.js.map