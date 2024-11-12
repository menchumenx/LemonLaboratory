
import { describe, expect, it } from 'vitest';
import { 
    calculaLineaTicket, 
    calcularPrecioConIva, 
    calculaResultadoTotalTicket, 
    calcularTotalPorTipoIva 
} from './ticketCompra.helpers';
import { LineaTicket, Producto, TipoIva } from './models';


describe('calcularPrecioIva', () => {

    // ++++ casos ARISTA - programacion defensiva ++++
    it("debería devolver un THROW si el parámetro de entrada es undefined", () => {
        // Arrange
        const producto: any = undefined;
        // Act & Assert
        expect(() => calcularPrecioConIva(producto)).toThrowError("Los parámetros introducidos no son correctos");
    });

    it("debería devolver un THROW si los parametros de entrada son null", () => {
        // Arrange
        const producto: any = null;
        // Act & Assert
        expect(() => calcularPrecioConIva(producto)).toThrowError("Los parámetros introducidos no son correctos");
    });


    // ++++ casos PRINCIPALES ++++
    it.each([
        // Tipo de IVA 'general' (21%)
        ['general' as TipoIva, 2, 2.42],           // Precio base: 2, IVA: 21%, Precio final: 2.42
        ['general' as TipoIva, 10, 12.1],          // Precio base: 10, IVA: 21%, Precio final: 12.1

        // Tipo de IVA 'reducido' (10%)
        ['reducido' as TipoIva, 5, 5.5],           // Precio base: 5, IVA: 10%, Precio final: 5.5
        ['reducido' as TipoIva, 15, 16.5],         // Precio base: 15, IVA: 10%, Precio final: 16.5

        // Tipo de IVA 'superreducidoA' (5%)
        ['superreducidoA' as TipoIva, 5, 5.25],    // Precio base: 5, IVA: 5%, Precio final: 5.25
        ['superreducidoA' as TipoIva, 20, 21],     // Precio base: 20, IVA: 5%, Precio final: 21

        // Tipo de IVA 'superreducidoB' (4%)
        ['superreducidoB' as TipoIva, 10, 10.4],   // Precio base: 10, IVA: 4%, Precio final: 10.4
        ['superreducidoB' as TipoIva, 25, 26],     // Precio base: 25, IVA: 4%, Precio final: 26

        // Tipo de IVA 'superreducidoC' (0%)
        ['superreducidoC' as TipoIva, 8, 8],       // Precio base: 8, IVA: 0%, Precio final: 8
        ['superreducidoC' as TipoIva, 50, 50],     // Precio base: 50, IVA: 0%, Precio final: 50

        // Tipo de IVA 'sinIva' (0%)
        ['sinIva' as TipoIva, 12, 12],             // Precio base: 12, IVA: 0%, Precio final: 12
        ['sinIva' as TipoIva, 100, 100],           // Precio base: 100, IVA: 0%, Precio final: 100

    ])('calcula el precio correcto con IVA para el tipo %s con precio base %f y debe ser %f', (tipoIva: TipoIva, precio: number, expected: number) => {
        const producto = { nombre: "Producto de prueba", precio, tipoIva };
        const precioConIva = calcularPrecioConIva(producto);
        expect(precioConIva).toBeCloseTo(expected, 2);
    });
})


describe("calculaLineaTicket", () => {

    // ++++ casos ARISTA - programacion defensiva ++++
    it("debería devolver un THROW si el parámetro de entrada es undefined", () => {
        // Arrange
        const producto: any = undefined;
        const cantidad: any = undefined
        // Act & Assert
        expect(() => calculaLineaTicket(producto, cantidad)).toThrowError("Los parámetros introducidos no son correctos");
    });

    it("debería devolver un THROW si los parametros de entrada son null", () => {
        // Arrange
        const producto: any = null;
        const cantidad: any = null;
        // Act & Assert
        expect(() => calculaLineaTicket(producto, cantidad)).toThrowError("Los parámetros introducidos no son correctos");
    });

    // ++++ casos PRINCIPALES ++++
    it.each([
        // Caso 1: Producto con IVA general (21%) y cantidad 2
        [
            { nombre: "Camiseta", precio: 20, tipoIva: "general" } as Producto,
            2,
            {
                nombre: "Camiseta",
                cantidad: 2,
                precionSinIva: 40, // 20 * 2
                tipoIva: "general",
                precioConIva: 48.4, // (20 * 1.21) * 2
            },
        ],
        // Caso 2: Producto con IVA reducido (10%) y cantidad 1
        [
            { nombre: "Libro", precio: 15, tipoIva: "reducido" } as Producto,
            1,
            {
                nombre: "Libro",
                cantidad: 1,
                precionSinIva: 15, // 15 * 1
                tipoIva: "reducido",
                precioConIva: 16.5, // 15 * 1.10
            },
        ],
        // Caso 3: Producto con IVA superreducidoA (5%) y cantidad 5
        [
            { nombre: "Aceite de oliva", precio: 10, tipoIva: "superreducidoA" } as Producto,
            5,
            {
                nombre: "Aceite de oliva",
                cantidad: 5,
                precionSinIva: 50, // 10 * 5
                tipoIva: "superreducidoA",
                precioConIva: 52.5, // (10 * 1.05) * 5
            },
        ],
        // Caso 4: Producto con IVA superreducidoB (4%) y cantidad 3
        [
            { nombre: "Medicamento", precio: 50, tipoIva: "superreducidoB" } as Producto,
            3,
            {
                nombre: "Medicamento",
                cantidad: 3,
                precionSinIva: 150, // 50 * 3
                tipoIva: "superreducidoB",
                precioConIva: 156, // (50 * 1.04) * 3
            },
        ],
        // Caso 5: Producto con IVA superreducidoC (0%) y cantidad 4
        [
            { nombre: "Pan", precio: 2, tipoIva: "superreducidoC" } as Producto,
            4,
            {
                nombre: "Pan",
                cantidad: 4,
                precionSinIva: 8, // 2 * 4
                tipoIva: "superreducidoC",
                precioConIva: 8, // (2 * 1.00) * 4
            },
        ],
        // Caso 6: Producto sin IVA y cantidad 10
        [
            { nombre: "Educación", precio: 100, tipoIva: "sinIva" } as Producto,
            10,
            {
                nombre: "Educación",
                cantidad: 10,
                precionSinIva: 1000, // 100 * 10
                tipoIva: "sinIva",
                precioConIva: 1000, // (100 * 1.00) * 10
            },
        ],
    ])(
        'calculaLineaTicket correctamente para el producto %s con cantidad %d',
        (producto, cantidad, expected) => {
            const resultado = calculaLineaTicket(producto, cantidad);
            expect(resultado).toEqual(expected);
        }
    );
    
})


