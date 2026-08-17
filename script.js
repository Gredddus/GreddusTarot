// Referencias a los elementos del DOM
const welcomeView = document.getElementById('welcome-view');
const resultView = document.getElementById('result-view');

// Inputs y datalists (tanto de la vista principal como del buscador inferior)
const searchInput = document.getElementById('search-input');
const searchInputBottom = document.getElementById('search-input-bottom');
const suggestionsList = document.getElementById('suggestions-list');

// Botones
const searchBtn = document.getElementById('search-btn');
const searchBtnBottom = document.getElementById('search-btn-bottom');
const randomBtn = document.getElementById('random-btn');
const randomBtnBottom = document.getElementById('random-btn-bottom');
const backBtn = document.getElementById('back-btn');

// Elementos donde se pintará la información de la carta
const cardTitle = document.getElementById('card-title');
const cardImg = document.getElementById('card-img');
const cardDescription = document.getElementById('card-description');

// --- 1. CARGAR LAS SUGERENCIAS EN EL DATALIST AL INICIO ---
function initSuggestions() {
    suggestionsList.innerHTML = '';
    cartas.forEach(carta => {
        const option = document.createElement('option');
        option.value = carta.nombre;
        suggestionsList.appendChild(option);
    });
}

// --- 2. MOSTRAR CARTA EN LA VISTA DE RESULTADOS ---
function displayCard(carta) {
    cardTitle.textContent = carta.nombre;
    cardImg.src = carta.imagen;
    cardImg.alt = carta.nombre;
    
    // Verificamos si el nombre contiene la palabra "Invertido"
    if (carta.nombre.toLowerCase().includes("invertido")) {
        cardImg.classList.add('invertida'); // Rota la imagen 180°
    } else {
        cardImg.classList.remove('invertida'); // La deja normal (derecha)
    }

    // Usamos innerHTML para que reconozca las etiquetas <strong> o Markdown si usas negritas
    cardDescription.innerHTML = carta.descripcion;

    // Cambiar de vista (ocultar bienvenida, mostrar resultado)
    welcomeView.classList.remove('active');
    welcomeView.classList.add('hidden');
    
    resultView.classList.remove('hidden');
    resultView.classList.add('active');

    // Limpiar los inputs de búsqueda
    searchInput.value = '';
    searchInputBottom.value = '';
}

// --- 3. FUNCIÓN DE BÚSQUEDA (Por nombre o descripción) ---
function realizarBusqueda(textoBusqueda) {
    const query = textoBusqueda.toLowerCase().trim();
    if (!query) return;

    // Buscar coincidencia exacta por nombre primero, o si la descripción incluye el texto
    const encontrada = cartas.find(carta => 
        carta.nombre.toLowerCase().includes(query) || 
        carta.descripcion.toLowerCase().includes(query)
    );

    if (encontrada) {
        displayCard(encontrada);
    } else {
        alert("No se encontró ninguna carta con ese criterio. ¡Prueba otra palabra!");
    }
}

// --- 4. FUNCIÓN DE CARTA ALEATORIA ---
function mostrarCartaAleatoria() {
    const randomIndex = Math.floor(Math.random() * cartas.length);
    displayCard(cartas[randomIndex]);
}

// --- 5. REGRESAR AL MENÚ INICIAL ---
function regresarAlInicio() {
    resultView.classList.remove('active');
    resultView.classList.add('hidden');
    
    welcomeView.classList.remove('hidden');
    welcomeView.classList.add('active');

    searchInput.value = '';
    searchInputBottom.value = '';
}

// --- EVENT LISTENERS (Conexión de botones y teclas) ---

// Evento para el buscador superior (Botón y Enter)
searchBtn.addEventListener('click', () => realizarBusqueda(searchInput.value));
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') realizarBusqueda(searchInput.value);
});

// Evento para el buscador inferior (Botón y Enter)
searchBtnBottom.addEventListener('click', () => realizarBusqueda(searchInputBottom.value));
searchInputBottom.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') realizarBusqueda(searchInputBottom.value);
});

// Eventos para los botones Random
randomBtn.addEventListener('click', mostrarCartaAleatoria);
randomBtnBottom.addEventListener('click', mostrarCartaAleatoria);

// Evento para el botón Volver
backBtn.addEventListener('click', regresarAlInicio);

// Inicializar sugerencias al cargar la página
window.onload = initSuggestions;

// --- AUTO-SELECCIÓN DESDE EL DATALIST ---
function verificarSeleccionAutomatica(e) {
    const valorIngresado = e.target.value;
    
    // Buscamos si el texto coincide exactamente con alguna carta de la base de datos
    const cartaEncontrada = cartas.find(carta => 
        carta.nombre.toLowerCase() === valorIngresado.toLowerCase()
    );

    // Si coincide exactamente, disparamos la vista de la carta de inmediato
    if (cartaEncontrada) {
        displayCard(cartaEncontrada);
    }
}

// Escuchamos cuando el usuario selecciona una opción del datalist o escribe el nombre completo
searchInput.addEventListener('input', verificarSeleccionAutomatica);
searchInputBottom.addEventListener('input', verificarSeleccionAutomatica);