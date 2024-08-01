import {
    UNO_COPAS,
    DOS_COPAS,
    TRES_COPAS,
    CUATRO_COPAS,
    CINCO_COPAS,
    SEIS_COPAS,
    SIETE_COPAS,
    SOTA_COPAS,
    CABALLO_COPAS,
    REY_COPAS,
} from "./modelo";

// Función para mostrar la puntuación del jugador
export function muestraPuntuacion(score: number): void {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerHTML = String(score);
    }
}

// Función para mostrar la carta correspondiente al valor recibido
export function mostrarCarta(random: number): void {
    const cartaDada = document.getElementById('mostrarCarta') as HTMLImageElement;
    const cardsBox = document.querySelector('.cards') as HTMLElement;

    let cartaAMostrar: string | null;

    switch (random) {
        case 1:
            cartaAMostrar = UNO_COPAS;
            break;
        case 2:
            cartaAMostrar = DOS_COPAS;
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
            break;
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
    if (cartaDada) {
        cartaDada.src = cartaAMostrar !== null ? cartaAMostrar : '';
        cartaDada.style.display = cartaAMostrar !== null ? 'block' : 'none';
    }
}

// Función para restablecer la vista del juego
export function resetGameView(currentDisplay: string): void {
    const cartaDada = document.getElementById('mostrarCarta') as HTMLImageElement;
    const cardsBox = document.querySelector('.cards') as HTMLElement;
    if (cardsBox) {
        cardsBox.style.display = 'block';
        if (cartaDada) {
            cartaDada.style.display = 'block';
        }

        // Restablece el valor original de display después de un breve retraso
        setTimeout(() => {
            cardsBox.style.display = currentDisplay;
        }, 10);
    }

    const giveCard = document.getElementById('carta') as HTMLButtonElement;
    if (giveCard) {
        giveCard.disabled = false;
    }

    const messageBox = document.querySelector('.message') as HTMLElement;
    if (messageBox) {
        messageBox.style.display = 'none';
    }
}

// Función para actualizar la interfaz de usuario (DOM) con el mensaje y el icono de game over
export function updateGameOverUI(mensaje: string, icono: string): void {
    const cardsBox = document.querySelector('.cards') as HTMLElement;

    // Ocultar las cartas
    if (cardsBox) {
        cardsBox.style.display = 'none';
    }

    // Mostrar el mensaje de game over y el icono
    const messageBox = document.querySelector('.message') as HTMLElement;
    if (messageBox) {
        messageBox.style.display = 'block';
    }

    const messageText = document.getElementById('message-text') as HTMLElement;
    if (messageText) {
        messageText.innerHTML = mensaje;
    }

    const messageIcon = document.getElementById('message-icon') as HTMLElement;
    if (messageIcon) {
        messageIcon.innerHTML = icono;
    }
}
