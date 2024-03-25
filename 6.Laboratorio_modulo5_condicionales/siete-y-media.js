

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



// *****************************
// Deficición de Fnciones

// Función para mostrar la puntuación del jugador
function muestraPuntuacion(score) {
    document.getElementById('score').innerHTML = score;
}


// Función para obtener una carta
function dameCarta() {
    let random = Math.floor(Math.random() * 10) + 1;
    if (random >= 8) random += 2;

    mostrarCarta(random) // llamada  la funcion que muestra la carta 
    getRealValue(random); // evalua si suma el 0.5 o el valor de la carta segun la carta
    muestraPuntuacion(userScore) // llamada para mostrar la puntuación total

    // comprueba si la puntuacion supera el máximo y si es así llama a gameOver para anunciar el mensaje 
    if (userScore > 7.5) {
        gameOver(userScore);
    }

    return random;
}


// Función para evaluar si sumar 0.5 a la puntuación del jugador -> Sumar 0.5 a la puntuación si es una carta especial
function getRealValue(random) {
    let resultado = random === 10 || random === 11 || random === 12 ? random = 0.5 : random
    userScore += resultado;
}



// función para determinar el mensaje apropiado a mostrar. Si ninguna de las condiciones específicas de puntuación se cumple, se asume que el jugador ha perdido y se muestra un mensaje de derrota por defecto.
function gameOver(finalScore) {
    let mensaje;
    let icono;

    // Deshabilitar el botón "Dame Carta"
    giveCard ? giveCard.disabled = true : null

    // Determinar mensaje y emoticón según la puntuación final
    // Mostrar o ocultar elementos según sea necesario
    if (finalScore < 4) {
        mensaje = "Has sido muy conservador ";
        icono = CONSERVADOR
    } else if (finalScore >= 4 && finalScore < 5) {
        mensaje = "Un poco más de riesgo no vendría mal ";
        icono = MAS_RIESGO
    } else if (finalScore >= 5 && finalScore < 6) {
        mensaje = "Te ha entrado el canguelo eh? ";
        icono = MAS_RIESGO
    } else if (finalScore >= 6 && finalScore < 7.5) {
        mensaje = "Casi casi... ";
        icono = ESTUVO_CERCA
    } else if (finalScore === 7.5) {
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
        icono = VICTORIA
    } else {
        mensaje = `HAS PERDIDO!! Tu puntuación es ${finalScore} `;
        icono = DERROTA
    }


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


// Deshabilitar el botón "Dame Carta" -> limpia el contador de score y la imagen de carta
function newGame() {
    userScore = 0;
    muestraPuntuacion(userScore); // muestra la info de score en la vista
    mostrarCarta(userScore); // actualiza la imagen a mostrar 
    resetGameView(); // Restablece la vista del juego
}



// Función para mostrar la carta correspondiente al valor recibido
function mostrarCarta(random) {

    let cartaAMostrar;

    switch (random) {
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
            break;
    }

    // Mostrar u ocultar la carta según sea necesario
    cartaDada.src = cartaAMostrar !== null ? cartaAMostrar : '';
    cartaDada.style.display = cartaAMostrar !== null ? 'block' : 'none';
}



// Función para restablecer la vista del juego ->  Restablecer elementos y estilos a su estado inicial
function resetGameView() {
   
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