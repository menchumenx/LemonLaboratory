
// Archivo con todas las funciones de apoyo al algoritmo principal

// comprobar si el valor introdudido es null || undefined || ""
export const siValor = (cadena:string) => {
    if (cadena === null || cadena === undefined) {
        throw new Error("{error:true, errorMesage: No se ha itroducido ningun valor}");
    }

    if (cadena === "") {
        throw new Error("{error:true, errorMesage: La cadena introducida esta vacía}");
    }
}



// 1- elimimar el ultimo digito del string recibido como numero de trajeta. se elimina est numero por que es el numero de control
export const eliminaElUltimoDigito = (numeroTarjeta: string): string => {

    siValor(numeroTarjeta) // comprueba si el valor introducido es null || undefined || ""

    return numeroTarjeta.slice(0,-1);

}


// Esta funcion debe devolver el último caracter del string como number
export const obtenerUltimoCaracter = (numeroTarjeta: string): number => {

    siValor(numeroTarjeta) // comprueba si el valor introducido es null || undefined || ""

    return parseInt(numeroTarjeta.slice(-1));
}



// Este método debe recorrer la cadena desde atras, debemos tener en cuenta que el último caracter ha sido eliminado 1234567 -> [1,4,6,1,0,4,6,2,2]
export const multiplicaPorDosSaltandoUno = (numeroTarjeta: string): number[] => {

    siValor(numeroTarjeta); // Comprueba si el valor introducido es null || undefined || ""

    let alternosPorDos: number[] = [];

    // Recorre el string desde el último carácter hacia el primero
    for (let i = numeroTarjeta.length - 1; i >= 0; i--) {
        let numeroActual = parseInt(numeroTarjeta[i]);

        // Multiplica por 2 los números en posiciones alternas (último, antepenúltimo, etc.)
        if ((numeroTarjeta.length - 1 - i) % 2 === 0) {
            numeroActual *= 2;
        }

        // Si el resultado tiene dos dígitos, descomponer en dígitos individuales
        if (numeroActual >= 10) {
            const digitos = numeroActual.toString().split('').map(Number);
            alternosPorDos.push(...digitos);
        } else {
            alternosPorDos.push(numeroActual);
        }
    }

    return alternosPorDos;
};



// Este método deberá sumar las cifras del array anterior
export const sumaNumerosAlternos = (numerosAlternos: number[]): number => {
    if (!Array.isArray(numerosAlternos) || numerosAlternos.length === 0 || numerosAlternos.some(num => typeof num !== 'number')) {
        throw new Error("El valor proporcionado no es un array válido de números.");
    }

    return numerosAlternos.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
};



/* 
Flag = 10 - (suma %10)
suma = 23
23 | 10
    ------
    2
3

Flag => 10 - 3  = 7
*/
export const calculaFlagSumaTotal = (sumaTotal: number): number => {
    if (typeof sumaTotal !== 'number' || isNaN(sumaTotal)) {
        throw new Error("El valor proporcionado no es un número válido.");
    }

    return 10 - (sumaTotal % 10);
};

