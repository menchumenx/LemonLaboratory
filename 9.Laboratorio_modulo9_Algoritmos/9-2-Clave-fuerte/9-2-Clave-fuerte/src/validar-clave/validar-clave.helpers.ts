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
export const tieneLongitudMinima = (
    clave: string
): ValidacionClave => {

    validaParametro(clave);

    let respuesta: ValidacionClave = { esValida: false, error: 'la clave debe contener al menos 8 caracteres' };

    if (clave.length >= 8) {
        respuesta = { esValida: true }
    }

    return respuesta
}




// ? La clave no debe tener el nombre del usuario.
export const tieneNombreUsuario = (
    nombreUsuario: string,
    clave: string
): ValidacionClave => {

    validaParametro(clave);

    if (!nombreUsuario ||
        nombreUsuario === null ||
        nombreUsuario === ""
    ) {
        throw new Error("El parámetro nombre de usuario no es válido");
    }

    let respuesta: ValidacionClave = { esValida: false, error: 'la clave no puede contener el nombre de usuario' };

    let siContieneNombreUsuario = clave.includes(nombreUsuario);
    if (!siContieneNombreUsuario) {
        respuesta = { esValida: true }
    }

    return respuesta
};


// ? La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
export const tienePalabrasComunes = (
    clave: string,
    commonPasswords: string[]
): ValidacionClave => {

    validaParametro(clave);

    let respuesta: ValidacionClave = { esValida: true };

    const contieneCommonPasswords = commonPasswords.find((commonPass) => clave.includes(commonPass))
    if(contieneCommonPasswords){
        respuesta = { esValida: false, error: `la clave no puede contener ${contieneCommonPasswords}` }
    }
    
    return respuesta
}

