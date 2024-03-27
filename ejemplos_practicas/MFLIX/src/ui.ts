import { Pelicula, nombreClases } from "./modelos";


// Crea un titulo de seccion
const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
    const titulo = document.createElement('h2'); //creamos un elemento H2
    titulo.textContent = tituloSeccion; // le damos el contenido al elemento h2 reado con el parametro de entrada
    return titulo; // devolvemos el elememto completo
}

// Crea contenedor
const crearContenedor = (nombreClase: string): HTMLDivElement => {
    const listaPeliculas = document.createElement('div'); //creamos elemento
    listaPeliculas.classList.add(nombreClase); // damos una clase al elemento div
    listaPeliculas.id = nombreClase // le asignamos un dientificador con el mismo nomnre 
    return listaPeliculas // retornamos el elemnto completo
}


// ? pintar listado de peliculas -> funcion principal qu eimprimira en la vista el istado de peliculas de forma dinámica
export const pintarListadoPeliculas = (
    tituloSeccion: string,
    listaPeliculas: Pelicula[]
): void => {

    // 1.Obtencion del div principal donde se pintaran la peliculas -> id:principal
    const appDiv = document.getElementById('principal');

    // 2. comprobar si este elemento existe
    if (appDiv && appDiv instanceof HTMLDivElement) {
        // creamos el div para las peliculas
        const crearDivPeliculas = crearContenedor(nombreClases.peliculas); // usamos la fincion para crera contendores(claseCss)
        // añadimos este dic al div principal
        appDiv.appendChild(crearDivPeliculas);

        // creamos un titulo para cada pelicula
        const titulo = crearTitulo(tituloSeccion); //se crea usando la fincion crearTitylo y recibe le parametro de la funcion 
        // añadir el titulo al div de pelicula
        crearDivPeliculas.appendChild(titulo);

        // cremos un div lista de peliculas 
        const divListaPeliculas = crearContenedor(nombreClases.listaPeliculas);
        crearDivPeliculas.appendChild(divListaPeliculas)

        // creamos un div contenedor de peliculas
        const divContendorPeliculas = crearContenedor(nombreClases.peliculasContenedor);
        divListaPeliculas.appendChild(divContendorPeliculas);

        // pintar peliculas
        listaPeliculas.forEach(pelicula => {
            const divPelicula = crearContenedor(nombreClases.pelicula);
            // añadimos datos al divPleicula
            divPelicula.innerHTML = `
                <img src="${pelicula.imagen}" alt="${pelicula.titulo}"></img>
                <h3>${pelicula.titulo}</h3>
            `;

            // añadir divPelicula l divContenedorPelicula
            divContendorPeliculas.appendChild(divPelicula);
        })

    } else {
        console.error('No se ha encontrado el elemento principal');
    }
}