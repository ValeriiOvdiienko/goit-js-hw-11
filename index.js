import{a as d,S as h,i as m}from"./assets/vendor-sgVy0kkG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function y(t){return d.get("https://pixabay.com/api/",{params:{key:"57395235-0ef9936ebfd59538adc74bf29",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits)}let p=new h(".gallery a",{overlay:!0,overlayOpacity:.8,captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(t){return t.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:r,comments:a,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${o}"
      data-source="${s}"
      alt="${i}"
    />
  </a>
  <ul class="statistic">
  <li><h3 class="statistic-header">Likes</h3> ${e}</li>
  <li><h3 class="statistic-header">Views</h3> ${r}</li>
   <li><h3 class="statistic-header">Comments</h3> ${a}</li>
    <li><h3 class="statistic-header">Downloads</h3> ${f}</li>
  </ul>
</li>`).join("")}function L(t,o){t.insertAdjacentHTML("beforeend",g(o)),p.refresh()}function b(t,o){t.innerHTML="",o.reset()}function P(t){t.classList.remove("hidden")}function n(t){t.classList.add("hidden")}function $(t){m.error({position:"topRight",timeout:5e3,message:t,icon:!1,messageColor:"#ffffff",backgroundColor:"#992a2a"})}const u=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");u.addEventListener("submit",q);function q(t){t.preventDefault();const s=t.target.elements[0].value;b(c,u),P(l),y(s).then(i=>i.length===0?($("Sorry, there are no images matching your search query. Please try again!"),null):i).then(i=>{n(l),i&&L(c,i)}).catch(i=>n())}
//# sourceMappingURL=index.js.map
