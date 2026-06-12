const contenedorEstancias = document.getElementById('lista-estancias');
const textoTotalEstancias = document.getElementById('total-estancias');

export function dibujarEstancias(estancias) {
    if (!contenedorEstancias) return;

    
    if (textoTotalEstancias) {
        textoTotalEstancias.textContent = `${estancias.length} stays`;
    }

    
    if (estancias.length === 0) {
        contenedorEstancias.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-stone-500 dark:text-stone-400 text-lg font-medium">
                    🔍 No se encontraron estancias que coincidan con tu búsqueda.
                </p>
                <p class="text-stone-400 dark:text-stone-500 text-sm mt-1">
                    Intenta seleccionando otra ubicación o reduciendo el número de huéspedes.
                </p>
            </div>
        `;
        return;
    }

    let html = '';

    
    for (let i = 0; i < estancias.length; i++) {
        let estancia = estancias[i];

        
        let superHostHTML = '';
        if (estancia.superHost === true) {
            superHostHTML = '<span class="border border-stone-800 dark:border-stone-200 text-[10px] font-bold px-2 py-0.5 rounded-full mr-2 tracking-wide uppercase text-stone-800 dark:text-stone-200">SUPER HOST</span>';
        }

        let camasHTML = '';
        if (estancia.beds !== null && estancia.beds !== undefined) {
            camasHTML = `. ${estancia.beds} beds`;
        }

        html += `
        <div class="flex flex-col gap-3 group">
            <div class="w-full h-64 overflow-hidden rounded-2xl">
                <img src="${estancia.photo}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="${estancia.title}">
            </div>
            
            <div class="flex justify-between items-center text-sm mt-1">
                <div class="flex items-center text-stone-500 dark:text-stone-400 truncate">
                    ${superHostHTML}
                    <span class="truncate">${estancia.type} ${camasHTML}</span>
                </div>
                <div class="flex items-center gap-1 text-stone-700 dark:text-stone-300 font-medium">
                    <span class="text-red-500 text-base">★</span>
                    <span>${estancia.rating}</span>
                </div>
            </div>
            
            <h3 class="font-semibold text-base text-stone-800 dark:text-stone-100 truncate">${estancia.title}</h3>
        </div>
        `;
    }

    contenedorEstancias.innerHTML = html;
}