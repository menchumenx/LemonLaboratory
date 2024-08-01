import { dameCarta, getRealValue, gameOverLogic } from './motor';
import { muestraPuntuacion, mostrarCarta, resetGameView, updateGameOverUI } from './ui';

// Inicialización de variables globales
let userScore: number = 0;

// Elementos del DOM
const cartaDada: HTMLImageElement | null = document.getElementById('mostrarCarta') as HTMLImageElement;
const giveCard: HTMLButtonElement | null = document.getElementById('carta') as HTMLButtonElement;
const stop: HTMLButtonElement | null = document.getElementById('stop') as HTMLButtonElement;
const reset: HTMLButtonElement | null = document.getElementById('reset') as HTMLButtonElement;
const cardsBox: HTMLElement | null = document.querySelector('.cards'); // Contenedor de cartas
const currentDisplay: string = cardsBox ? getComputedStyle(cardsBox).display : 'none'; // Estado actual de visualización

// Ocultar la carta inicialmente
if (cartaDada) {
    cartaDada.style.display = 'none';
}

// Agregar eventos de click a los botones
if (giveCard) {
    giveCard.addEventListener('click', () => {
        const random = dameCarta();
        mostrarCarta(random);
        const realValue = getRealValue(random);
        userScore += realValue;
        muestraPuntuacion(userScore);
        if (userScore > 7.5) gameOver(userScore);
    });
}

if (stop) {
    stop.addEventListener('click', () => gameOver(userScore));
}

if (reset) {
    reset.addEventListener('click', () => {
        userScore = 0;
        muestraPuntuacion(userScore);
        mostrarCarta(userScore);  // Cambiado a number
        resetGameView(currentDisplay);
    });
}

// Función gameOver 
function gameOver(finalScore: number): void {
    // Deshabilitar el botón "Dame Carta"
    if (giveCard) {
        giveCard.disabled = true;
    }
    const { mensaje, icono } = gameOverLogic(finalScore);
    updateGameOverUI(mensaje, icono);
}