describe("calculaResultadoTotalTicket", () => {
    
    // Casos ARISTA - Programación defensiva
    it("debería devolver un THROW si el parámetro de entrada es undefined", () => {
        const lineasTicket: any = undefined;
        expect(() => calculaResultadoTotalTicket(lineasTicket)).toThrowError("Los parámetros introducidos no son correctos");
    });

    it("debería devolver un THROW si el parámetro de entrada es null", () => {
        const lineasTicket: any = null;
        expect(() => calculaResultadoTotalTicket(lineasTicket)).toThrowError("Los parámetros introducidos no son correctos");
    });

    it("debería devolver un THROW si el parámetro de entrada es un array vacío", () => {
        const lineasTicket: LineaTicket[] = [];
        expect(() => calculaResultadoTotalTicket(lineasTicket)).toThrowError("Los parámetros introducidos no son correctos");
    });

    // Casos principales
    it.each([
        // Caso 1: Solo productos con IVA general (21%)
        [
            [
                { producto: { nombre: "Camiseta", precio: 20, tipoIva: "general" }, cantidad: 2 },
                { producto: { nombre: "Zapatos", precio: 50, tipoIva: "general" }, cantidad: 1 }
            ] as LineaTicket[],
            {
                totalSinIva: 90,
                totalConIva: 108.9,
                totalIva: 18.9
            }
        ],
        // Caso 2: Mixto de IVA reducido (10%) y superreducidoA (5%)
        [
            [
                { producto: { nombre: "Libro", precio: 15, tipoIva: "reducido" }, cantidad: 1 },
                { producto: { nombre: "Aceite de oliva", precio: 10, tipoIva: "superreducidoA" }, cantidad: 5 }
            ] as LineaTicket[],
            {
                totalSinIva: 65,
                totalConIva: 69.0,
                totalIva: 4.0
            }
        ],
        // Caso 3: Productos con IVA superreducidoB (4%)
        [
            [
                { producto: { nombre: "Medicamento", precio: 50, tipoIva: "superreducidoB" }, cantidad: 3 },
                { producto: { nombre: "Antibiótico", precio: 30, tipoIva: "superreducidoB" }, cantidad: 2 }
            ] as LineaTicket[],
            {
                totalSinIva: 210,
                totalConIva: 218.4,
                totalIva: 8.4
            }
        ],
        // Caso 4: Mezcla de productos con IVA superreducidoC (0%) y sin IVA
        [
            [
                { producto: { nombre: "Pan", precio: 2, tipoIva: "superreducidoC" }, cantidad: 4 },
                { producto: { nombre: "Educación", precio: 100, tipoIva: "sinIva" }, cantidad: 10 }
            ] as LineaTicket[],
            {
                totalSinIva: 1008,
                totalConIva: 1008,
                totalIva: 0
            }
        ],
        // Caso 5: Varios tipos de IVA mixto
        [
            [
                { producto: { nombre: "Camiseta", precio: 20, tipoIva: "general" }, cantidad: 2 },
                { producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC" }, cantidad: 6 },
                { producto: { nombre: "Libro", precio: 15, tipoIva: "reducido" }, cantidad: 1 }
            ] as LineaTicket[],
            {
                totalSinIva: 61,
                totalConIva: 70.9,
                totalIva: 9.9
            }
        ]
    ])(
        'calculaResultadoTotalTicket correctamente para las líneas de ticket %j',
        (lineasTicket, expected) => {
            const resultado = calculaResultadoTotalTicket(lineasTicket);
            expect(resultado.totalSinIva).toBeCloseTo(expected.totalSinIva, 2);
            expect(resultado.totalConIva).toBeCloseTo(expected.totalConIva, 2);
            expect(resultado.totalIva).toBeCloseTo(expected.totalIva, 2);
        }
    );
});

