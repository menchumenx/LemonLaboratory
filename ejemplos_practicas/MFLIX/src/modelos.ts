
export interface Pelicula {
    titulo :string,
    resumen : string,
    genero : string,
    masVisto : boolean,
    calificacionImdb : number,
    premioGalardon : boolean
    fechaEstreno : Date,
    imagen : string
}

// para clases css
export const nombreClases = {
    peliculas : 'peliculas',
    listaPeliculas : 'lista-peliculas',
    peliculasContenedor : 'peliculas-contenedor',
    pelicula : 'pelicula'
}
