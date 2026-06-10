// Importamos la función para dibujar las tarjetas desde render.js
import { dibujarEstancias } from './render.js';

// Variable global para guardar las estancias
let todasLasEstancias = [];

// --- 1. CARGA DE DATOS ---
async function cargarDatos() {
  try {
    const respuesta = await fetch('/AIRBNB-CLONE/stays.json');
    todasLasEstancias = await respuesta.json();
    
    // Dibujamos las tarjetas por primera vez
    dibujarEstancias(todasLasEstancias);
  } catch (error) {
    console.log("Error al cargar los datos:", error);
  }
}

// --- 2. SELECCIÓN DE ELEMENTOS DEL HTML ---
const btnAbrirModal = document.getElementById('btn-abrir-modal');
const modalBusqueda = document.getElementById('modal-busqueda');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');

const inputCiudad = document.getElementById('input-ciudad');
const inputHuespedes = document.getElementById('input-huespedes');
const btnBuscarDesktop = document.getElementById('btn-buscar-desktop');
const btnBuscarMobile = document.getElementById('btn-buscar-mobile');

// --- 3. EVENTOS PARA ABRIR Y CERRAR EL MODAL ---
btnAbrirModal.addEventListener('click', function() {
  modalBusqueda.classList.remove('hidden');
});

btnCerrarModal.addEventListener('click', function() {
  modalBusqueda.classList.add('hidden');
});

modalBusqueda.addEventListener('click', function(evento) {
  if (evento.target === modalBusqueda) {
    modalBusqueda.classList.add('hidden');
  }
});

// --- 4. LÓGICA DE LOS FILTROS (DINÁMICO EN TIEMPO REAL) ---
function filtrarEstancias() {
  const ciudadBuscada = inputCiudad.value.toLowerCase().trim();
  const huespedesBuscados = parseInt(inputHuespedes.value) || 0; 

  const estanciasFiltradas = todasLasEstancias.filter((estancia) => {
    const coincideCiudad = estancia.city.toLowerCase().includes(ciudadBuscada) || 
                           estancia.country.toLowerCase().includes(ciudadBuscada) || 
                           ciudadBuscada === '';
    
    const coincideHuespedes = estancia.maxGuests >= huespedesBuscados;

    return coincideCiudad && coincideHuespedes;
  });

  // Dibujamos las nuevas tarjetas al instante
  dibujarEstancias(estanciasFiltradas);
}

// --- 5. EVENTOS DE TECLADO Y BOTONES DE BÚSQUEDA ---

// El evento 'input' filtra automáticamente cada vez que escribes una letra
inputCiudad.addEventListener('input', filtrarEstancias);

// Los botones naranjas ahora solo sirven para cerrar el panel
btnBuscarDesktop.addEventListener('click', function() {
  modalBusqueda.classList.add('hidden');
});

btnBuscarMobile.addEventListener('click', function() {
  modalBusqueda.classList.add('hidden');
});

// --- 6. INICIO DE LA APLICACIÓN (¡La llave de arranque!) ---
cargarDatos();

// --- 7. LÓGICA DE LOS CONTADORES DE HUÉSPEDES ---

// Empezamos con 0 huéspedes
let totalAdultos = 0;
let totalNinos = 0;

// Seleccionamos los botones y los textos (spans) de los números
const btnRestarAdultos = document.getElementById('btn-restar-adultos');
const btnSumarAdultos = document.getElementById('btn-sumar-adultos');
const spanContadorAdultos = document.getElementById('contador-adultos');

const btnRestarNinos = document.getElementById('btn-restar-ninos');
const btnSumarNinos = document.getElementById('btn-sumar-ninos');
const spanContadorNinos = document.getElementById('contador-ninos');

// Función maestra que actualiza el input principal y filtra
function actualizarHuespedes() {
  const total = totalAdultos + totalNinos;
  
  // Actualizamos el texto del input para que el usuario vea el total
  if (total === 0) {
    inputHuespedes.value = ''; // Si es 0, lo dejamos vacío para que se vea el placeholder
  } else {
    inputHuespedes.value = `${total} guests`; // Ejemplo: "3 guests"
  }

  // Como el valor del input cambió, llamamos a la función que ya tenías para que filtre en tiempo real
  filtrarEstancias();
}

// --- Eventos para Adultos ---
btnSumarAdultos.addEventListener('click', function() {
  totalAdultos++; // Sumamos 1
  spanContadorAdultos.textContent = totalAdultos; // Pintamos el nuevo número
  actualizarHuespedes(); // Actualizamos y filtramos
});

btnRestarAdultos.addEventListener('click', function() {
  // Aquí está el candado para que no baje de 0
  if (totalAdultos > 0) {
    totalAdultos--; // Restamos 1
    spanContadorAdultos.textContent = totalAdultos;
    actualizarHuespedes();
  }
});

// --- Eventos para Niños ---
btnSumarNinos.addEventListener('click', function() {
  totalNinos++;
  spanContadorNinos.textContent = totalNinos;
  actualizarHuespedes();
});

btnRestarNinos.addEventListener('click', function() {
  if (totalNinos > 0) {
    totalNinos--;
    spanContadorNinos.textContent = totalNinos;
    actualizarHuespedes();
  }
});