

import { validarClave } from './validar-clave/validar-clave';
import { commonPasswords } from './validar-clave';

const clave: string = 'as12ll!auk';
const nombreUsuario: string = 'LauraLP';

console.log(validarClave(nombreUsuario, clave, commonPasswords));


