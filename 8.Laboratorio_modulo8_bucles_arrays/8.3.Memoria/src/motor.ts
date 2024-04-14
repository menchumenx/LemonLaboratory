

import { Board, Card, createInitialBoard } from "./model";


// -> baraja las cartas
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
    board: Board,
    index: number
): boolean => {
    const cardAtIndex = board.cards[index];
    if (cardAtIndex.found
        || cardAtIndex.flipped
        || countFlippedCards(board) >= 2) {
        return false;
    }
    return true;
}


// -> voltear la carta si es posible. Para ello hace uso del ala funcion posibleToFlippedCard
export const flipCard = (
    board: Board, index: number
): void => {
    if (posibleToFlippedCard(board, index)) {
        const finfCard = board.cards[index];
        finfCard.flipped = true;
    }
}

// -> areCuple. Verifica si dos cartas son pareja y actualiza el estado del juego si es necesario
export const areCouple = (indexA: number, indexB: number, board: Board): boolean => {
  
    const cardA = board.cards[indexA];
    const cardB = board.cards[indexB];

    if (cardA.infoCard.id === cardB.infoCard.id) {
        cardA.found = true;
        cardB.found = true;
        
        if (gameComplete(board)) {
            console.log('¡Partida completada!');
            return true;
        }
    }
    return false;
}



// -> noCuple. Voltea las cartas que no son pareja y modifica el estado del juego
export const noCuple = (indexA: number, indexB: number, board: Board): void => {
    flipCard(board, indexA);
    flipCard(board, indexB);
    board.gameStatus = 'DosCartasLevantadas'; // actualiza el estado del juego
}


// -> Partida completada. Comprueba si la partida se ha completado
export const gameComplete = (board: Board): boolean => {
    const allFound = board.cards.every(card => card.found);
    if (!allFound) {
        board.gameStatus = 'PartidaCompleta';
        return true;
    }
    return false;
}


// -> Inicio de partida. Arranca una partida, creando un nuevo tablero
export const startGame = (board: Board): void => {
    createInitialBoard(board.cards)
}

// -> Contar cartas volteadas
const countFlippedCards = (board: Board): number => {
    return board.cards.filter(card => card.flipped).length;
}