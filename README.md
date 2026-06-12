# ⛺ Windbnb - Proyecto Frontend v4

¡Bienvenido a **Windbnb**! Este proyecto es una versión simplificada y moderna de la popular plataforma de alojamientos, desarrollada como parte del plan de estudios de Front-End de Funval International. 

La aplicación permite a los usuarios explorar estancias disponibles en Finlandia, aplicando filtros dinámicos en tiempo real por ubicación y número de huéspedes, todo bajo una interfaz fluida y adaptativa.

---

## 🚀 Características Clave

* **Filtros en Tiempo Real:** Búsqueda instantánea de alojamientos por ciudades específicas (*Helsinki, Turku, Oulu, Vaasa*).
* **Control de Huéspedes Efectivo:** Sistema reactivo mediante botones de incremento y decremento (`+` y `-`) para adultos y niños.
* **Modo Oscuro Nativo:** Soporte integrado para Light y Dark Mode que se guarda en el almacenamiento local (`localStorage`) para recordar la preferencia del usuario.
* **Etiquetas Dinámicas:** Renderizado inteligente de la píldora **SUPER HOST** basándose en las propiedades de la base de datos.
* **Mensajes de Estado Vacío:** Interfaz amigable que notifica al usuario si no se encuentran estancias que coincidan con sus criterios de búsqueda.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica avanzada para asegurar accesibilidad y buenas prácticas.
* **JavaScript (ES6+):** Lógica modular dividida en componentes (`main.js` para eventos/filtros y `render.js` para manipulación del DOM).
* **Tailwind CSS v4:** Maquetación moderna utilizando las últimas directivas de compilación rápida y diseño responsivo (*Mobile First*).
* **Vite:** Entorno de desarrollo rápido para el empaquetado y optimización de recursos.
* **PNPM:** Gestor de dependencias eficiente para la instalación y ejecución del entorno.

---

## 📦 Instalación y Uso Local

Sigue estos pasos para levantar el entorno de desarrollo en tu computadora:

1. **Clonar el repositorio o extraer los archivos:**
   Asegúrate de situarte en la carpeta raíz del proyecto mediante tu terminal.

2. **Instalar las dependencias necesarias:**
   ```bash
   pnpm install