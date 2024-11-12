
import { LineaTicket, TicketFinal } from "./models";
import { 
    calculaLineaTicket, 
    calculaResultadoTotalTicket, 
    calcularTotalPorTipoIva 
} from "./ticketCompra.helpers";

// TODO: documentación 
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
