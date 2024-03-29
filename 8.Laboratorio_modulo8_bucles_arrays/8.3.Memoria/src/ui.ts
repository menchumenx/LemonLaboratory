import { Card, cssClasName } from "./model";


export const flippedGetInfoCard = (
    divCardContainer:HTMLDivElement,
    index:number,
    card: Card,
    ): number => {
        divCardContainer.classList.add(cssClasName.flipEffect);
        setTimeout(() => {
            divCardContainer.classList.remove(cssClasName.flipEffect);
        }, 400);

        if (divCardContainer) {
            const imgCard = document.createElement('img');
            imgCard.src = card.infoCard.image;
    
            divCardContainer.appendChild(imgCard);
    
         
        }
        const position = index;
        console.log(position);
        return position;
    }

// crea un contendor div con un elemento img dentro
export const createCardElement = (
    nombreClase: string, 
): HTMLDivElement => {

    const divCard = document.createElement('div');
    divCard.classList.add(nombreClase);

    return divCard;
}

// crear grid de Card
export const createGridCard = (
    cardsCollection: Card[],
    idContainer: string
): void => {

    const divContainer = document.getElementById(idContainer);

    cardsCollection.forEach((card: Card, index) => {

        // crear un elemento carta con su evento
        const createCard = createCardElement(cssClasName.cardContainer);
        if(createCard){
            createCard.addEventListener('click',() => {
                flippedGetInfoCard(createCard, index,card)
            })
        }
        if(divContainer){
            divContainer.appendChild(createCard)
        } else {
            console.log('contenedor no encontrado');
            
        }
    })
}