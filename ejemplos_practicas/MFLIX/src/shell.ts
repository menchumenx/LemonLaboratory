
import { peliculas } from "./datos";
import { pintarListadoPeliculas } from "./ui";

// document.addEventListener('DOMContentLoaded', callback): Este método añade un listener al documento que espera al evento DOMContentLoaded. Este evento se dispara cuando el HTML inicial del documento ha sido completamente cargado y parseado, SIN esperar a que hojas de estilo, imágenes y subframes terminen de cargar.
document.addEventListener('DOMContentLoaded', ()=>{
    pintarListadoPeliculas('todas las peliculas', peliculas);
})