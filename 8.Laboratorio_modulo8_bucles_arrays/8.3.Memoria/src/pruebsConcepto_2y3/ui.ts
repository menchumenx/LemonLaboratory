import { cssClasName } from "./models";


const createDivContainer = (nombreClase: string, contenedor: HTMLDivElement
): HTMLDivElement => {
    const div = document.createElement('div'); //creamos elemento
    div.classList.add(nombreClase); // damos una clase al elemento div
    div.id = nombreClase // le asignamos un dientificador con el mismo nomnre 
    contenedor.appendChild(div) // esto es interesante añadirloo si se va reutilizar mucho esta funcion
    return div // retornamos el elemnto completo
}

export const showAnimal = (
    image: string,
    cardContainer: HTMLDivElement
): void => {
  
    const imageToSshow = document.createElement('img');
    if (imageToSshow) {
        imageToSshow.classList.add(cssClasName.imgCard);
        imageToSshow.src = image;
    }

    if (cardContainer) {
        cardContainer.appendChild(imageToSshow);

        // Añade efecto de giro
        cardContainer.classList.add(cssClasName.flipEffect);
        // Opcional: remover la clase después de que la animación termine para permitir reinicio
        setTimeout(() => {
            cardContainer.classList.remove(cssClasName.flipEffect);
        }, 600); // Ajusta este tiempo al de la duración de tu animación
    }
}

export const printAnimalList = ((
    animalList: string[],
    animalListContainer: HTMLDivElement
): void => {

    animalList.forEach((animalCard: string) => {
        const containerImage = createDivContainer(cssClasName.cardContainer, animalListContainer)
        const clickHandler = () => {
            showAnimal(animalCard, containerImage);
            containerImage.removeEventListener('click', clickHandler); // Elimina el listener después del primer click, para evitar que se replique la imagen
        };
        // ! volver activar el evento al clicar en la seguna imagen si no coincide
        containerImage.addEventListener('click', clickHandler);
    })

})