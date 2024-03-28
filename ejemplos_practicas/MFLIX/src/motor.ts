import { FiltroPeliculas, Pelicula, TipoGenero } from "./modelos";

// funcioón que filtra el listado e películas por género
export const filtrarPeliculasPorGenero = (
    peliculas: Pelicula[],
    genero?: TipoGenero
): Pelicula[] => {
    return peliculas.filter((pelicula) => pelicula.genero === genero)
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
        default:
            return peliculas
    }

}