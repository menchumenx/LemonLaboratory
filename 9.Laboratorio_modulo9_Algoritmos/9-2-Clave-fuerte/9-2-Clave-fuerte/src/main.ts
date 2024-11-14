
// import { validarClave } from './validar-clave';

// console.log(validarClave());

import {
  tieneCaracteresEspeciales
} from './validar-clave/validar-clave.helpers';

const clave: string = 'asd456Mll!';

// console.log(tieneMayusculasYMinusculas(clave));
console.log(tieneCaracteresEspeciales(clave));
