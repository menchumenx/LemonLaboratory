import { FiltroPeliculas, Pelicula, TipoGenero } from "./modelos";

// funcioón que filtra el listado e películas por género
export const filtrarPeliculasPorGenero = (
    peliculas: Pelicula[],
    genero?: TipoGenero
): Pelicula[] => {
    return peliculas.filter((pelicula) => pelicula.genero === genero)
}

// filtrar peliculas con galardon
export const filtrarPeliculasSiGalardon = (peliculas: Pelicula[]
): Pelicula[] => {
    return peliculas.filter((pelicula) => pelicula.premioGalardon);
}

// filtrar por peliculas más vistas
export const filtrarPeliculasMasVistas = (peliculas: Pelicula[]
): Pelicula[] => {
    return peliculas.filter(pelicula => pelicula.masVisto);
}


// filtrar por calificación
export const filtrarPeliculasPorCalificacion = (peliculas: Pelicula[]
): Pelicula[] => {
    return peliculas.sort((a, b) => b.calificacionImdb - a.calificacionImdb);
}


// Filtrar peliculas -> filtra las peliculas si hay género y si no devuelve el istado general
export const filtrarPeliculas = (
    peliculas: Pelicula[],
    filtro?: FiltroPeliculas
): Pelicula[] => {

    if (!filtro) return peliculas; // si no hay filtro devuelve el array de peliculas

    switch (filtro.caracteristica) {
        case 'genero':
            return filtrarPeliculasPorGenero(peliculas, filtro.genero);
        case 'premios':
            return filtrarPeliculasSiGalardon(peliculas);
        case 'calificación':
            return filtrarPeliculasPorCalificacion(peliculas);
        case 'masVistas':
            return filtrarPeliculasMasVistas(peliculas)

        default:
            return peliculas
    }

}

