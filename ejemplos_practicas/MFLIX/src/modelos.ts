
export interface Pelicula {
    titulo :string,
    resumen : string,
    genero : string,
    masVisto : boolean,
    calificacionImdb : number,
    premioGalardon : boolean
    fechaEstreno : Date,
    imagen : string
};

// para clases css
export const nombreClases = {
    peliculas : 'peliculas',
    listaPeliculas : 'lista-peliculas',
    peliculasContenedor : 'peliculas-contenedor',
    pelicula : 'pelicula'
};

// type para tipo de flecha
export type TipoFlecha = 'izquierda' | 'derecha';
// type para filtrar peliculas por género
export type TipoGenero = 'Familiar' | 'Aventuras' | 'Animación';

export type TipoCaracteristica = 'genero' | 'premios' | 'masVistas' | 'calificación';

export interface FiltroPeliculas {
    genero?:TipoGenero,
    caracteristica?: TipoCaracteristica
}

export interface ListaPeliculasConfiguración {
    titulo: string,
    filtro?: FiltroPeliculas
}