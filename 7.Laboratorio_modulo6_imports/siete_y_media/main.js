import { dameCarta, getRealValue, gameOverLogic} from './motor.js';
import { muestraPuntuacion, mostrarCarta, resetGameView, updateGameOverUI } from './ui.js';

// Inicialización de variables globales
let userScore = 0;

// Elementos del DOM
const cartaDada = document.getElementById('mostrarCarta');
const giveCard = document.getElementById('carta');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const cardsBox = document.querySelector('.cards'); // Contenedor de cartas
const currentDisplay = getComputedStyle(cardsBox).display; // Estado actual de visualización


// Ocultar la carta inicialmente
cartaDada ? cartaDada.style.display = 'none' : null;


// Agregar eventos de click a los botones
giveCard ? giveCard.addEventListener('click', () => {
    const random = dameCarta();
    mostrarCarta(random);
    const realValue = getRealValue(random);
    userScore += realValue;
    muestraPuntuacion(userScore);
    if (userScore > 7.5) gameOver(userScore);
}) : null;

stop ? stop.addEventListener('click', () => gameOver(userScore)) : null;
reset ? reset.addEventListener('click', () => {
    userScore = 0;
    muestraPuntuacion(userScore);
    mostrarCarta(userScore);
    resetGameView(currentDisplay);
}) : null;



// Función gameOver 
function gameOver(finalScore) {
    // Deshabilitar el botón "Dame Carta"
    giveCard ? giveCard.disabled = true : null
    const { mensaje, icono } = gameOverLogic(finalScore);
    updateGameOverUI(mensaje, icono);
}