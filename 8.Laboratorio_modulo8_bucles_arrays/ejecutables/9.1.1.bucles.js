"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentaPacientesPorEspecialidad = exports.hayPacientesDePediatria = exports.reasignaPacientesAMedicoFamilia = exports.activarProtocoloUrgenciaWhile = exports.activarProtocoloUrgencia = exports.obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = exports.obtenPacientesAsignadosAPediatriaWhile = exports.obtenPacientesAsignadosAPediatria = exports.pacientes = void 0;
exports.pacientes = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Cardiólogo",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Cardiólogo",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];
// APARTADO 1 **************************
// a)  Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
var obtenPacientesAsignadosAPediatria = function (pacientes) {
    var pediatria = [];
    for (var i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === 'Pediatra') {
            pediatria.push(pacientes[i]);
        }
    }
    return pediatria;
};
exports.obtenPacientesAsignadosAPediatria = obtenPacientesAsignadosAPediatria;
var obtenPacientesAsignadosAPediatriaWhile = function (pacientes) {
    var pediatria = [];
    var i = 0;
    while (i < pacientes.length) {
        pacientes[i].especialidad === 'Pediatra' && pediatria.push(pacientes[i]);
        i++;
    }
    return pediatria;
};
exports.obtenPacientesAsignadosAPediatriaWhile = obtenPacientesAsignadosAPediatriaWhile;
//   b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
var obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = function (pacientes) {
    var pediatriaMenos10 = [];
    for (var i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === 'Pediatra' && pacientes[i].edad < 10) {
            pediatriaMenos10.push(pacientes[i]);
        }
    }
    return pediatriaMenos10;
};
exports.obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios;
// APARTADO 2 **************************
// Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados. -> Es decir, crear una función que devuelve true/false dependiendo si se da la condición
var activarProtocoloUrgencia = function (pacientes) {
    var activarProctolo = false;
    for (var _i = 0, pacientes_1 = pacientes; _i < pacientes_1.length; _i++) {
        var paciente = pacientes_1[_i];
        if (paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39) {
            activarProctolo = true;
        }
    }
    return activarProctolo;
};
exports.activarProtocoloUrgencia = activarProtocoloUrgencia;
var activarProtocoloUrgenciaWhile = function (pacientes) {
    var activarProctolo = false;
    var i = 0;
    while (i < pacientes.length && pacientes[i].frecuenciaCardiaca > 100
        && pacientes[i].temperatura > 39
        && activarProctolo != true) {
        activarProctolo = true;
        i++;
    }
    return activarProctolo;
};
exports.activarProtocoloUrgenciaWhile = activarProtocoloUrgenciaWhile;
//? APARTADO 3 **************************
// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
var reasignaPacientesAMedicoFamilia = function (pacientes) {
    var reasignadosAMedicinaFamiliar = [];
    for (var i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === 'Pediatra') {
            pacientes[i].especialidad = 'Medico de familia';
            reasignadosAMedicinaFamiliar.push(pacientes[i]);
        }
    }
    return reasignadosAMedicinaFamiliar;
};
exports.reasignaPacientesAMedicoFamilia = reasignaPacientesAMedicoFamilia;
//? APARTADO 4 **************************
// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría
var hayPacientesDePediatria = function (pacientes) {
    var hasAnyPatient = false;
    var i = 0;
    while (i < pacientes.length && pacientes[i].especialidad !== 'Pediatra') {
        i++;
    }
    console.log(i);
    console.log(pacientes.length);
    hasAnyPatient = i >= pacientes.length;
    // Si i es menor que la longitud, significa que encontramos un paciente de pediatría
    return hasAnyPatient;
};
exports.hayPacientesDePediatria = hayPacientesDePediatria;
var cuentaPacientesPorEspecialidad = function (pacientes) {
    var pacientesPorEspecialidad = { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0, };
    for (var i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === 'Cardiólogo') {
            pacientesPorEspecialidad.cardiologia++;
        }
        if (pacientes[i].especialidad === 'Pediatra') {
            pacientesPorEspecialidad.pediatria++;
        }
        if (pacientes[i].especialidad === 'Medico de familia') {
            pacientesPorEspecialidad.medicoDeFamilia += 1;
        }
    }
    return pacientesPorEspecialidad;
};
exports.cuentaPacientesPorEspecialidad = cuentaPacientesPorEspecialidad;
// * LLAMADAS A LAS FUNCIONES
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
