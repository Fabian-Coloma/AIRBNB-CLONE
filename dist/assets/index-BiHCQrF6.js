(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`lista-estancias`),t=document.getElementById(`total-estancias`);function n(n){if(!e)return;if(t&&(t.textContent=`${n.length} stays`),n.length===0){e.innerHTML=`
            <div class="col-span-full text-center py-12">
                <p class="text-stone-500 dark:text-stone-400 text-lg font-medium">
                    🔍 No se encontraron estancias que coincidan con tu búsqueda.
                </p>
                <p class="text-stone-400 dark:text-stone-500 text-sm mt-1">
                    Intenta seleccionando otra ubicación o reduciendo el número de huéspedes.
                </p>
            </div>
        `;return}let r=``;for(let e=0;e<n.length;e++){let t=n[e],i=``;t.superHost===!0&&(i=`<span class="border border-stone-800 dark:border-stone-200 text-[10px] font-bold px-2 py-0.5 rounded-full mr-2 tracking-wide uppercase text-stone-800 dark:text-stone-200">SUPER HOST</span>`);let a=``;t.beds!==null&&t.beds!==void 0&&(a=`. ${t.beds} beds`),r+=`
        <div class="flex flex-col gap-3 group">
            <div class="w-full h-64 overflow-hidden rounded-2xl">
                <img src="${t.photo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="${t.title}">
            </div>
            
            <div class="flex justify-between items-center text-sm mt-1">
                <div class="flex items-center text-stone-500 dark:text-stone-400 truncate">
                    ${i}
                    <span class="truncate">${t.type} ${a}</span>
                </div>
                <div class="flex items-center gap-1 text-stone-700 dark:text-stone-300 font-medium">
                    <span class="text-red-500 text-base">★</span>
                    <span>${t.rating}</span>
                </div>
            </div>
            
            <h3 class="font-semibold text-base text-stone-800 dark:text-stone-100 truncate">${t.title}</h3>
        </div>
        `}e.innerHTML=r}var r=[];async function i(){try{r=await(await fetch(`../public/stays.json`)).json(),c&&(c.value=``),l&&(l.value=``),n(r),S()}catch(e){console.error(`Error al cargar los datos:`,e)}}var a=document.getElementById(`btn-abrir-modal`),o=document.getElementById(`modal-busqueda`),s=document.getElementById(`btn-cerrar-modal`),c=document.getElementById(`input-ciudad`),l=document.getElementById(`input-huespedes`),u=document.getElementById(`btn-buscar-desktop`),d=document.getElementById(`btn-buscar-mobile`);a?.addEventListener(`click`,()=>o?.classList.remove(`hidden`)),s?.addEventListener(`click`,()=>o?.classList.add(`hidden`)),o?.addEventListener(`click`,e=>{e.target===o&&o.classList.add(`hidden`)}),document.querySelectorAll(`.ciudad-opcion`).forEach(e=>{e.addEventListener(`click`,function(){let e=this.getAttribute(`data-ciudad`);c&&(c.value=e,f())})});function f(){if(!c)return;let e=c.value.toLowerCase().trim(),t=p+m;n(r.filter(n=>{let r=n.city?n.city.toLowerCase().trim():``,i=e===``||r.includes(e),a=(n.maxGuests||0)>=t;return i&&a}))}c&&c.addEventListener(`input`,f),u?.addEventListener(`click`,()=>o?.classList.add(`hidden`)),d?.addEventListener(`click`,()=>o?.classList.add(`hidden`));var p=0,m=0,h=document.getElementById(`btn-restar-adultos`),g=document.getElementById(`btn-sumar-adultos`),_=document.getElementById(`contador-adultos`),v=document.getElementById(`btn-restar-ninos`),y=document.getElementById(`btn-sumar-ninos`),b=document.getElementById(`contador-ninos`);function x(){let e=p+m;l&&(l.value=e===0?``:`${e} guests`),S(),f()}function S(){p===0?h?.classList.add(`opacity-30`):h?.classList.remove(`opacity-30`),m===0?v?.classList.add(`opacity-30`):v?.classList.remove(`opacity-30`)}g?.addEventListener(`click`,()=>{p++,_&&(_.textContent=p),x()}),h?.addEventListener(`click`,()=>{p>0&&(p--,_&&(_.textContent=p),x())}),y?.addEventListener(`click`,()=>{m++,b&&(b.textContent=m),x()}),v?.addEventListener(`click`,()=>{m>0&&(m--,b&&(b.textContent=m),x())});var C=document.getElementById(`btn-dark-mode`);localStorage.getItem(`theme`)===`dark`||!(`theme`in localStorage)&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?document.documentElement.classList.add(`dark`):document.documentElement.classList.remove(`dark`),C?.addEventListener(`click`,()=>{document.documentElement.classList.contains(`dark`)?(document.documentElement.classList.remove(`dark`),localStorage.setItem(`theme`,`light`)):(document.documentElement.classList.add(`dark`),localStorage.setItem(`theme`,`dark`))}),i();