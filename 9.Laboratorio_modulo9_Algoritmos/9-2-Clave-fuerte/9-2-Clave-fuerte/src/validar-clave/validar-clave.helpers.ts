import { ValidacionClave } from "./models";

const validaParametro = (parametro: string) => {
    if (!parametro ||
        parametro === null ||
        parametro === '' ||
        typeof parametro !== 'string') {
        throw new Error("El parámetro introducido no es válido");
    }
}


// ? La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (
    clave: string
): ValidacionClave => {

    validaParametro(clave);

    let respuesta: ValidacionClave = { esValida: false, error: 'la calve debe contener al menos una mayúscula' };

    if (/[A-Z]/.test(clave)) {
        respuesta = { esValida: true }
    }

    return respuesta
};


// ? La clave debe tener números
export const tieneNumeros = (
    clave: string
): ValidacionClave => {

    validaParametro(clave);

    let respuesta: ValidacionClave = { esValida: false, error: 'la clave debe contener al menos un caracter numérico' };

    if (/\d/.test(clave)) {
        respuesta = { esValida: true }
    }

    return respuesta
};


// ? La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    validaParametro(clave);

    let respuesta: ValidacionClave = { esValida: false, error: 'la clave debe contener al menos un caracter especial' };

    if (/[!@#\$%\^\&*\)\(+=._-]/.test(clave)) {
        respuesta = { esValida: true }
    }
    
    return respuesta
  };


// ? La clave debe de tener una longitud mínima de 8 caracteres.
// const tieneLongitudMinima = (clave: string): ValidacionClave => {
//   // ...
// };


// ? La clave no debe tener el nombre del usuario.
// const tieneNombreUsuario = (
//   nombreUsuario: string
//   clave: string,
// ): ValidacionClave => {
//  // ...
// };


// ? La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
// const tienePalabrasComunes = (
//   clave: string,
//   commonPasswords: string[]
// ): ValidacionClave => {
//   // ...
// };