import { ValidacionClave } from "./models";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./validar-clave.helpers";

const validaParametros = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
) => {
    // Verificar que `nombreUsuario` no sea `undefined`, `null`, y sea una cadena no vacía
    if (
        nombreUsuario === undefined || nombreUsuario === null ||
        typeof nombreUsuario !== 'string' || nombreUsuario.trim() === ''
    ) {
        throw new Error("El parámetro nombreUsuario debe ser una cadena no vacía");
    }

    // Verificar que `clave` no sea `undefined`, `null`, y sea una cadena no vacía
    if (
        clave === undefined || clave === null ||
        typeof clave !== 'string' || clave.trim() === ''
    ) {
        throw new Error("El parámetro clave debe ser una cadena no vacía");
    }

    // Verificar que `commonPasswords` no sea `undefined`, `null`, sea un array, y no esté vacío
    if (
        commonPasswords === undefined || commonPasswords === null ||
        !Array.isArray(commonPasswords) || commonPasswords.length === 0
    ) {
        throw new Error("El parámetro commonPasswords debe ser un array no vacío");
    }
}



export const validarClave =(
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
): ValidacionClave => {

    validaParametros(nombreUsuario, clave, commonPasswords);

    // 1. La clave debe de tener mayúsculas y minúsculas
    const mayusYMinus = tieneMayusculasYMinusculas(clave);
    if (!mayusYMinus.esValida) {
        return mayusYMinus;
    }

    // 2. La clave debe de tener números
    const numeros = tieneNumeros(clave);
    if (!numeros.esValida) {
        return numeros;
    }

    // 3. La clave debe de tener caracteres especiales
    const caracteresEspeciales = tieneCaracteresEspeciales(clave);
    if (!caracteresEspeciales.esValida) {
        return caracteresEspeciales;
    }

    // 4. La clave debe de tener una longitud mínima de 8 caracteres
    const longitudMinima = tieneLongitudMinima(clave);
    if (!longitudMinima.esValida) {
        return longitudMinima;
    }

    // 5. La clave no debe tener el nombre del usuario
    const nombreEnClave = tieneNombreUsuario(nombreUsuario, clave);
    if (!nombreEnClave.esValida) {
        return nombreEnClave;
    }

    // 6. La clave no debe de contener palabras comunes
    const palabrasComunes = tienePalabrasComunes(clave, commonPasswords);
    if (!palabrasComunes.esValida) {
        return palabrasComunes;
    }

    return { esValida: true };
};

