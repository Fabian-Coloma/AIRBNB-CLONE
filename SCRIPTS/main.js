import { dibujarEstancias } from './render.js';

let todasLasEstancias = [];

// --- 1. CARGA DE DATOS ---
async function cargarDatos() {
    try {
        const respuesta = await fetch('./stays.json'); 
        todasLasEstancias = await respuesta.json();
        return todasLasEstancias; 
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}
let cards = await cargarDatos();
dibujarEstancias(cards)

// --- 2. SELECCIÓN DE ELEMENTOS DEL DOM ---
const btnAbrirModal = document.getElementById('btn-abrir-modal'); 
const modalBusqueda = document.getElementById('modal-busqueda');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');

const inputCiudad = document.getElementById('input-ciudad');
const inputHuespedes = document.getElementById('input-huespedes');
const btnBuscarDesktop = document.getElementById('btn-buscar-desktop');
const btnBuscarMobile = document.getElementById('btn-buscar-mobile');

// --- 3. EVENTOS PARA ABRIR Y CERRAR EL MODAL ---
btnAbrirModal?.addEventListener('click', () => modalBusqueda?.classList.remove('hidden'));
btnCerrarModal?.addEventListener('click', () => modalBusqueda?.classList.add('hidden'));

modalBusqueda?.addEventListener('click', (e) => {
    if (e.target === modalBusqueda) modalBusqueda.classList.add('hidden');
});

// --- 4. LÓGICA DE SELECCIÓN DE CIUDAD DESDE LA LISTA ---
const listaCiudades = document.querySelectorAll('.ciudad-opcion');

listaCiudades.forEach(opcion => {
    opcion.addEventListener('click', function () {
        const ciudadSeleccionada = this.getAttribute('data-ciudad');
        if (inputCiudad) {
            inputCiudad.value = ciudadSeleccionada;
            filtrarEstancias(); // Filtra al hacer click
        }
    });
});

// --- 5. LÓGICA DE FILTROS (ESTABLE Y REACTIVA) ---
function filtrarEstancias() {
    if (!inputCiudad) return;

    const ciudadBuscada = inputCiudad.value.toLowerCase().trim();
    const huespedesBuscados = totalAdultos + totalNinos;

    const estanciasFiltradas = todasLasEstancias.filter((estancia) => {
        const ciudadJSON = estancia.city ? estancia.city.toLowerCase().trim() : '';
        
        // Comparación directa de ciudades
        const coincideCiudad = ciudadBuscada === '' || ciudadJSON.includes(ciudadBuscada);
        const coincideHuespedes = (estancia.maxGuests || 0) >= huespedesBuscados;

        return coincideCiudad && coincideHuespedes;
    });

    dibujarEstancias(estanciasFiltradas);
}

if (inputCiudad) {
    inputCiudad.addEventListener('input', filtrarEstancias);
}

// Botones de búsqueda cierran el modal según instrucciones del profesor
btnBuscarDesktop?.addEventListener('click', () => modalBusqueda?.classList.add('hidden'));
btnBuscarMobile?.addEventListener('click', () => modalBusqueda?.classList.add('hidden'));

// --- 6. LOGICA DE CONTADORES (+ Y -) ---
let totalAdultos = 0;
let totalNinos = 0;

const btnRestarAdultos = document.getElementById('btn-restar-adultos');
const btnSumarAdultos = document.getElementById('btn-sumar-adultos');
const spanContadorAdultos = document.getElementById('contador-adultos');

const btnRestarNinos = document.getElementById('btn-restar-ninos');
const btnSumarNinos = document.getElementById('btn-sumar-ninos');
const spanContadorNinos = document.getElementById('contador-ninos');

function actualizarHuespedes() {
    const total = totalAdultos + totalNinos;
    if (inputHuespedes) {
        inputHuespedes.value = total === 0 ? '' : `${total} guests`;
    }
    actualizarEstilosBotones();
    filtrarEstancias();
}

function actualizarEstilosBotones() {
    if (totalAdultos === 0) btnRestarAdultos?.classList.add('opacity-30');
    else btnRestarAdultos?.classList.remove('opacity-30');

    if (totalNinos === 0) btnRestarNinos?.classList.add('opacity-30');
    else btnRestarNinos?.classList.remove('opacity-30');
}

btnSumarAdultos?.addEventListener('click', () => { totalAdultos++; if (spanContadorAdultos) spanContadorAdultos.textContent = totalAdultos; actualizarHuespedes(); });
btnRestarAdultos?.addEventListener('click', () => { if (totalAdultos > 0) { totalAdultos--; if (spanContadorAdultos) spanContadorAdultos.textContent = totalAdultos; actualizarHuespedes(); } });
btnSumarNinos?.addEventListener('click', () => { totalNinos++; if (spanContadorNinos) spanContadorNinos.textContent = totalNinos; actualizarHuespedes(); });
btnRestarNinos?.addEventListener('click', () => { if (totalNinos > 0) { totalNinos--; if (spanContadorNinos) spanContadorNinos.textContent = totalNinos; actualizarHuespedes(); } });

// --- 7. FUNCIONALIDAD DARK MODE NATIVA ---
const btnDarkMode = document.getElementById('btn-dark-mode');

if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

btnDarkMode?.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Inicializar la aplicación
cargarDatos();

// hola
// hola