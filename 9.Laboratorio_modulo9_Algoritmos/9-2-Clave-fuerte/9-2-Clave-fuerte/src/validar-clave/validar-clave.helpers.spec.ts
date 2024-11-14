import { describe, expect, it } from 'vitest';
import { 
    tieneCaracteresEspeciales,
    tieneMayusculasYMinusculas,
    tieneNumeros,

 } from './validar-clave.helpers';

describe("tieneMayusculasYMinusculas", () => {

    // ++++ Casos ARISTA - Programación defensiva ++++
    it("debería lanzar un error si el parámetro es undefined", () => {
        // Arrange
        const clave: any = undefined;
        // Act & Assert
        expect(() => tieneMayusculasYMinusculas(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro es null", () => {
        // Arrange
        const clave: any = null;
        // Act & Assert
        expect(() => tieneMayusculasYMinusculas(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro es una cadena vacía", () => {
        // Arrange
        const clave = "";
        // Act & Assert
        expect(() => tieneMayusculasYMinusculas(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro no es un string", () => {
        // Arrange
        const clave: any = 12345;
        // Act & Assert
        expect(() => tieneMayusculasYMinusculas(clave)).toThrowError("El parámetro introducido no es válido");
    });

    // ++++ Casos PRINCIPALES ++++
    it("debería devolver esValida: true si la clave contiene al menos una letra mayúscula", () => {
        // Arrange
        const clave = "HolaMundo";
        // Act
        const resultado = tieneMayusculasYMinusculas(clave);
        // Assert
        expect(resultado).toEqual({ esValida: true });
    });

    it("debería devolver esValida: false y un mensaje de error si la clave no contiene letras mayúsculas", () => {
        // Arrange
        const clave = "holamundo";
        // Act
        const resultado = tieneMayusculasYMinusculas(clave);
        // Assert
        expect(resultado).toEqual({ esValida: false, error: 'la calve debe contener al menos una mayúscula' });
    });
});



describe("tieneNumeros", () => {

    // ++++ Casos ARISTA - Programación defensiva para validaParametro ++++
    it("debería lanzar un error si el parámetro es undefined", () => {
        // Arrange
        const clave: any = undefined;
        // Act & Assert
        expect(() => tieneNumeros(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro es null", () => {
        // Arrange
        const clave: any = null;
        // Act & Assert
        expect(() => tieneNumeros(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro es una cadena vacía", () => {
        // Arrange
        const clave = "";
        // Act & Assert
        expect(() => tieneNumeros(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro no es un string", () => {
        // Arrange
        const clave: any = 12345;
        // Act & Assert
        expect(() => tieneNumeros(clave)).toThrowError("El parámetro introducido no es válido");
    });

    // ++++ Casos PRINCIPALES ++++
    it.each([
        // Casos donde se espera que esValida sea true
        ["contiene números al final", "Hola123", { esValida: true }],
        ["contiene números al inicio", "123Hola", { esValida: true }],
        ["contiene números en el medio", "Ho123la", { esValida: true }],
        ["solo números", "123456", { esValida: true }],
        ["mezcla de letras y números", "A1B2C3", { esValida: true }],
        
        // Casos donde se espera que esValida sea false
        ["sin números, solo letras minúsculas", "holamundo", { esValida: false, error: 'la clave debe contener al menos un caracter numérico' }],
        ["sin números, solo letras mayúsculas", "HOLAMUNDO", { esValida: false, error: 'la clave debe contener al menos un caracter numérico' }],
        ["sin números, letras mixtas", "HolaMundo", { esValida: false, error: 'la clave debe contener al menos un caracter numérico' }],
        ["sin números, solo caracteres especiales", "!@#$%^&*", { esValida: false, error: 'la clave debe contener al menos un caracter numérico' }]

    ])("debería devolver %o cuando la clave %s", (_, clave, expected) => {
        // Act
        const resultado = tieneNumeros(clave);
        // Assert
        expect(resultado).toEqual(expected);
    });
});


describe("tieneCaracteresEspeciales", () => {

    // ++++ Casos ARISTA - Programación defensiva para validaParametro ++++
    it("debería lanzar un error si el parámetro es undefined", () => {
        // Arrange
        const clave: any = undefined;
        // Act & Assert
        expect(() => tieneCaracteresEspeciales(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro es null", () => {
        // Arrange
        const clave: any = null;
        // Act & Assert
        expect(() => tieneCaracteresEspeciales(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro es una cadena vacía", () => {
        // Arrange
        const clave = "";
        // Act & Assert
        expect(() => tieneCaracteresEspeciales(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro no es un string", () => {
        // Arrange
        const clave: any = 12345;
        // Act & Assert
        expect(() => tieneCaracteresEspeciales(clave)).toThrowError("El parámetro introducido no es válido");
    });

    // ++++ Casos PRINCIPALES ++++
    it.each([
        // Casos donde se espera que esValida sea true
        ["contiene un carácter especial al final", "Hola!", { esValida: true }],
        ["contiene un carácter especial al inicio", "@Hola", { esValida: true }],
        ["contiene varios caracteres especiales", "Hola@Mundo!", { esValida: true }],
        ["solo caracteres especiales", "!@#$%^&*", { esValida: true }],
        
        // Casos donde se espera que esValida sea false
        ["sin caracteres especiales, solo letras", "HolaMundo", { esValida: false, error: 'la clave debe contener al menos un caracter especial' }],
        ["sin caracteres especiales, solo números", "123456", { esValida: false, error: 'la clave debe contener al menos un caracter especial' }],
        ["sin caracteres especiales, mezcla de letras y números", "Hola123", { esValida: false, error: 'la clave debe contener al menos un caracter especial' }],
    ])("debería devolver %o cuando la clave %s", (_, clave, expected) => {
        // Act
        const resultado = tieneCaracteresEspeciales(clave);
        // Assert
        expect(resultado).toEqual(expected);
    });
});
