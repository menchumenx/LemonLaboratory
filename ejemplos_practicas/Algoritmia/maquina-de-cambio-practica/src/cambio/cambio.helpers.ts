

interface Resultado {
    cantidadBilletes: number,
    restoCantidad: number
  }
  
// Vamos a crear una función que reciba la cantidad a devolver y un billete o moneda y nos devuelva un objeto con la cantidad de ese billete o moneda y el resto que me queda por repartir en monedas más pequeñas

export const calcularEntrada = (
    cantidad: number,
    billeteMoneda: number
): Resultado => {
    if (
        cantidad === undefined || billeteMoneda === undefined ||
        cantidad === null || billeteMoneda === null 
    ) {
        throw new Error("Los parámetros introducidos no son correctos");
    }

    const cantidadBilleteMoneda = Math.floor(cantidad / billeteMoneda) 
    const restoCantidad = cantidad % billeteMoneda
    
    return {cantidadBilletes: cantidadBilleteMoneda, restoCantidad: restoCantidad}
};
