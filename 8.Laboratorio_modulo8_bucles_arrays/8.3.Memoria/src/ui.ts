import { Board, createInitialBoard, cssClasName } from "./model";
import { areCouple, flipCard, noCuple, posibleToFlippedCard, shuffleCards } from "./motor";
import { cardsCollection } from "./data";


// -> startGameButton: Inicializa la partida, creando un nuevo tablero y barajando las cartas.
export const startGameButton = (
    divContainer: HTMLDivElement
): HTMLDivElement => {

    if (divContainer) {
        divContainer.addEventListener('click', () => {
            const cardsMainContainer = document.getElementById('main-cards-container') as HTMLDivElement;

            if (cardsMainContainer) {
                const initialBoard = createInitialBoard(cardsCollection); //creamos tablero
                shuffleCards(cardsCollection); //barajamos
                console.log(initialBoard);

                // creamos el grid
                createGridCard(initialBoard, cardsMainContainer.id);
            }
        })
    }
    return divContainer;
}

// -> createGridCard: crear grid de Card y pinta todas las cartas boca abajo, cada una con su evento e index
export const createGridCard = (
    board: Board,
    idContainer: string
): void => {

    const divContainer = document.getElementById(idContainer);

    board.cards.forEach((_, index) => {

        // crear un elemento carta con su evento
        const createCard = createCardElement(cssClasName.cardContainer);
        if (createCard) {
            // Establece el atributo data-indice-array
            createCard.dataset.indiceArray = index.toString();
            // añade el evento click
            createCard.addEventListener('click', () => {
                // Obtener el índice del array de la carta
                const indiceArray = parseInt(createCard.dataset.indiceArray || "0");
                flippedGetInfoCard(createCard, indiceArray, board); // Pasar la carta correcta del array
            })
        }
        if (divContainer) {
            divContainer.appendChild(createCard)
        } else {
            console.log('contenedor no encontrado');
        }
    })
}



const flippedGetInfoCard = (
    divCardContainer: HTMLDivElement,
    index: number,
    board: Board,
): void => {
    // Obtener la carta correspondiente al índice
    const card = board.cards[index];

    // Verificar si la carta se puede voltear
    const canFlip = posibleToFlippedCard(board, index);

    // Si la carta se puede voltear
    if (canFlip) {
        // Aplica efecto de volteo
        divCardContainer.classList.add(cssClasName.flipEffect);
        setTimeout(() => {
            divCardContainer.classList.remove(cssClasName.flipEffect);
        }, 400);

        // Crear la imagen de la carta
        const imgCard = document.createElement('img');
        imgCard.src = card.infoCard.image;

        // Añadir la imagen al contenedor de la carta
        divCardContainer.appendChild(imgCard);

        // Marcar la carta como volteada
        flipCard(board, index);

        // Verificar si hay dos cartas volteadas después de voltear la carta
        const flippedCards = board.cards.filter(card => card.flipped);
        if (flippedCards.length === 2) {
            // Obtener los índices de las cartas volteadas
            const flippedIndexes = flippedCards.map(card => board.cards.indexOf(card));

            // Llamar a la función areCouple con los índices de las cartas volteadas
            const isCouple = areCouple(flippedIndexes[0], flippedIndexes[1], board);

            // Si las cartas no son pareja, voltea las cartas de nuevo después de 1seg y setea lo valores de infoCard
            if (!isCouple) {
                setTimeout(() => {
                    console.log("No son pareja, volteamos las cartas de nuevo");
                    // Voltea las cartas de nuevo
                    flippedCards.forEach(flippedCard => {
                        const flippedIndex = board.cards.indexOf(flippedCard);
                        noCuple(flippedIndex, flippedIndex, board);

                        const flippedCardContainer = document.querySelector(`[data-indice-array="${flippedIndex}"]`) as HTMLDivElement;

                        if (flippedCardContainer) {
                            flippedCardContainer.classList.add(cssClasName.flipEffect);
                            flippedCardContainer.innerHTML = '';
                        }
                    });

                    // resetamos el tablero
                    resetBoard(board);

                }, 1000);

            }
        }
    } else {
        // cuando no se puede volterar una card por que hay más de 2 cartas volteadas
        console.log('entro en el else');
        // Si hay dos cartas volteadas y son pareja, permitir al jugador seguir buscando otras parejas
 

    }
};



// crea un contendor div con un elemento img dentro
const createCardElement = (
    nombreClase: string,
): HTMLDivElement => {

    const divCard = document.createElement('div');
    divCard.classList.add(nombreClase);

    return divCard;
}

const resetBoard = (board: Board): void => {
    // Restablecer el estado del tablero después de un breve retraso
    setTimeout(() => {
        board.cards.forEach((card) => {
            card.flipped = false;
        });
    }, 1000);
};


