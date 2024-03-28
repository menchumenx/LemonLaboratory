
import { peliculas } from "./datos";
import { pintarListadoPeliculas } from "./ui";

// document.addEventListener('DOMContentLoaded', callback): Este método añade un listener al documento que espera al evento DOMContentLoaded. Este evento se dispara cuando el HTML inicial del documento ha sido completamente cargado y parseado, SIN esperar a que hojas de estilo, imágenes y subframes terminen de cargar.
document.addEventListener('DOMContentLoaded', ()=>{

    pintarListadoPeliculas( peliculas, {titulo: 'Todas las películas'});
    pintarListadoPeliculas( peliculas, 
        {titulo: 'Peliculas de Aventura', 
        filtro: {genero: "Aventuras", caracteristica: 'genero'}
    });
    pintarListadoPeliculas( peliculas, 
        {titulo: 'Peliculas para ver en familia', 
        filtro: {genero: "Familiar", caracteristica: 'genero'}
    });
    pintarListadoPeliculas( peliculas, 
        {titulo: 'Peliculas de Animación', 
        filtro: {genero: "Animación", caracteristica: 'genero'}
    });
    pintarListadoPeliculas( peliculas, 
        {titulo: 'Películas más premiadas', 
        filtro: {caracteristica: 'premios'}
    });
    pintarListadoPeliculas( peliculas, 
        {titulo: 'Películas más vistas', 
        filtro: {caracteristica: 'masVistas'}
    });
    pintarListadoPeliculas( peliculas, 
        {titulo: 'Películas mejor calificadas', 
        filtro: {caracteristica: 'calificación'}
    });


})