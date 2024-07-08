import { Board, createInitialBoard, cssClasName, Card } from "./model";
import { areCouple, flipCard, gameComplete, noCuple, posibleToFlippedCard, shuffleCards} from "./motor";
import { cardsCollection } from "./data";


// ? ******************************************
// ? VARIABLES Y CONSTASTES GENERALES
let cupleTries: number = 0;
let maximunTries: number = 8;
let gamePoints: number = 0;
let victories: number = 0;
let win: boolean = false;

let board: Board | null = null;

const cardsMainContainer = document.getElementById('main-cards-container') as HTMLDivElement;
const mainContainer = document.getElementById('main-container') as HTMLDivElement;
const startGameButton = document.getElementById('start-game-button') as HTMLButtonElement;

let modal = document.createElement('div');
let backdrop = document.createElement('div');

let gameInitialized: boolean = false; // Variable para controlar si el juego está inicializado


// ? ******************************************
// ? FUNCIONES DE MANEJO
// Función para iniciar o reiniciar el juego
export const initializeOrRestartGame = () => {
    resetState();
    if (gameInitialized) {
        if (cardsMainContainer) {
            cardsMainContainer.innerHTML = '';
        }
        closeModal();
    }

    const mixedCardsCollection = shuffleCards(cardsCollection);
    board = createInitialBoard(mixedCardsCollection);
    board.gameStatus = 'CeroCartasLevantadas';
    createGridCard(board, 'main-cards-container');

    gameInitialized = true; // Actualizamos el estado del juego
    updateTriesCounter(); // Reiniciar el contador de intentos al iniciar un nuevo juego
    updateGamesCounter(); // Reiniciar el contador de juegos al iniciar un nuevo juego
};


// Agregamos un evento de clic al botón de inicio del juego
startGameButton.addEventListener('click', initializeOrRestartGame);


// Función para crear el grid de cartas
export const createGridCard = (board: Board, idContainer: string): void => {
    const divContainer = document.getElementById(idContainer);

    board.cards.forEach((_, index) => {
        const createCard = createCardElement(cssClasName.cardContainer);
        if (createCard) {
            createCard.dataset.indiceArray = index.toString();
            createCard.addEventListener('click', () => {
                const indiceArray = parseInt(createCard.dataset.indiceArray || "0");
                flippedGetInfoCard(createCard, indiceArray, board);
            });
        }
        if (divContainer) {
            divContainer.appendChild(createCard);
        } else {
            console.log('Contenedor no encontrado');
        }
    });
};


// Función para manejar el volteo de cartas
const flippedGetInfoCard = (divCardContainer: HTMLDivElement, index: number, board: Board): void => {
    if (toMuchTries(cupleTries)) {
        youLose();
        return;
    }

    const card = board.cards[index];
    const canFlip = posibleToFlippedCard(board, index);

    if (canFlip) {
        applyFlipEffect(divCardContainer, card);
        flipCard(board, index);
        handleFlippedCards(board);
    } else {
        console.log('No se puede voltear esta carta o el estado del juego no lo permite.');
    }
};

// Aplica el efecto de volteo a la carta
const applyFlipEffect = (divCardContainer: HTMLDivElement, card: Card) => {
    divCardContainer.classList.add('flipped', 'flip-effect');
    setTimeout(() => {
        divCardContainer.classList.remove('flip-effect');
    }, 600);

    const imgCard = document.createElement('img');
    imgCard.src = card.infoCard.image;
    divCardContainer.appendChild(imgCard);
};

// Maneja las cartas volteadas
const handleFlippedCards = (board: Board) => {
    const flippedCards = board.cards.filter(card => card.flipped);
    if (flippedCards.length === 2) {
        const flippedIndexes = flippedCards.map(card => board.cards.indexOf(card));
        const isCouple = areCouple(flippedIndexes[0], flippedIndexes[1], board);

        if (!isCouple) {
            handleNonMatchingCards(flippedCards, flippedIndexes, board);
        } else {
            handleMatchingCards(flippedCards, board);
        }
    }
};

// Maneja las cartas que no son pareja
const handleNonMatchingCards = (flippedCards: Card[], flippedIndexes: number[], board: Board) => {
    setTimeout(() => {
        noCuple(flippedIndexes[0], flippedIndexes[1], board);
        flippedCards.forEach(flippedCard => {
            flippedCard.flipped = false;
            const flippedCardContainer = document.querySelector(`[data-indice-array="${flippedIndexes[flippedCards.indexOf(flippedCard)]}"]`) as HTMLDivElement;
            if (flippedCardContainer) {
                flippedCardContainer.classList.remove('flipped');
                flippedCardContainer.innerHTML = ''; // Remover la imagen de la carta
            }
        });
        board.gameStatus = 'CeroCartasLevantadas';
        cupleTries += 1;
        updateTriesCounter(); // Actualizar el contador de intentos
        youLose();
    }, 1000);
};

