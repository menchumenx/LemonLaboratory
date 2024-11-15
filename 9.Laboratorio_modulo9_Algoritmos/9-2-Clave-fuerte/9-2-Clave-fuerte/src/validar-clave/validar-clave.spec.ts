import { describe, expect, it } from 'vitest';
import { validarClave } from './validar-clave';


describe("validarClave", () => {
    const commonPasswords = [
        "password", "123456", "qwerty", "admin", "letmein", "welcome",
        "monkey", "sunshine", "football", "123456789"
    ];

    // ++++ Casos ARISTA - Validación de Parámetros ++++
    it("debería lanzar un error si el parámetro nombreUsuario es undefined", () => {
        expect(() => validarClave(undefined as any, "MiClaveSegura!123", commonPasswords))
            .toThrowError("El parámetro nombreUsuario debe ser una cadena no vacía");
    });

    it("debería lanzar un error si el parámetro clave es undefined", () => {
        expect(() => validarClave("usuario123", undefined as any, commonPasswords))
            .toThrowError("El parámetro clave debe ser una cadena no vacía");
    });

    it("debería lanzar un error si el parámetro commonPasswords es undefined", () => {
        expect(() => validarClave("usuario123", "MiClaveSegura!123", undefined as any))
            .toThrowError("El parámetro commonPasswords debe ser un array no vacío");
    });

    it("debería lanzar un error si el parámetro nombreUsuario es null", () => {
        expect(() => validarClave(null as any, "MiClaveSegura!123", commonPasswords))
            .toThrowError("El parámetro nombreUsuario debe ser una cadena no vacía");
    });

    it("debería lanzar un error si el parámetro clave es null", () => {
        expect(() => validarClave("usuario123", null as any, commonPasswords))
            .toThrowError("El parámetro clave debe ser una cadena no vacía");
    });

    it("debería lanzar un error si el parámetro commonPasswords es null", () => {
        expect(() => validarClave("usuario123", "MiClaveSegura!123", null as any))
            .toThrowError("El parámetro commonPasswords debe ser un array no vacío");
    });

    it("debería lanzar un error si el parámetro commonPasswords es un array vacío", () => {
        expect(() => validarClave("usuario123", "MiClaveSegura!123", []))
            .toThrowError("El parámetro commonPasswords debe ser un array no vacío");
    });

    // ++++ Caso de Éxito ++++
    it("debería devolver esValida: true para una clave válida", () => {
        const resultado = validarClave("usuario123", "MiClaveSegura!123", commonPasswords);
        expect(resultado).toEqual({ esValida: true });
    });
});
