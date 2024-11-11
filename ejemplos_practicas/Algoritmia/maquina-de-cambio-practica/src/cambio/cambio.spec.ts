
import { describe, expect, it } from 'vitest';
import { calculaCambio } from './cambio';
import { Cambio } from './model';


describe("calcularCambio", () => {

    // ++++ casos ARISTA - programacion defensiva ++++
    it("debería devolver un THROW si el parámetro de entrada es undefined", () => {
        // Arrange
        const compra: any = undefined;
        const pago: any = undefined;

        // Act & Assert
        expect(() => calculaCambio(compra, pago)).toThrowError("Los parámetros introducidos no son correctos");
    });

    it("debería devolver un THROW si los parametrso de entrada son null", () => {
        // Arrange
        const compra: any = null;
        const pago: any = null;

        // Act & Assert
        expect(() => calculaCambio(compra, pago)).toThrowError("Los parámetros introducidos no son correctos");
    });

    // it("debería devolver un THROW si los parametros de entrada tienen valor 0", () => {
    //     // Arrange
    //     const compra: number = 0;
    //     const pago: number = 0;

    //     // Act & Assert
    //     expect(() => calculaCambio(compra, pago)).toThrowError("Los parámetros introducidos no son correctos");
    // });


    // ++++ casos PRINCIPALES ++++
    it.each([
        [2, 50, [
            { billeteMoneda: 20, cantidad: 2 },
            { billeteMoneda: 5, cantidad: 1 },
            { billeteMoneda: 2, cantidad: 1 },
            { billeteMoneda: 1, cantidad: 1 }
          ]],
        [12.25, 40, [
            { billeteMoneda: 20, cantidad: 1 },
            { billeteMoneda: 5, cantidad: 1 },
            { billeteMoneda: 2, cantidad: 1 },
            { billeteMoneda: 0.5, cantidad: 1 },
            { billeteMoneda: 0.2, cantidad: 1 },
            { billeteMoneda: 0.02, cantidad: 2 }
          ]],

    ])(
        "si la camra son %s y el pago es %s, debería devolver %s",
        (compra:number, pago:number, valorEsperado:Cambio[]) => {
            const result = calculaCambio(compra, pago);
            expect(result).toEqual(valorEsperado);
        }
    )


})