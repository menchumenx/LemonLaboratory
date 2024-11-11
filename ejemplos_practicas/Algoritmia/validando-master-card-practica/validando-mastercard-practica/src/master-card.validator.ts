
import {
    calculaFlagSumaTotal,
    eliminaElUltimoDigito,
    multiplicaPorDosSaltandoUno,
    obtenerUltimoCaracter,
    siValor,
    sumaNumerosAlternos,


} from './master-card.helpers';

// helpers
const siNumeroTarjetaEstaBienFormado = (numeroTarjeta:string) => {
    if (numeroTarjeta === null || numeroTarjeta === undefined) {
        throw new Error("{error:true, errorMesage: No se ha itroducido ningun valor}");
    }

    if (numeroTarjeta === "") {
        throw new Error("{error:true, errorMesage: La cadena introducida esta vacía}");
    }
        if(numeroTarjeta.length !== 16 || isNaN(parseInt(numeroTarjeta))){
        throw new Error("{error:true, errorMesage: No se ha introducido un valor válido}");
    }
}

// interface
interface InfoTarjeta {
    digitoDeControl: number,
    numeroTarjetaSinDigitoDeControl: string
}

const separaDigitoDeControl = (numeroTarjeta: string): InfoTarjeta => ({
    digitoDeControl: obtenerUltimoCaracter(numeroTarjeta),
    numeroTarjetaSinDigitoDeControl: eliminaElUltimoDigito(numeroTarjeta)
})

const calcularFlag = (numeroTarjetaSinDigitoDeControl: string): number => {
    const numerosTarjetaMultiplicadosArr = multiplicaPorDosSaltandoUno(numeroTarjetaSinDigitoDeControl);

    const sumaTotalNumerosTarjeta = sumaNumerosAlternos(numerosTarjetaMultiplicadosArr);

    return calculaFlagSumaTotal(sumaTotalNumerosTarjeta);
}


// +++++++++ main function +++++++++
export const esValidaTarjetaMasterCard = (numeroTarjeta: string): boolean => {

    siNumeroTarjetaEstaBienFormado(numeroTarjeta)

    const {digitoDeControl, numeroTarjetaSinDigitoDeControl} = separaDigitoDeControl(numeroTarjeta);

    const flag = calcularFlag(numeroTarjetaSinDigitoDeControl);
    
    return digitoDeControl === flag;

};

