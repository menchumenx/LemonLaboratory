import { flechas } from "./contantes";
import { Pelicula, nombreClases, TipoFlecha } from "./modelos";


// ********* FUNCIONES CREACIÖN DE ELEMENTOS **********
// Añadir flecha a contenedor
const anadirFlecha = (contenedor: HTMLDivElement, tipo: TipoFlecha) => {
    const divFlecha = document.createElement('div');
    divFlecha.className = `flecha-${tipo}`; //le añadimos una clase

    const imgFlecha = document.createElement('img');
    imgFlecha.src = tipo === 'izquierda' ? flechas.left : flechas.right //dependiendo del tipo asigna una imagen sobre src
    divFlecha.appendChild(imgFlecha) // le da el valor 

    // Cuando se hace clic en este elemento, se ejecuta una función de retrollamada o callback que contiene la lógica para desplazar el contenido horizontalmente dentro de un contenedor.
    divFlecha.addEventListener('click', () => {
        if (tipo === 'izquierda') {
            contenedor.scrollBy({ // metodo de contenedor para desplazar el contenido
                left: -contenedor.clientWidth, // se utiliza - para indicar el desplazamiento a la izquierda
                behavior: "smooth"
            })
        } else {
            contenedor.scrollBy({
                left: contenedor.clientWidth,
                behavior: "smooth"
            })
        }
    })
    contenedor.appendChild(divFlecha); // añade la imagen con el evento al contenedor recibido por parametro
}

// funcón pintar flechas 
const pintarFlechas = (peliculasContenedor: HTMLDivElement): void => {
    anadirFlecha(peliculasContenedor, 'izquierda');
    anadirFlecha(peliculasContenedor, 'derecha');
}

// Crea un titulo de seccion
const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
    const titulo = document.createElement('h2'); //creamos un elemento H2
    titulo.textContent = tituloSeccion; // le damos el contenido al elemento h2 reado con el parametro de entrada
    return titulo; // devolvemos el elememto completo
}

// Crea contenedor
const crearContenedor = (nombreClase: string, contenedor: HTMLDivElement
): HTMLDivElement => {
    const div = document.createElement('div'); //creamos elemento
    div.classList.add(nombreClase); // damos una clase al elemento div
    div.id = nombreClase // le asignamos un dientificador con el mismo nomnre 
    contenedor.appendChild(div) // esto es interesante añadirloo si se va reutilizar mucho esta funcion
    return div // retornamos el elemnto completo
}

// función para pintar una pelicula
const pintarPelicula = (
    pelicula: Pelicula,
    peliculaContenedor: HTMLDivElement
): void => {
    const divPelicula = crearContenedor(
        nombreClases.pelicula,
        peliculaContenedor
    );
    divPelicula.innerHTML = `
    <img src="${pelicula.imagen}" alt="${pelicula.titulo}"></img>
    <h3>${pelicula.titulo}</h3>
    `;
}

// función que pinta un listado de peliculas
const pintarPeliculas = (
    peliculas : Pelicula[],
    peliculaContenedor : HTMLDivElement
): void => {
    peliculas.forEach(pelicula => {
        pintarPelicula(pelicula, peliculaContenedor)
    })
}


// ********* FUNCIONES PARA PINTAR ELEMENTOS**********
// FUNCIÓN PRINCIPAL -> pintar listado de peliculas -> funcion principal quE IMPRIME en la vista el istado de peliculas de forma dinámica
export const pintarListadoPeliculas = (
    tituloSeccion: string,
    listaPeliculas: Pelicula[]
): void => {

    // 1.Obtencion del div principal donde se pintaran la peliculas -> id:principal
    const appDiv = document.getElementById('principal');

    // 2. comprobar si este elemento existe
    if (appDiv && appDiv instanceof HTMLDivElement) {
        // creamos el div para las peliculas
        const crearDivPeliculas = crearContenedor(nombreClases.peliculas, appDiv); // usamos la fincion para crera contendores(claseCss)
        // añadimos este dic al div principal
        appDiv.appendChild(crearDivPeliculas);

        // creamos un titulo para cada pelicula
        const titulo = crearTitulo(tituloSeccion); //se crea usando la fincion crearTitylo y recibe le parametro de la funcion 
        // añadir el titulo al div de pelicula
        crearDivPeliculas.appendChild(titulo);

        // cremos un div lista de peliculas 
        const divListaPeliculas = crearContenedor(nombreClases.listaPeliculas, crearDivPeliculas);

        // creamos un div contenedor de peliculas
        const divContendorPeliculas = crearContenedor(nombreClases.peliculasContenedor, divListaPeliculas);

        // -> pintar flechas -> usamos la función creada anteriormente.
        pintarFlechas(divContendorPeliculas);

        // pintar peliculas
        pintarPeliculas(listaPeliculas, divContendorPeliculas);

    } else {
        console.error('No se ha encontrado el elemento principal');
    }
}