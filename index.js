import{a as d,S as h,i as m}from"./assets/vendor-sgVy0kkG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function y(t){return d.get("https://pixabay.com/api/",{params:{key:"57395235-0ef9936ebfd59538adc74bf29",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function p(t){return t.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:r,comments:a,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${s}"
      data-source="${i}"
      alt="${o}"
    />
  </a>
  <ul class="statistic">
  <li><h3 class="statistic-header">Likes</h3> ${e}</li>
  <li><h3 class="statistic-header">Views</h3> ${r}</li>
   <li><h3 class="statistic-header">Comments</h3> ${a}</li>
    <li><h3 class="statistic-header">Downloads</h3> ${f}</li>
  </ul>
</li>`).join("")}function g(t,s){t.innerHTML="",s.reset()}function L(t){t.classList.remove("hidden")}function l(t){t.classList.add("hidden")}let b=new h(".gallery a",{overlay:!0,overlayOpacity:.8,captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function P(t){m.error({position:"topRight",timeout:5e3,message:t,icon:!1,messageColor:"#ffffff",backgroundColor:"#992a2a"})}const u=document.querySelector(".form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");u.addEventListener("submit",$);function $(t){t.preventDefault();const i=t.target.elements[0].value;g(c,u),L(n),y(i).then(o=>{if(o.data.hits.length===0)P("Sorry, there are no images matching your search query. Please try again!");else return o.data.hits}).then(o=>{l(n),o&&(c.insertAdjacentHTML("beforeend",p(o)),l(n),b.refresh())}).catch(o=>console.log(o))}
//# sourceMappingURL=index.js.map
