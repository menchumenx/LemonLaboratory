
import { LineaTicket, Producto, ResultadoLineaTicket, ResultadoTotalTicket, TipoIva, TotalPorTipoIva } from './models';

// Mapeo de tipos de IVA a sus porcentajes
const ivaPorcentajes: { [key in TipoIva]: number } = {
    general: 0.21,
    reducido: 0.10,
    superreducidoA: 0.05,
    superreducidoB: 0.04,
    superreducidoC: 0.00,
    sinIva: 0.00,
};

/**
 * ? Calcula el precio final de un producto con el IVA aplicado según su tipo de IVA.
 * 
 * * Validación: Lanza un error si el parámetro `producto` es `null`, `undefined`, o un objeto vacío.
 *
 * @param producto - Objeto que representa el producto, incluyendo `nombre`, `precio` y `tipoIva`.
 * @returns Número que representa el precio del producto con IVA aplicado, redondeado a dos decimales.
 * @throws Error - Si `producto` es `null`, `undefined` o no cumple con los atributos requeridos.
 */
export const calcularPrecioConIva = (producto: Producto): number => {

    if (!producto || producto === null) {
        throw new Error("Los parámetros introducidos no son correctos");
    }

    const porcentajeIva = ivaPorcentajes[producto.tipoIva];
    const precioConIva = producto.precio * (1 + porcentajeIva);

    return parseFloat(precioConIva.toFixed(2));
}


/**
 * ? Calcula los valores de una línea de ticket para un producto y una cantidad específicos.
 * 
 * * Validación: Lanza un error si alguno de los parámetros `producto` o `cantidad` es `null`, `undefined` o si `cantidad` es `0`.
 * 
 * @param producto - Objeto que representa el producto a agregar al ticket, incluyendo nombre, precio y tipo de IVA.
 * @param cantidad - Número de unidades del producto en la línea de ticket.
 * @returns Objeto `ResultadoLineaTicket` con los valores calculados para la línea de ticket.
 * @throws Error - Si `producto` o `cantidad` son inválidos (null, undefined o 0).
 */
export const calculaLineaTicket = (
    producto: Producto,
    cantidad: number
): ResultadoLineaTicket => {

    if (!producto || !cantidad ||
        producto === null || cantidad === null) {
        throw new Error("Los parámetros introducidos no son correctos");
    }

    const resultadoLineaTicket: ResultadoLineaTicket = {
        nombre: producto.nombre,
        cantidad,
        precionSinIva: producto.precio * cantidad,
        tipoIva: producto.tipoIva,
        precioConIva: calcularPrecioConIva(producto) * cantidad
    };

    return resultadoLineaTicket

}



// TODO: documentación 
export const calcularTotalPorTipoIva = (
    lineasTicket: LineaTicket[]
): TotalPorTipoIva[] => {

    if (!lineasTicket || lineasTicket.length === 0) {
        throw new Error("Los parámetros introducidos no son correctos");
    }

    const totalPorTipoIva = lineasTicket.reduce(
        (acumulador, linea) => {
           
            let existeTipo = acumulador.find(
                (producto) => producto.tipoIva === linea.producto.tipoIva
            );

            if (existeTipo) {
                existeTipo.cuantia += linea.cantidad;
            } else {
                acumulador.push({
                    tipoIva: linea.producto.tipoIva,
                    cuantia: linea.cantidad
                });
            }

            return acumulador;
        },
        [] as TotalPorTipoIva[]
    );

    return totalPorTipoIva;
};


// TODO: documentación 
export const calculaResultadoTotalTicket = (lineasTicket: LineaTicket[]): ResultadoTotalTicket => {
    if (!lineasTicket || lineasTicket.length === 0) {
        throw new Error("Los parámetros introducidos no son correctos");
    }

    const resultadoTotalTicket = lineasTicket.reduce(
        (acumulador, linea) => {
            const { precionSinIva, precioConIva } = calculaLineaTicket(linea.producto, linea.cantidad);

            acumulador.totalSinIva += precionSinIva;
            acumulador.totalConIva += precioConIva;
            acumulador.totalIva += (precioConIva - precionSinIva);

            return acumulador;
        },
        { totalSinIva: 0, totalConIva: 0, totalIva: 0 } as ResultadoTotalTicket
    );

    return {
        totalSinIva: parseFloat(resultadoTotalTicket.totalSinIva.toFixed(2)),
        totalConIva: parseFloat(resultadoTotalTicket.totalConIva.toFixed(2)),
        totalIva: parseFloat(resultadoTotalTicket.totalIva.toFixed(2)),
    };
};









