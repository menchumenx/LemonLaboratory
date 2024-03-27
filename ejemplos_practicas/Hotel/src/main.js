import "./style.css"; // importación de estilos
import {reservas} from'./interface'; // importación de interface


// ? RESERVAS FALLIDAS
// IMPLEMENTACIÓN DE RESERVAS FALLIDAS -> Array Methos
const noReservasFallidas = !reservas.every((reserva) => reserva.completadaConExito)
console.log('Existen reservas fallidas -> ', noReservasFallidas);

// IMPLEMENTACIÓN DE RESERVAS FALLIDAS -> Bucles
let hasReservaFallida = false;
for (let reserva of reservas) {
    if (!reserva.completadaConExito) {
        hasReservaFallida = true
    }
}
console.log('Existen reservas fallidas -> ', hasReservaFallida);

// ¿QUE RESERVAS HAN FALLADO? -> Array Methos
const reservasfallidas = reservas.filter((reserva) => !reserva.completadaConExito)
console.log(reservasfallidas);

// ¿QUE RESERVAS HAN FALLADO? -> Array Methos
let reservas_fallidas = [];
for (let reserva of reservas) {
    if (!reserva.completadaConExito) {
        reservas_fallidas.push(reserva)
    }
}
console.log(reservas_fallidas);



// ? CAMBIO DE HABITACION
// CAMBIAR CLIENTES CON HABITACIÓN STANDARD -> PREMIUM -> Array Methos
const clientesPremium = reservas.map((reserva) => {
    if (reserva.habitacion === 'standard') {
        return {
            ...reserva,
            habitacion : 'premium'
        }
    } else {
        return reserva
    }
})
console.log(clientesPremium);

// CAMBIAR EL PRIMER CLIENTE CON HABITACIÓN STANDARD -> PREMIUM -> Array Methos
let primerClienteCambiado = false; // varaible auxiliar que nos permite verificar si ya se ha cambiado algun cliente.
const clientePremium = reservas.map((reserva) => {
    if (reserva.habitacion === 'standard' && !primerClienteCambiado) {
        primerClienteCambiado = true;
        return {
            ...reserva, // creamos una copia de cada reserva para no mutar el valor inicial.
            habitacion : 'premium'
        }
    } else {
        return reserva
    }
})
console.log(reservas);
console.log(clientePremium);

// CAMBIAR EL PRIMER CLIENTE CON HABITACIÓN STANDARD -> PREMIUM -> bucles -> forma inmutable
let indiceReserva = -1;

for(let i = 0; i < reservas.length; i++){
    if(reservas[i].habitacion === 'standard'){
        indiceReserva = 1;
    }
    break
}

if(indiceReserva !== 1){
    const reservaModificada = {
        ...reservas[indiceReserva],
        habitacion : 'superior'
    }

    const nuevoArrayDereservas = [
        ...reservas.slice(0,indiceReserva),
        reservaModificada,
        ...reservas.slice(indiceReserva + 1)
    ]
    
    console.log(nuevoArrayDereservas);
};



//? DESCUENTO 10% A CLIENTES
// APLICAR EL 10% DE DESCUENTO EN LA RESERVA DE TODOS LOS CLIENTES -> Array Methos
const descuentoClientes = reservas.map(reserva => ({
        ...reserva,
        precio: reserva.precio * 0.9
    }))
console.log(reservas);
console.log(descuentoClientes);


//? SUMA EL PRECIO DE LAS RESERVAS
// SUMAR LA GANACIA TOTAL DE NUESTRO HOTEL -> Array Methos
// La función de reducción toma dos argumentos: el acumulador y el valor actual (en este caso, cada reserva)
// El acumulador se inicializa en 0, lo que significa que comenzaremos con una ganancia total de 0
// La función de reducción se ejecuta para cada elemento del array de reservas
// En cada iteración, suma el precio de la reserva actual al acumulador
// Al finalizar la iteración, el acumulador contendrá la ganancia total del hotel
const ganaciaTotalHotel = reservas.reduce((acumulador, reserva) => acumulador + reserva.precio, 0);
console.log(ganaciaTotalHotel);

// SUMAR EL GASTO POR CLIENTE EN NUESTRO HOTEL -> Array Methos
const gananciaTotalHotelPorCliente = reservas.reduce((acumulador, reserva) => {
    // Obtener el ID del cliente de la reserva actual
    const idCliente = reserva.id;
    // Verificar si ya existe un acumulador para el cliente actual en el objeto acumulador
    if (!acumulador[idCliente]) {
        acumulador[idCliente] = 0; // Si no existe, inicializar el acumulado del cliente en 0
    }
    // Sumar el precio de la reserva actual al acumulado del cliente
    acumulador[idCliente] += reserva.precio;
  
    return acumulador;   // Devolver el objeto acumulador actualizado
}, {}); // El acumulador se inicializa como un objeto vacío {}console.log(ganaciaTotalHotelPorCliente);

console.log(gananciaTotalHotelPorCliente);


//? EXISTE ALGUNA RESERVA SUPERIOR ?
const existenReservasSuuperiores = reservas.some(reserva => 
    reserva.habitacion === 'superior');
console.log(existenReservasSuuperiores);

// HAY ALGUN USUARIO CON MAS DE UNA RESERVA??
// Crear un conjunto de ID de clientes únicos. Al usar un set, si hay algun elemento repetido se omite, ya que los sets no permiten tener elementos repetidos. 1º se cera el map con todos los id y despues el set.
const idClientesUnicos = new Set(reservas.map(reserva => reserva.id));
console.log(idClientesUnicos);
// Verificar si la longitud del conjunto es menor que la longitud del array de reservas
const clienteConMasDeUnareserva = idClientesUnicos.size < reservas.length;
console.log(clienteConMasDeUnareserva);


