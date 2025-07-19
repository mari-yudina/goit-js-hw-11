import{a as g,S as y,i as l}from"./assets/vendor-Cip_4kvj.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="51374392-1d28dcca77fe358de5d7c7fc3",v="https://pixabay.com/api/";function L(r){return g.get(v,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(s=>s.data)}const p=document.querySelector(".gallery");let b=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function S(r){const s=r.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:i,comments:m,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <div class="image-info">
  <div class="info-item">
    <span class="label">Likes:</span>
    <span class="value">${t}</span>
  </div>
  <div class="info-item">
    <span class="label">Views:</span>
    <span class="value">${i}</span>
  </div>
  <div class="info-item">
    <span class="label">Comments:</span>
    <span class="value">${m}</span>
  </div>
  <div class="info-item">
    <span class="label">Downloads:</span>
    <span class="value">${f}</span>
  </div>
</div>
        </li>`).join("");p.innerHTML=s,b.refresh()}function q(){p.innerHTML=""}const d=document.querySelector(".loader");function $(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const o=document.querySelector(".form"),u=o.querySelector('input[name="search-text"]');o.addEventListener("submit",r=>{r.preventDefault();const s=u.value.trim();if(!s){l.warning({title:"Порожнє поле",message:"Введи ключове слово для пошуку зображень!",position:"topCenter",timeout:3e3}),u.focus();return}$(),L(s).then(a=>{if(c(),a.hits.length===0){o.reset(),l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3});return}q(),S(a.hits),o.reset()}).catch(a=>{c(),l.error({title:"Помилка",message:`Не вдалося отримати зображення: ${a.message}`,position:"topRight",timeout:3e3})})});
//# sourceMappingURL=index.js.map
