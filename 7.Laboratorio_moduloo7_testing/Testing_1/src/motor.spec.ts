
// ? Importaciones
import { describe, it, expect, vi } from 'vitest';

import {
    VICTORIA,
    DERROTA,
    CONSERVADOR,
    MAS_RIESGO,
    ESTUVO_CERCA,
} from "./modelo";

import {
    dameCarta,
    getRealValue,
    gameOverLogic,
    GameOverResult
} from "./motor";


// ? ***************************************************************
// ? agrupacion 1 : dameCarta():number
describe("dameCarta", () => {

    // caso 1
    it('debería devolver 5 cuando el número aleatorio es 5', () => {
        // arrange-> 
        const resultadoEsperado = 5;
        vi.spyOn(Math, 'random').mockReturnValue(0.4);

        // * cuando mockeamos un valor o funcion quiere decir que imponemos un valor, independientemente de lo que vaya a devolver. En este caso le estamso diciendo que no coja un valor aleatorio, si no que el valor siempre va a ser 5, ya que buscamos que devuleva un valor numerico

        // act
        const result = dameCarta();

        // assert
        expect(result).toBe(resultadoEsperado);
    })


    // caso 2
    it('debería devolver 10 cuando el numero aleatorio es 8', () => {
        // arrange
        const resutadoEsperado = 10;
        vi.spyOn(Math, 'random').mockReturnValue(0.7); //devuleve 8 para sumar 2

        // act
        const result = dameCarta();

        // assert
        expect(result).toBe(resutadoEsperado);

    })

})


// ? ***************************************************************
// ? agrupacion 2 : getRealValue(random: number): number
describe("getRealValue", () => {

    it('debería devolver 0.5 si el valor es mayor 0 igual a 10', () => {
        // arrange
        const randomRecibido: number = 10;
        const resultadoEsperado: number = 0.5;

        // act
        const resultado = getRealValue(randomRecibido);

        // Arranage
        expect(resultado).toBe(resultadoEsperado);
    })

    it('deberia devolver el valor random recibido si este es menor a 10', () => {
        // arrange
        const randomRecibido: number = 7;
        const resultadoEsperado: number = randomRecibido;

        // act
        const resultado = getRealValue(randomRecibido);

        // Arrange
        expect(resultado).toBe(resultadoEsperado)

    })
})


// ? ***************************************************************
// ? agrupacion 3 : gameOverLogic(finalScore: number): GameOverResult 
describe("gameOverLogic", () => {

    // caso 1
    it('debería devolver un objeto GameOverResult con el mensaje: Has sido muy conservador y el icono: CONSERVADOR, cuando finalScore sea menos a 4', () => {

        // arrange
        const finalScore: number = 3;
        const resultadoEsperado: GameOverResult = {
            mensaje: "Has sido muy conservador ",
            icono: CONSERVADOR
        }

        // act
        const resultado = gameOverLogic(finalScore);

        // assert
        expect(resultado).toStrictEqual(resultadoEsperado)
    })


    // caso 2
    it('debería devolver un objeto GameOverResult con el mensaje: Un poco más de riesgo no vendría mal y el icono: MAS_RIESGO, cuando finalScore sea 4', () => {

        // arrange
        const finalScore: number = 4;
        const resultadoEsperado: GameOverResult = {
            mensaje: "Un poco más de riesgo no vendría mal ",
            icono: MAS_RIESGO
        }

        // act
        const resultado = gameOverLogic(finalScore);

        // assert
        expect(resultado).toStrictEqual(resultadoEsperado)
    })


    // caso 3
    it('debería devolver un objeto GameOverResult con el mensaje: Te ha entrado el canguelo eh? y el icono: MAS_RIESGO, cuando finalScore sea 5', () => {

        // arrange
        const finalScore: number = 5;
        const resultadoEsperado: GameOverResult = {
            mensaje: "Te ha entrado el canguelo eh? ",
            icono: MAS_RIESGO
        }

        // act
        const resultado = gameOverLogic(finalScore);

        // assert
        expect(resultado).toStrictEqual(resultadoEsperado)
    })


    // caso 4
    it('debería devolver un objeto GameOverResult con el mensaje: "Casi casi..." y el icono: ESTUVO_CERCA, cuando finalScore sea >= 6 y < 7.5', () => {
        // arrange
        const finalScore: number = 7.1;
        const resultadoEsperado: GameOverResult = {
            mensaje: "Casi casi... ",
            icono: ESTUVO_CERCA
        };

        // act
        const resultado = gameOverLogic(finalScore);

        // assert
        expect(resultado).toStrictEqual(resultadoEsperado);
    });


    // caso 5
    it('debería devolver un objeto GameOverResult con el mensaje: "¡Lo has clavado! ¡Enhorabuena!" y el icono: VICTORIA, cuando finalScore sea === 7.5', () => {
        // arrange
        const finalScore: number = 7.5;
        const resultadoEsperado: GameOverResult = {
            mensaje: "¡Lo has clavado! ¡Enhorabuena!",
            icono: VICTORIA
        };

        // act
        const resultado = gameOverLogic(finalScore);

        // assert
        expect(resultado).toStrictEqual(resultadoEsperado);
    });


    // caso 6
    it('debería devolver un objeto GameOverResult con el mensaje: "HAS PERDIDO!! Tu puntuación es ${finalScore}" y el icono: DERROTA, cuando finalScore sea > 7.5', () => {
        // arrange
        const finalScore: number = 7.8;
        const resultadoEsperado: GameOverResult = {
            mensaje: `HAS PERDIDO!! Tu puntuación es ${finalScore} `,
            icono: DERROTA
        };

        // act
        const resultado = gameOverLogic(finalScore);

        // assert
        expect(resultado).toStrictEqual(resultadoEsperado);
    });

})


