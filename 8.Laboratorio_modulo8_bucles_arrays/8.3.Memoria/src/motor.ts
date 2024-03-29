

import { Board, Card } from "./model";

export const shuffleCards = (cardsCollection: Card[]
): Card[] => {

    const shuffledArray = [...cardsCollection]; // copiamos el array original, para evitar modificarlo.

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const aleatoryCard = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[aleatoryCard]] = [shuffledArray[aleatoryCard], shuffledArray[i]];
    }

    return shuffledArray;
}

// -> Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
export const posibleToFlippedCard = (
    board:Board, index:number
    ):boolean => board.cards.some(card => card.infoCard.id === index)
    
// voltear la carta
// export const flipCard =  (
//     board:Board, index:number
//     ):void => {}



// verifica si los Id del objetos InfoCard es igual 
export const sameImage = (
    idImage1: number, idImage2: number
): boolean => (idImage1 === idImage2) 
