const contenedor = document.getElementById("contenedorProductos");

const velocidad = 0.45;

// Guardamos las tarjetas originales
const tarjetas = [...contenedor.children];

// Medimos el ancho de una vuelta completa
const anchoOriginal = contenedor.scrollWidth;

// Copiamos las tarjetas para crear un carrusel infinito
tarjetas.forEach(tarjeta => {
    const copia = tarjeta.cloneNode(true);
    copia.setAttribute("aria-hidden", "true");
    contenedor.appendChild(copia);
});

function carruselAutomatico() {

    contenedor.scrollLeft += velocidad;

    // Cuando termina la primera copia,
    // volvemos al mismo punto sin que se note el salto
    if (contenedor.scrollLeft >= anchoOriginal) {
        contenedor.scrollLeft -= anchoOriginal;
    }

    requestAnimationFrame(carruselAutomatico);
}

carruselAutomatico();