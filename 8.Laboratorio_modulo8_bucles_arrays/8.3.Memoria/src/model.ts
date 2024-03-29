
// para clases css dinamicas
export const cssClasName = {
    cardContainer: 'card-container',
    imgCard: 'img-card',
    flipEffect: 'flip-effect',
}


// definicion de interfaces
export interface Card {
    infoCard: InfoCard,
    flipped: boolean,
    found: boolean
}

// card-img interface
export interface InfoCard {
    id: number,
    image: string
}

export interface Board {
    cards: Card[];
    gameStatus: EstadoPartida;
    flippedCardAIndex?: number;
    flippedCardBIndex?: number;
}


// definicion de tipos
export type EstadoPartida =
    | "PartidaNoIniciada"
    | "CeroCartasLevantadas"
    | "UnaCartaLevantada"
    | "DosCartasLevantadas"
    | "PartidaCompleta";



// definición de funciones de creacion de partida
const createInitialCard = (idCard: number, image: string): Card => {
    return {
        infoCard: { id: idCard, image: image },
        flipped: false,
        found: false
    }
}
export const createCardCollection = (
    infoCards: InfoCard[]
): Card[] => {
    const cardCollection: Card[] = []
    infoCards.forEach((infoCard: InfoCard) => {
        const newCard = createInitialCard(
            infoCard.id, infoCard.image);
        cardCollection.push(newCard)
    })
    return cardCollection
}

export const createInitialBoard = (cardsCollection: Card[]): Board => ({
    cards: cardsCollection,
    gameStatus: 'PartidaNoIniciada'
})