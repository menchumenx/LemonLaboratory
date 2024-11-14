
import { LineaTicket, TicketFinal } from "./models";
import { 
    calculaLineaTicket, 
    calculaResultadoTotalTicket, 
    calcularTotalPorTipoIva 
} from "./ticketCompra.helpers";


/**
 * Calcula el ticket final a partir de una lista de líneas de ticket.
 *
 * Esta función toma un array de objetos `LineaTicket`, que representan productos con cantidades específicas,
 * y calcula el ticket completo. Para cada línea, calcula el total con y sin IVA, y genera un desglose del IVA.
 *
 * @param {LineaTicket[]} lineasTicket - Array de objetos `LineaTicket` que contiene cada producto y su cantidad.
 * @returns {TicketFinal} - Objeto `TicketFinal` que contiene el detalle de cada línea del ticket,
 *                          el total con y sin IVA, y un desglose por tipo de IVA.
 */

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
    const ticketFinal = lineasTicket.reduce(
        (accumulador, linea) => {
       
            const resultadoLinea = calculaLineaTicket(linea.producto, linea.cantidad);
            accumulador.lineas.push(resultadoLinea);

            accumulador.total = calculaResultadoTotalTicket(lineasTicket);
            accumulador.desgloseIva = calcularTotalPorTipoIva(lineasTicket);

            return accumulador;
        },
        { lineas: [], total: { totalSinIva: 0, totalConIva: 0, totalIva: 0 }, desgloseIva: [] } as TicketFinal
    );

    return ticketFinal;
};
