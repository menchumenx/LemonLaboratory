
import { Cambio } from './model';
import { calcularEntrada } from './cambio.helpers'



export const calculaCambio = (
  compra: number, 
  pago: number
): Cambio[] => {

    if (
        compra === undefined || pago === undefined ||
        compra === null || pago === null 
    ) {
        throw new Error("Los parámetros introducidos no son correctos");
    }

    let cambioADevolver = parseFloat((pago - compra).toFixed(2));
    console.log("Cambio a devolver: ", cambioADevolver);

    const arrayBilletesMonedas = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let cambioCalculado: Cambio[] = [];
    
    arrayBilletesMonedas.forEach(billeteMoneda => {
        const { cantidadBilletes, restoCantidad } = calcularEntrada(cambioADevolver, billeteMoneda);
        console.log();
        
        if (cantidadBilletes > 0) {
            cambioCalculado.push({ billeteMoneda: billeteMoneda, cantidad:cantidadBilletes});
        }

        cambioADevolver = restoCantidad; // Actualizamos el resto para la siguiente denominación
    });

    console.log("Cambio calculado:", cambioCalculado);
    return cambioCalculado;
}