import { describe, expect, it } from 'vitest';
import { 
    tieneCaracteresEspeciales,
    tieneLongitudMinima,
    tieneMayusculasYMinusculas,
    tieneNombreUsuario,
    tieneNumeros,
    tienePalabrasComunes,

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



describe("tieneLongitudMinima", () => {

    // ++++ Casos ARISTA - Programación defensiva para validaParametro ++++
    it("debería lanzar un error si el parámetro es undefined", () => {
        // Arrange
        const clave: any = undefined;
        // Act & Assert
        expect(() => tieneLongitudMinima(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro es null", () => {
        // Arrange
        const clave: any = null;
        // Act & Assert
        expect(() => tieneLongitudMinima(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro es una cadena vacía", () => {
        // Arrange
        const clave = "";
        // Act & Assert
        expect(() => tieneLongitudMinima(clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro no es un string", () => {
        // Arrange
        const clave: any = 12345678;
        // Act & Assert
        expect(() => tieneLongitudMinima(clave)).toThrowError("El parámetro introducido no es válido");
    });

    // ++++ Casos PRINCIPALES ++++
    it.each([
        // Casos donde se espera que esValida sea true
        ["exactamente 8 caracteres", "12345678", { esValida: true }],
        ["más de 8 caracteres", "123456789", { esValida: true }],
        ["10 caracteres", "abcdefghij", { esValida: true }],
        
        // Casos donde se espera que esValida sea false
        ["menos de 8 caracteres", "1234567", { esValida: false, error: 'la clave debe contener al menos 8 caracteres' }],
        ["solo un carácter", "a", { esValida: false, error: 'la clave debe contener al menos 8 caracteres' }],
        ["7 caracteres", "abcdefg", { esValida: false, error: 'la clave debe contener al menos 8 caracteres' }]
    ])("debería devolver %o cuando la clave tiene una longitud de %s", (_, clave, expected) => {
        // Act
        const resultado = tieneLongitudMinima(clave);
        // Assert
        expect(resultado).toEqual(expected);
    });
});



describe("tieneNombreUsuario", () => {

    // ++++ Casos ARISTA - Programación defensiva para validaParametro y nombreUsuario ++++
    it("debería lanzar un error si el parámetro clave es undefined", () => {
        // Arrange
        const clave: any = undefined;
        const nombreUsuario = "usuario";
        // Act & Assert
        expect(() => tieneNombreUsuario(nombreUsuario, clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro clave es null", () => {
        // Arrange
        const clave: any = null;
        const nombreUsuario = "usuario";
        // Act & Assert
        expect(() => tieneNombreUsuario(nombreUsuario, clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro clave es una cadena vacía", () => {
        // Arrange
        const clave = "";
        const nombreUsuario = "usuario";
        // Act & Assert
        expect(() => tieneNombreUsuario(nombreUsuario, clave)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el nombreUsuario es undefined", () => {
        // Arrange
        const clave = "miClaveSegura";
        const nombreUsuario: any = undefined;
        // Act & Assert
        expect(() => tieneNombreUsuario(nombreUsuario, clave)).toThrowError("El parámetro nombre de usuario no es válido");
    });

    it("debería lanzar un error si el nombreUsuario es null", () => {
        // Arrange
        const clave = "miClaveSegura";
        const nombreUsuario: any = null;
        // Act & Assert
        expect(() => tieneNombreUsuario(nombreUsuario, clave)).toThrowError("El parámetro nombre de usuario no es válido");
    });

    it("debería lanzar un error si el nombreUsuario es una cadena vacía", () => {
        // Arrange
        const clave = "miClaveSegura";
        const nombreUsuario = "";
        // Act & Assert
        expect(() => tieneNombreUsuario(nombreUsuario, clave)).toThrowError("El parámetro nombre de usuario no es válido");
    });

    // ++++ Casos PRINCIPALES ++++
    it.each([
        // Casos donde se espera que esValida sea false (nombreUsuario en clave)
        ["contiene el nombre de usuario al inicio", "usuario", "usuario123", { esValida: false, error: 'la clave no puede contener el nombre de usuario' }],
        ["contiene el nombre de usuario en el medio", "admin", "miadminclave", { esValida: false, error: 'la clave no puede contener el nombre de usuario' }],
        ["contiene el nombre de usuario al final", "seguro", "clave_segura_seguro", { esValida: false, error: 'la clave no puede contener el nombre de usuario' }],
        
        // Casos donde se espera que esValida sea true (nombreUsuario no en clave)
        ["no contiene el nombre de usuario", "user", "miClaveSegura", { esValida: true }],
        ["nombre de usuario no presente en una clave larga", "abc", "miClaveEsSeguraYFuerte", { esValida: true }],
        ["completamente diferente al nombre de usuario", "nombre", "contrasena123", { esValida: true }]
    ])("debería devolver %o cuando el nombreUsuario %s y la clave es %s", (_, nombreUsuario, clave, expected) => {
        // Act
        const resultado = tieneNombreUsuario(nombreUsuario, clave);
        // Assert
        expect(resultado).toEqual(expected);
    });
});



describe("tienePalabrasComunes", () => {

    const commonPasswords: string[] = [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        "welcome",
        "monkey",
        "sunshine",
        "football",
        "123456789"
    ];

    // ++++ Casos ARISTA - Programación defensiva para validaParametro ++++
    it("debería lanzar un error si el parámetro clave es undefined", () => {
        // Arrange
        const clave: any = undefined;
        // Act & Assert
        expect(() => tienePalabrasComunes(clave, commonPasswords)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro clave es null", () => {
        // Arrange
        const clave: any = null;
        // Act & Assert
        expect(() => tienePalabrasComunes(clave, commonPasswords)).toThrowError("El parámetro introducido no es válido");
    });

    it("debería lanzar un error si el parámetro clave es una cadena vacía", () => {
        // Arrange
        const clave = "";
        // Act & Assert
        expect(() => tienePalabrasComunes(clave, commonPasswords)).toThrowError("El parámetro introducido no es válido");
    });

    // ++++ Casos PRINCIPALES ++++
    it.each([
        // Casos donde se espera que esValida sea false (clave contiene una palabra común)
        ["contiene 'password'", "mypassword123", "password", { esValida: false, error: 'la clave no puede contener password' }],
        ["contiene '123456'", "clave123456segura", "123456", { esValida: false, error: 'la clave no puede contener 123456' }],
        ["contiene 'qwerty'", "miqwertyclave", "qwerty", { esValida: false, error: 'la clave no puede contener qwerty' }],
        ["contiene 'admin'", "superadminclave", "admin", { esValida: false, error: 'la clave no puede contener admin' }],
        ["contiene 'football'", "amofutbolfootball", "football", { esValida: false, error: 'la clave no puede contener football' }],
        
        // Casos donde se espera que esValida sea true (clave no contiene palabras comunes)
        ["no contiene ninguna palabra común", "miClaveSegura123!", undefined, { esValida: true }],
        ["contiene solo números sin coincidencias", "987654", undefined, { esValida: true }],
        ["completamente diferente a las palabras comunes", "claveUnica!@#", undefined, { esValida: true }],
    ])("debería devolver %o cuando la clave %s", (_, clave, commonPassword, expected) => {
        // Act
        const resultado = tienePalabrasComunes(clave, commonPasswords);

        // Assert
        expect(resultado).toEqual(expected);
    });
});
