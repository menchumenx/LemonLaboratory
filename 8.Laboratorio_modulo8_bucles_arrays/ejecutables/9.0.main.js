"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = __importDefault(require("colors")); // modulo colors 
var _9_1_1_bucles_1 = require("./9.1.1.bucles");
// * LLAMADAS A LAS FUNCIONES
//? APARTADO 1 **************************
console.log(colors_1.default.bgMagenta('***** APARTADO 1 A -> Pacientes asignados a Pediatria *****'));
console.log(colors_1.default.bgMagenta('*********************************************************'));
console.log(colors_1.default.blue('-> con bucle For'));
console.log((0, _9_1_1_bucles_1.obtenPacientesAsignadosAPediatria)(_9_1_1_bucles_1.pacientes));
console.log(colors_1.default.blue('-> con bucle while'));
console.log((0, _9_1_1_bucles_1.obtenPacientesAsignadosAPediatriaWhile)(_9_1_1_bucles_1.pacientes));
console.log(colors_1.default.bgMagenta('***** APARTADO 1 B -> Pacientes asignados a Pediatria y menores de 10 años *****'));
console.log(colors_1.default.bgMagenta('*********************************************************'));
console.log((0, _9_1_1_bucles_1.obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios)(_9_1_1_bucles_1.pacientes));
//? APARTADO 2 **************************
console.log(colors_1.default.bgMagenta('***** APARTADO 2 -> Activar protocoloo de emergencia *****'));
console.log(colors_1.default.bgMagenta('*********************************************************'));
console.log(colors_1.default.blue('-> con bucle For OF'));
console.log((0, _9_1_1_bucles_1.activarProtocoloUrgencia)(_9_1_1_bucles_1.pacientes));
console.log(colors_1.default.blue('-> con bucle while'));
console.log((0, _9_1_1_bucles_1.activarProtocoloUrgenciaWhile)(_9_1_1_bucles_1.pacientes));
//? APARTADO 3 **************************
console.log(colors_1.default.bgMagenta('***** APARTADO 3 -> Reasignar pacientes de pediatria *****'));
console.log(colors_1.default.bgMagenta('*********************************************************'));
console.log((0, _9_1_1_bucles_1.reasignaPacientesAMedicoFamilia)(_9_1_1_bucles_1.pacientes));
//? APARTADO 4 **************************
console.log(colors_1.default.bgMagenta('***** APARTADO 4 -> Pedríatria sin Pacientes = true? *****'));
console.log(colors_1.default.bgMagenta('*********************************************************'));
console.log((0, _9_1_1_bucles_1.hayPacientesDePediatria)(_9_1_1_bucles_1.pacientes));
//? APARTADO 5 -> OPCIONAL **************************
console.log(colors_1.default.bgMagenta('***** APARTADO 5 OPCIONAL -> Numero total de pacientes por especialidad *****'));
console.log(colors_1.default.bgMagenta('*********************************************************'));
console.log((0, _9_1_1_bucles_1.cuentaPacientesPorEspecialidad)(_9_1_1_bucles_1.pacientes));
