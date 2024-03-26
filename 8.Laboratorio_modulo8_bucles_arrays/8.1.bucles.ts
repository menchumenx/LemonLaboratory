

import { Especialidad, Pacientes, NumeroPacientesPorEspecialidad} from './interface'


// APARTADO 1 **************************
// a)  Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
export const obtenPacientesAsignadosAPediatria =
    (pacientes: Pacientes[]): Pacientes[] => {

        let pediatria: Pacientes[] = [];

        for (let i = 0; i < pacientes.length; i++) {
            if (pacientes[i].especialidad === 'Pediatra') {
                pediatria.push(pacientes[i])
            }
        }
        
        return pediatria;
    };

export const obtenPacientesAsignadosAPediatriaWhile = (pacientes: Pacientes[]): Pacientes[] => {
    let pediatria: Pacientes[] = [];
    let i = 0;

    while (i < pacientes.length) {
        pacientes[i].especialidad === 'Pediatra' && pediatria.push(pacientes[i]);
        i++;
    }

    return pediatria;
};


// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]): Pacientes[] => {

    let pediatriaMenos10: Pacientes[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === 'Pediatra' && pacientes[i].edad < 10) {
            pediatriaMenos10.push(pacientes[i])
        }
    }
    return pediatriaMenos10;
};



// APARTADO 2 **************************
// Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados. -> Es decir, crear una función que devuelve true/false dependiendo si se da la condición
export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;

    for (let paciente of pacientes) {
        if (paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39) {
            activarProctolo = true
        }
    }
    return activarProctolo;
};

export const activarProtocoloUrgenciaWhile = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;

    let i = 0;
    while (i < pacientes.length && pacientes[i].frecuenciaCardiaca > 100
        && pacientes[i].temperatura > 39
        && activarProctolo != true) {
        activarProctolo = true
        i++
    }
    return activarProctolo;
};



//? APARTADO 3 **************************
// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
export const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]): Pacientes[] => {
    let reasignadosAMedicinaFamiliar: Pacientes[] = [];

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === 'Pediatra') {
            pacientes[i].especialidad = 'Medico de familia';
            reasignadosAMedicinaFamiliar.push(pacientes[i])
        }
    }
    return reasignadosAMedicinaFamiliar
};



//? APARTADO 4 **************************
// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría
export const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let hasAnyPatient: boolean = false;
    let i = 0;
    while (i < pacientes.length && pacientes[i].especialidad !== 'Pediatra') {
        i++;
    }
    console.log(i);
    console.log(pacientes.length);
    
    hasAnyPatient = i >= pacientes.length;
    
     // Si i es menor que la longitud, significa que encontramos un paciente de pediatría
    return hasAnyPatient;
};



//? APARTADO 5 -> OPCIONAL **************************
// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología


export const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
    
    let pacientesPorEspecialidad : NumeroPacientesPorEspecialidad = { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0,};

    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad === 'Cardiólogo'){
            pacientesPorEspecialidad.cardiologia ++
        }
        if(pacientes[i].especialidad === 'Pediatra'){
           pacientesPorEspecialidad.pediatria ++
        } 
        if(pacientes[i].especialidad === 'Medico de familia'){
             pacientesPorEspecialidad.medicoDeFamilia += 1
        }
    }

    return pacientesPorEspecialidad;
};

