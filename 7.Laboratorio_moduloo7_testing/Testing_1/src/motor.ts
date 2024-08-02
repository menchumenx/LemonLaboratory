import {
    VICTORIA,
    DERROTA,
    CONSERVADOR,
    MAS_RIESGO,
    ESTUVO_CERCA,
} from "./modelo";

// ! Funcion que determina si un jugador ha hanado o perdido la partida
// Función para obtener una carta
export function dameCarta(): number {
    let random = Math.floor(Math.random() * 10) + 1; // se puede sacra esta funci´n fuera para refactorizar
    if (random >= 8) random += 2;

    return random;
}

// ! Funcion que determina si un jugador ha hanado o perdido la partida
// Función para evaluar si sumar 0.5 a la puntuación del jugador
export function getRealValue(random: number): number {
    return random === 10 || random === 11 || random === 12 ? 0.5 : random;
}


// Definición del tipo de retorno de gameOverLogic
export interface GameOverResult {
    mensaje: string;
    icono: string;
}

// ! Funcion que determina si un jugador ha hanado o perdido la partida
// Función para determinar el mensaje apropiado a mostrar
export function gameOverLogic(finalScore: number): GameOverResult {
    let mensaje: string;
    let icono: string;

    if (finalScore < 4) {
        mensaje = "Has sido muy conservador ";
        icono = CONSERVADOR;
    } else if (finalScore >= 4 && finalScore < 5) {
        mensaje = "Un poco más de riesgo no vendría mal ";
        icono = MAS_RIESGO;
    } else if (finalScore >= 5 && finalScore < 6) {
        mensaje = "Te ha entrado el canguelo eh? ";
        icono = MAS_RIESGO;
    } else if (finalScore >= 6 && finalScore < 7.5) {
        mensaje = "Casi casi... ";
        icono = ESTUVO_CERCA;
    } else if (finalScore === 7.5) {
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
        icono = VICTORIA;
    } else {
        mensaje = `HAS PERDIDO!! Tu puntuación es ${finalScore} `;
        icono = DERROTA;
    }

    return { mensaje, icono };
}