// Maneja las cartas que son pareja
const handleMatchingCards = (flippedCards: Card[], board: Board) => {
    board.gameStatus = 'CeroCartasLevantadas';
    flippedCards.forEach(card => {
        if (board.cards.includes(card)) {
            card.flipped = false;
        }
    });
    win = gameComplete(board);
    if (win) {
        victories += 1; // Actualizar el número de victorias
        updateVictoriesCounter(); // Actualizar el contador de victorias
        showWinModal(); // Mostrar modal de victoria
    }
    gamePoints = addGamePoints(gamePoints); // Actualizar el número de juegos ganados
    updateGamesCounter(); // Actualizar el contador de juegos ganados
    printAddGames(gamePoints);
    console.log(win);
};




// ? ******************************************
// ? FUNCIONES DE VERIFICACIÓN
// Verificar si se excede el número de intentos
const toMuchTries = (cupleTries: number) => {
    return cupleTries >= maximunTries;
};

// Función para manejar la pérdida del juego
export const youLose = () => {
    const tries = toMuchTries(cupleTries);
    const message = 'Has Perdido 🥹 ¡Comienza una partida nueva!';
    if (tries) {
        createModal(message);
    }
};




// ? ******************************************
// ? FUNCIONES DE CREACION DE ELEMENTOS
// Crear elemento de carta
const createCardElement = (nombreClase: string): HTMLDivElement => {
    const divCard = document.createElement('div');
    divCard.classList.add(nombreClase);
    return divCard;
};


// ? ******************************************
// ? FUNCIONES PARA MODALES
// Función para crear el modal
export const createModal = (message: string) => {
    if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
    }
    if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
    }

    backdrop = document.createElement('div');
    backdrop.setAttribute('id', 'backdrop');
    backdrop.classList.add('modalBackdrop');

    modal = document.createElement('div');
    modal.setAttribute('id', 'modal');
    modal.style.display = 'block';
    modal.classList.add('modalContainer');

    const modalChildContainer = document.createElement('div');
    modalChildContainer.classList.add('modalChildContainer');
    modalChildContainer.textContent = message;

    const modalButton = document.createElement('button');
    modalButton.classList.add('modalContainerButton');
    modalButton.textContent = 'Start Game';
    modalButton.onclick = () => {
        initializeOrRestartGame();
        closeModal();
    };

    modalChildContainer.appendChild(modalButton);
    modal.appendChild(modalChildContainer);

    mainContainer.appendChild(backdrop);
    mainContainer.appendChild(modal);
};


// Función para mostrar el modal de victoria
export const showWinModal = () => {
    const winMessage = '¡Has Ganado! ¡Felicidades!  🥳 🥳';
    createModal(winMessage);
};

// Función para cerrar el modal
export const closeModal = () => {
    if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
    }
    if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
    }
};



// ? ******************************************
// ? FUNCIONES ACTUALIZACIÓN DE VALORES
// Función para restablecer el estado del tablero
export const resetBoard = (board: Board): void => {
    board.cards.forEach((card) => {
        card.flipped = false;
        card.found = false;
    });
};

// Función para restablecer el estado del juego
export const resetState = (): void => {
    cupleTries = 0;
    maximunTries = 8;
    gamePoints = 0;
    win = false;
    if (board) {
        resetBoard(board);
        board.gameStatus = 'CeroCartasLevantadas';
    }
    updateTriesCounter();
    updateGamesCounter();
};

// Función que pinta los juegos ganados
const printAddGames = (gamePoints: number) => {
    const games_counter = document.getElementById('gamesCounter');
    if (games_counter && win) {
        games_counter.textContent = `${gamePoints}`;
        console.log('Partida completada con éxito');
    }
};

// Actualizar el número de intentos
const updateTriesCounter = () => {
    const tries_counter = document.getElementById('triesCounter');
    if (tries_counter) {
        tries_counter.textContent = `${cupleTries} / ${maximunTries}`;
    }
};

const addGamePoints = (gamePoints: number) => {
    return gamePoints + 1;
};

// Actualizar el número de juegos ganados
const updateGamesCounter = () => {
    const gamesCounter = document.getElementById('gamesCounter');
    if (gamesCounter) {
        gamesCounter.textContent = `${gamePoints} / 6`;
    }
};

// Actualizar el número de victorias
const updateVictoriesCounter = () => {
    const victoriesCounter = document.getElementById('victoriesCounter');
    if (victoriesCounter) {
        victoriesCounter.textContent = `${victories}`;
    }
};


// ? ******************************************
// ? FUNCION DE ANIMACIÓN PARA H1
export const titleAnimation = () => {
    const titleElement = document.querySelector('.animated-title') as HTMLElement;
    const titleText = titleElement.innerText;
    titleElement.innerHTML = '';
  
    titleText.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.setProperty('--char-index', index.toString());
  
      // Aplica para 'h', 'a', y 'l'
      if (char.toLowerCase() === 'h' || char.toLowerCase() === 'a') {
        span.classList.add('h');
      }
      if (char.toLowerCase() === 'l') {
        span.classList.add('l');
      }
  
      titleElement.appendChild(span);
    });
}
  









