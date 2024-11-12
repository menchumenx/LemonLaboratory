
export type TipoIva =
    | "general"
    | "reducido"
    | "superreducidoA"
    | "superreducidoB"
    | "superreducidoC"
    | "sinIva";

export interface Producto {
    nombre: string;
    precio: number;
    tipoIva: TipoIva;
}

export interface LineaTicket {
    producto: Producto;
    cantidad: number;
}

export interface ResultadoLineaTicket {
    nombre: string;
    cantidad: number;
    precionSinIva: number;
    tipoIva: TipoIva;
    precioConIva: number;
}

export interface ResultadoTotalTicket {
    totalSinIva: number;
    totalConIva: number;
    totalIva: number;
}

export interface TotalPorTipoIva {
    tipoIva: TipoIva;
    cuantia: number;
}

export interface TicketFinal {
    lineas: ResultadoLineaTicket[];
    total: ResultadoTotalTicket;
    desgloseIva: TotalPorTipoIva[];
}


export const productos: LineaTicket[] = [
    {
        producto: {
            nombre: "Legumbres",
            precio: 2,
            tipoIva: "general",
        },
        cantidad: 2,
    },
    {
        producto: {
            nombre: "Perfume",
            precio: 20,
            tipoIva: "general",
        },
        cantidad: 3,
    },
    {
        producto: {
            nombre: "Leche",
            precio: 1,
            tipoIva: "superreducidoC",
        },
        cantidad: 6,
    },
    {
        producto: {
            nombre: "Lasaña",
            precio: 5,
            tipoIva: "superreducidoA",
        },
        cantidad: 1,
    },
];