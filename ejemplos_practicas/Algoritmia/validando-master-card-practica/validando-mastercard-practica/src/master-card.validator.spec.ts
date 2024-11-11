
import { describe, it, expect } from 'vitest';
import { esValidaTarjetaMasterCard } from './master-card.validator';


/*
TARJETAS VÁLLIDAS --> 

5506927427317625;
5553042241984105;
5555553753048194;
5555555555554444;

TARJETAS NO VÁLIDAS -->

5506927627317626;
5553042241944106;
5525553753048195;
5554555555554445;
*/

describe("validaTarjetaMasterCard", () => {
   
    // Casos ARISTAS *******************
    it("deberia devolver un trow si la entrada es undefined", () => {
        // Arrange 
        const cadena: any = undefined;
        // Act
        const result = () => esValidaTarjetaMasterCard(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: No se ha itroducido ningun valor}");
    })

    it("debería delvolver un TROW si la entrada es null", () => {
        // Arrange
        const cadena: any = null;
        // Act
        const result = () => esValidaTarjetaMasterCard(cadena);
        // Assert
        expect(result).toThrowError("{error:true, errorMesage: No se ha itroducido ningun valor}")
    })

    it("debería devolver un THROW si el valor introducido es un string vacio", () => {
        // Arrange 
        const cadena: string = "";
        // Act
        const result = () => esValidaTarjetaMasterCard(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: La cadena introducida esta vacía}")
    })

    it("debería devolver un THROW la entrada no se puede convertir a numero", () => {
        // Arrange 
        const cadena: string = "asdfghjklñpoiuyt";
        // Act
        const result = () => esValidaTarjetaMasterCard(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: No se ha introducido un valor válido}")
    })

    it("debería devolver un THROW si la entrada no tiene 16 dígitos", () => {
        // Arrange 
        const cadena: string = "123456789";
        // Act
        const result = () => esValidaTarjetaMasterCard(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: No se ha introducido un valor válido}")
    })



    // Casos validación INDIVIDUALES *******************
    it("deberia devolver TRUE si el digito de control y el flag son 5", () => {
        // Arrange 
        const numeroTarjeta = "5506927427317625";
        // Act
        const result = esValidaTarjetaMasterCard(numeroTarjeta);
        // Assert
        expect(result).toBe(true)
    })


    it("deberia devolver FALSE si el digito de control no coincide con el flag calculado", () => {
        // Arrange 
        const numeroTarjeta = "5506927627317626";
        // Act
        const result = esValidaTarjetaMasterCard(numeroTarjeta);
        // Assert
        expect(result).toBe(false)
    })

    // Casos validación EN BUCLE *******************
    it.each([
        ["5553042241984105", true],
        ["5555553753048194", true],
        ["5555555555554444", true],

        ["5553042241944106", false],
        ["5525553753048195", false],
        ["5554555555554449", false],

    ])(
        "si la entrada es %s deberia devolver %s",
        (numeroTarjeta: string, valorEsperado: boolean) => {
            // Act
            const resultado = esValidaTarjetaMasterCard(numeroTarjeta);
            // Assert
            expect(resultado).toBe(valorEsperado);
        }
    )
})


