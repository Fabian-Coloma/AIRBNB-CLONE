// Seleccionamos el div donde irán las tarjetas
const contenedorEstancias = document.getElementById('lista-estancias');

// Ponemos "export" para que el otro archivo pueda usar esta función
export function dibujarEstancias(estancias) {
  let html = '';

  // Nuestro clásico bucle for (igual que en la cafetería)
  for (let i = 0; i < estancias.length; i++) {
    let estancia = estancias[i];

    // 1. Verificamos si es Super Host
    let superHostHTML = '';
    if (estancia.superHost === true) {
      superHostHTML = '<span class="border border-black text-xs font-bold px-2 py-1 rounded-full mr-2">SUPER HOST</span>';
    }

    // 2. Verificamos si tiene camas (algunos no tienen la propiedad beds)
    let camasHTML = '';
    if (estancia.beds !== null) {
      camasHTML = `. ${estancia.beds} beds`;
    }

    // 3. Armamos la tarjeta con Tailwind básico
    html += `
      <div class="flex flex-col">
        
        <img src="${estancia.photo}" class="w-full h-64 object-cover rounded-2xl mb-3" alt="foto estancia">
        
        <div class="flex justify-between items-center mb-1">
          <div class="text-sm text-stone-500 truncate">
            ${superHostHTML}
            ${estancia.type} ${camasHTML}
          </div>
          <div class="flex items-center text-stone-700">
            <span class="text-red-500 mr-1 text-lg">★</span>
            <span>${estancia.rating}</span>
          </div>
        </div>

        <h3 class="font-semibold text-stone-800 truncate">${estancia.title}</h3>
      
      </div>
    `;
  }

  // Pegamos todo en el HTML
  contenedorEstancias.innerHTML = html;
}