
import { describe, expect, it } from 'vitest';
import { calcularEntrada } from './cambio.helpers';

describe("calcularEntrada", () => {

    // ++++ casos ARISTA - programacion defensiva ++++
    it("debería devolver un THROW si el parámetro de entrada es undefined", () => {
        // Arrange
        const cantidad: any = undefined;
        const billeteMoneda: any = undefined;

        // Act & Assert
        expect(() => calcularEntrada(cantidad, billeteMoneda)).toThrowError("Los parámetros introducidos no son correctos");
    });

    it("debería devolver un THROW si los parametrso de entrada son null", () => {
        // Arrange
        const cantidad: any = null;
        const billeteMoneda: any = null;

        // Act & Assert
        expect(() => calcularEntrada(cantidad, billeteMoneda)).toThrowError("Los parámetros introducidos no son correctos");
    });




    // ++++ casos PRINCIPALES ++++

    // it("Devolver 2.5, billete 50 --> { cuantos: 0, restoCantidad: 2.5}", () => {
    //     // Arrange
    //     const cantidad = 2.5;
    //     const billeteMoneda = 50;

    //     // Act
    //     const result = calcularEntrada(cantidad, billeteMoneda);

    //     // Assert
    //     expect(result).toEqual({cuantos: 0, restoCantidad: 2.5})
    // })

    it.each([
        [2.5, 50, {cantidadBilletes: 0, restoCantidad: 2.5}],
        [7.25, 5, {cantidadBilletes: 1, restoCantidad: 2.25}],
        [6.8, 10, {cantidadBilletes: 0, restoCantidad: 6.8}],
        [10, 10, {cantidadBilletes: 1, restoCantidad: 0}],

    ])(
        "si la cantidad es %s y el billetMoneda es %s deberia devolver %s",
        (cantidad: number, billeteMoneda:number, valorEsperado: Object) => {

        // Act
        const result = calcularEntrada(cantidad, billeteMoneda);
        // Assert
        expect(result).toEqual(valorEsperado)

        }
    )

});
