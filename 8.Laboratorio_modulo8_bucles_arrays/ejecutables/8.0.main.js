"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = __importDefault(require("colors")); // modulo colors 
var interface_1 = require("./interface");
var _8_2_arrayMethos_1 = require("./8.2.arrayMethos");
// * LLAMADAS A LAS FUNCIONES Laboratorio 8.1 Bucles
//? APARTADO 1 **************************
// console.log(colors.bgMagenta('***** APARTADO 1 A -> Pacientes asignados a Pediatria *****'));
// console.log(colors.bgMagenta('*********************************************************'));
// console.log(colors.blue('-> con bucle For'));
// console.log(obtenPacientesAsignadosAPediatria(pacientes));
// console.log(colors.blue('-> con bucle while'));
// console.log(obtenPacientesAsignadosAPediatriaWhile(pacientes));
// console.log(colors.bgMagenta('***** APARTADO 1 B -> Pacientes asignados a Pediatria y menores de 10 años *****'));
// console.log(colors.bgMagenta('*********************************************************'));
// console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));
//? APARTADO 2 **************************
// console.log(colors.bgMagenta('***** APARTADO 2 -> Activar protocoloo de emergencia *****'));
// console.log(colors.bgMagenta('*********************************************************'));
// console.log(colors.blue('-> con bucle For OF'));
// console.log(activarProtocoloUrgencia(pacientes));
// console.log(colors.blue('-> con bucle while'));
// console.log(activarProtocoloUrgenciaWhile(pacientes));
//? APARTADO 3 **************************
// console.log(colors.bgMagenta('***** APARTADO 3 -> Reasignar pacientes de pediatria *****'));
// console.log(colors.bgMagenta('*********************************************************'));
// console.log(reasignaPacientesAMedicoFamilia(pacientes));
//? APARTADO 4 **************************
// console.log(colors.bgMagenta('***** APARTADO 4 -> Pedríatria sin Pacientes = true? *****'));
// console.log(colors.bgMagenta('*********************************************************'));
// console.log(hayPacientesDePediatria(pacientes));
//? APARTADO 5 -> OPCIONAL **************************
// console.log(colors.bgMagenta('***** APARTADO 5 OPCIONAL -> Numero total de pacientes por especialidad *****'));
// console.log(colors.bgMagenta('*********************************************************'));
// console.log(cuentaPacientesPorEspecialidad(pacientes));
// * LLAMADAS A LAS FUNCIONES Laboratorio 8.2 Bucles
//? APARTADO 1 **************************
// console.log(colors.bgGreen('***** APARTADO 1 A -> Pediatria  *****'));
// console.log(colors.bgGreen('*********************************************************'));
// console.log(obtenPacientesAsignadosAPediatriaArrays(pacientes));
// console.log(colors.bgGreen('***** APARTADO 1 B -> Pacientes asignados a Pediatria y menores de 10 años *****'));
// console.log(colors.bgGreen('*********************************************************'));
// console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAniosArrays(pacientes));
//? APARTADO 2 **************************
// console.log(colors.bgGreen('***** PARTADO 2 -> Activar protocolo de emergencia *****'));
// console.log(colors.bgGreen('*********************************************************'));
// console.log(activarProtocoloUrgenciaArrays(pacientes));
//? APARTADO 3 **************************
// console.log(colors.bgGreen('***** APARTADO 3 -> Reasignar pacientes de pediatria *****'));
// console.log(colors.bgGreen('*********************************************************'));
// console.log(reasignaPacientesAMedicoFamiliaArrays(pacientes));
//? APARTADO 4 **************************
// console.log(colors.bgGreen('***** APARTADO 4 -> Pedríatria sin Pacientes = true? *****'));
// console.log(colors.bgGreen('*********************************************************'));
// console.log(hayPacientesDePediatriaArrays(pacientes));
//? APARTADO 5 -> OPCIONAL **************************
console.log(colors_1.default.bgGreen('***** APARTADO 5 OPCIONAL -> Numero total de pacientes por especialidad *****'));
console.log(colors_1.default.bgGreen('*********************************************************'));
console.log((0, _8_2_arrayMethos_1.cuentaPacientesPorEspecialidadArrays)(interface_1.pacientes));
