
// *****************************
// Definición de constantes
const CARTA_BOCA_ABAJO = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
const UNO_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
const DOS_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
const TRES_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
const CUATRO_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
const CINCO_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
const SEIS_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
const SIETE_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
const SOTA_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
const CABALLO_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
const REY_COPAS = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
const VICTORIA = '🎉';
const DERROTA = '😭';
const CONSERVADOR = '😴';
const MAS_RIESGO = '🙄';
const ESTUVO_CERCA = '😬'


// *****************************
// FUNCION PRINCIPAL

function dameCarta() {
    const randomNumber = getRandomNumber(); // genera el num aletorio
    const card = getCardnumber(randomNumber); // crea la carta
    const urlCard = getUrlCard(card) // llama a la funcion que muestra la carta 
    printCardUrl(urlCard); // actuliza la vista
    const points = getCardPoints(card) // revisa que puntos debe sumar segun la carta
    const sumScore = sumPoints(points); // suma los puntos
    setUserScore(sumScore); // resetea los punto de usuario
    muestraPuntuacion(userScore) // llamada para mostrar la puntuación total
    checkGame(userScore) // indica si has ganado o perdido
}


// *****************************
// Deficición de Funciones

// Función para mostrar la puntuación del jugador
const muestraPuntuacion = (score) => {
    document.getElementById('score').innerHTML = score;
}
const getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const getCardnumber = (randomNumber) => {
    return randomNumber > 7 ? randomNumber + 2 : randomNumber;
}

const getCardPoints = (card) => {
    return card > 7 ? 0.5 : card;
}

const sumPoints = (points) => {
    return userScore + points;
}

const setUserScore = (newScore) => {
    userScore = newScore
}

const checkGame = (userScore) => {
    if (userScore > 7.5) {
        gameOver(userScore);
    }
}

const disableGiveCard = () => {
    if (giveCard) {
        giveCard.disabled = true;
    }
}

// determina el mensaje
const getOutcome = (finalScore) => {
    if (finalScore < 4) {
        return ["Has sido muy conservador ", CONSERVADOR];
    } else if (finalScore >= 4 && finalScore < 5) {
        return ["Un poco más de riesgo no vendría mal ", MAS_RIESGO];
    } else if (finalScore >= 5 && finalScore < 6) {
        return ["Te ha entrado el canguelo eh? ", MAS_RIESGO];
    } else if (finalScore >= 6 && finalScore < 7.5) {
        return ["Casi casi... ", ESTUVO_CERCA];
    } else if (finalScore === 7.5) {
        return ["¡Lo has clavado! ¡Enhorabuena!", VICTORIA];
    } else {
        return [`HAS PERDIDO!! Tu puntuación es ${finalScore} `, DERROTA];
    }
}

// actualiza la interfaz
const updateUIWithOutcome = (mensaje, icono) => {
    let cardsBox = document.querySelector('.cards');
    if (cardsBox) {
        cardsBox.style.display = 'none';
    }

    let messageBox = document.querySelector('.message');
    if (messageBox) {
        messageBox.style.display = 'block';
    }

    let messageText = document.getElementById('message-text');
    if (messageText) {
        messageText.innerHTML = mensaje;
    }

    let messageIcon = document.getElementById('message-icon');
    if (messageIcon) {
        messageIcon.innerHTML = icono;
    }
}

const gameOver = (finalScore) => {
    disableGiveCard();

    const [mensaje, icono] = getOutcome(finalScore);
    updateUIWithOutcome(mensaje, icono);
}

// Función para resetear la partida -> limpia el contador de score y la imagen de carta
const newGame = () => {
    userScore = 0;
    muestraPuntuacion(userScore); // muestra la info de score en la vista
    const url = getUrlCard(userScore)
    printCardUrl(url); // actualiza la imagen a mostrar 
    resetGameView(); // Restablece la vista del juego
}

//  funcion para mostrar la carta segun el valor random. Para el valor por defecto se asigna la carta boca a bajo.
function getUrlCard(card) {
    let cartaAMostrar;
    switch (card) {
        case 1:
            cartaAMostrar = UNO_COPAS
            break;
        case 2:
            cartaAMostrar = DOS_COPAS
            break;
        case 3:
            cartaAMostrar = TRES_COPAS;
            break;
        case 4:
            cartaAMostrar = CUATRO_COPAS;
            break;
        case 5:
            cartaAMostrar = CINCO_COPAS;
            break;
        case 6:
            cartaAMostrar = SEIS_COPAS;
            break
        case 7:
            cartaAMostrar = SIETE_COPAS;
            break;
        case 10:
            cartaAMostrar = SOTA_COPAS;
            break;
        case 11:
            cartaAMostrar = CABALLO_COPAS;
            break;
        case 12:
            cartaAMostrar = REY_COPAS;
            break;

        default:
            cartaAMostrar = null;
    }

    return cartaAMostrar;

}

// actualiza la vista
const printCardUrl = (urlCard) => {
    if (cartaDada) {
        cartaDada.src = urlCard !== null ? urlCard : '';
        cartaDada.style.display = urlCard !== null ? 'block' : 'none';
    }
}

// Función para restablecer la vista del juego ->  Restablecer elementos y estilos a su estado inicial
const resetGameView = () => {
    if (cardsBox) {
        cardsBox.style.display = 'block';
        cartaDada.style.display = 'block';

        // Restablece el valor original de display después de un breve retraso
        setTimeout(() => {
            cardsBox.style.display = currentDisplay;
        }, 10);
    }

    giveCard ? giveCard.disabled = false : null

    let messageBox = document.querySelector('.message');
    if (messageBox) {
        messageBox.style.display = 'none';
    }
}


// *****************************
// Inicialización de variables globales
let userScore = 0;
const cardsBox = document.querySelector('.cards'); // Contenedor de cartas
const currentDisplay = getComputedStyle(cardsBox).display; // Estado actual de visualización

// Elemento de la carta mostrada inicialmente
const cartaDada = document.getElementById('mostrarCarta');
// Ocultar la carta inicialmente
cartaDada ? cartaDada.style.display = 'none' : null;

// Agregar eventos de clic a los botones
let giveCard = document.getElementById('carta');
giveCard ? giveCard.addEventListener('click', dameCarta) : null

let stop = document.getElementById('stop');
stop ? stop.addEventListener('click', () => gameOver(userScore)) : null;

let reset = document.getElementById('reset');
reset ? reset.addEventListener('click', newGame) : null;


muestraPuntuacion(userScore)
