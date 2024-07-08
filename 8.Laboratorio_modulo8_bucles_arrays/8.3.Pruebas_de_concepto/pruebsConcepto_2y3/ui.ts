import { sameImage } from "../pruebaConcepto_1/barajar";
import { InfoCard, cssClasName } from "./models";


const createDivContainer = (nombreClase: string, contenedor: HTMLDivElement
): HTMLDivElement => {
    const div = document.createElement('div'); //creamos elemento
    div.classList.add(nombreClase); // damos una clase al elemento div
    div.id = nombreClase // le asignamos un dientificador con el mismo nomnre 
    contenedor.appendChild(div) // esto es interesante añadirloo si se va reutilizar mucho esta funcion
    return div // retornamos el elemnto completo
}

const showAnimal = (
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
        }, 400);
    }
}

export const printAnimalList = ((
    animalList: InfoCard[],
    animalListContainer: HTMLDivElement
): void => {

    const cupleOfAnimal: InfoCard[] = [];

    animalList.forEach((animalCard: InfoCard) => {
        const containerImage = createDivContainer(cssClasName.cardContainer, animalListContainer)
        const clickHandler = () => {

            console.log(animalCard);

            if (cupleOfAnimal.length < 2) {
                cupleOfAnimal.push(animalCard)
                showAnimal(animalCard.image, containerImage);
            } else {
                console.log('ya hay 2 elementos');
            }

            console.log(cupleOfAnimal);
            // Verificar si hay suficientes elementos en cupleOfAnimal antes de acceder a sus propiedades
            if (cupleOfAnimal.length === 2) {
                const result = sameImage(cupleOfAnimal[0]?.idImage, cupleOfAnimal[1]?.idImage);
                console.log(result);
                 if (!result){
                    // girar las cartas 
                 } else {
                    // victoria
                 }
            }


            containerImage.removeEventListener('click', clickHandler); // Elimina el listener después del primer click, para evitar que se replique la imagen

        };
        // ! volver activar el evento al clicar en la seguna imagen si no coincide
        containerImage.addEventListener('click', clickHandler);

    })

})


// const getCardInfo = ():InfoCard =>{

// }

