
import { describe, it, expect } from 'vitest';
import { calculaFlagSumaTotal, 
    eliminaElUltimoDigito, 
    multiplicaPorDosSaltandoUno, 
    obtenerUltimoCaracter, 
    sumaNumerosAlternos, 
 } from './master-card.helpers';



describe('eliminaElUltimoDigito', () => {
    it("deberia devolver un trow si la entrada es undefined", () => {
        // Arrange 
        const cadena: any = undefined;
        // Act
        const result = () => eliminaElUltimoDigito(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: No se ha itroducido ningun valor}");
    })

    it("debería delvolver un TROW si la entrada es null", () => {
        // Arrange
        const cadena: any = null;
        // Act
        const result = () => eliminaElUltimoDigito(cadena);
        // Assert
        expect(result).toThrowError("{error:true, errorMesage: No se ha itroducido ningun valor}")
    })

    it("debería devolver un THROW si el valor introducido es un string vacio", () => {
        // Arrange 
        const cadena: string = "";
        // Act
        const result = () => eliminaElUltimoDigito(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: La cadena introducida esta vacía}")
    })
    

    it("debería devolver el valor introducido sin el último digito", ()=> {
        // Arrange
        const cadena:string = "12345674";
        // Act
        const result = eliminaElUltimoDigito(cadena);
        // Assert
        expect(result).toBe("1234567");
    })
})

describe("obtenerUltimoCaracter", ()=> {
    it("deberia devolver un trow si la entrada es undefined", () => {
        // Arrange 
        const cadena: any = undefined;
        // Act
        const result = () => obtenerUltimoCaracter(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: No se ha itroducido ningun valor}");
    })

    it("debería delvolver un TROW si la entrada es null", () => {
        // Arrange
        const cadena: any = null;
        // Act
        const result = () => obtenerUltimoCaracter(cadena);
        // Assert
        expect(result).toThrowError("{error:true, errorMesage: No se ha itroducido ningun valor}")
    })

    it("debería devolver un THROW si el valor introducido es un string vacio", () => {
        // Arrange 
        const cadena: string = "";
        // Act
        const result = () => obtenerUltimoCaracter(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: La cadena introducida esta vacía}")
    })

    it("debería devolver el último digito de la cadena como number", () =>{
        // Arrange
        const cadena: string = "12345678";
        // Act
        const result = obtenerUltimoCaracter(cadena);
        // Assert
        expect(result).toBe(8);
    })
})


describe("multiplicaPorDosSaltandoUno", () => {
    it("deberia devolver un trow si la entrada es undefined", () => {
        // Arrange 
        const cadena: any = undefined;
        // Act
        const result = () => multiplicaPorDosSaltandoUno(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: No se ha itroducido ningun valor}");
    })

    it("debería delvolver un TROW si la entrada es null", () => {
        // Arrange
        const cadena: any = null;
        // Act
        const result = () => multiplicaPorDosSaltandoUno(cadena);
        // Assert
        expect(result).toThrowError("{error:true, errorMesage: No se ha itroducido ningun valor}")
    })

    it("debería devolver un THROW si el valor introducido es un string vacio", () => {
        // Arrange 
        const cadena: string = "";
        // Act
        const result = () => multiplicaPorDosSaltandoUno(cadena);
        // Assert 
        expect(result).toThrowError("{error:true, errorMesage: La cadena introducida esta vacía}")
    })

    it("'1234567' => [1,4,6,1,0,4,6,2,2]", () => {
        // Arrange
        const cadena : string = "1234567";
        // Act
        const result = multiplicaPorDosSaltandoUno(cadena);
        // Assert
        expect(result).toEqual([1,4,6,1,0,4,6,2,2]);
    })
})

describe('sumaNumerosAlternos', () => {
    it("debería devolver un error si el valor es null", () => {
        expect(() => sumaNumerosAlternos(null as any)).toThrowError("El valor proporcionado no es un array válido de números.");
    });

    it("debería devolver un error si el valor es undefined", () => {
        expect(() => sumaNumerosAlternos(undefined as any)).toThrowError("El valor proporcionado no es un array válido de números.");
    });

    it("debería devolver un error si el valor es un string vacío", () => {
        expect(() => sumaNumerosAlternos("" as any)).toThrowError("El valor proporcionado no es un array válido de números.");
    });

    it("debería devolver un error si el array contiene elementos que no son números", () => {
        expect(() => sumaNumerosAlternos([1, "2", 3] as any)).toThrowError("El valor proporcionado no es un array válido de números.");
    });

    it("debería devolver la suma correcta para un array de números", () => {
        const numerosAlternosArr = [1, 4, 1, 0, 6, 2];
        const result = sumaNumerosAlternos(numerosAlternosArr);
        expect(result).toEqual(14);
    });
});


describe('calculaFlagSumaTotal', () => {
    it("debería devolver un error si el valor es null", () => {
        expect(() => calculaFlagSumaTotal(null as any)).toThrowError("El valor proporcionado no es un número válido.");
    });

    it("debería devolver un error si el valor es undefined", () => {
        expect(() => calculaFlagSumaTotal(undefined as any)).toThrowError("El valor proporcionado no es un número válido.");
    });

    it("debería devolver un error si el valor es un string vacío", () => {
        expect(() => calculaFlagSumaTotal("" as any)).toThrowError("El valor proporcionado no es un número válido.");
    });

    it("debería devolver el cálculo correcto del FLAG para un número válido", () => {
        const sumaTotal = 14;
        const result = calculaFlagSumaTotal(sumaTotal);
        expect(result).toEqual(6); // 10 - (14 % 10) = 6
    });
});
