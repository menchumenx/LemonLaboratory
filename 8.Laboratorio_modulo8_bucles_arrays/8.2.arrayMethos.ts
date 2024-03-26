import { Especialidad, Pacientes, NumeroPacientesPorEspecialidad } from './interface'


//? APARTADO 1 **************************
// a)  Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
export const obtenPacientesAsignadosAPediatriaArrays = (
    pacientes: Pacientes[]
): Pacientes[] => {
    return pacientes.filter(paciente => paciente.especialidad === 'Pediatra')
};

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAniosArrays = (
    pacientes: Pacientes[]
): Pacientes[] => {
    return pacientes.filter(paciente => paciente.especialidad === 'Pediatra' && paciente.edad < 10);
};


//? APARTADO 2 **************************
// Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados. -> Es decir, crear una función que devuelve true/false dependiendo si se da la condición
export const activarProtocoloUrgenciaArrays = (pacientes: Pacientes[]): boolean => {
    return pacientes.some(paciente => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39)
};


//? APARTADO 3 **************************
// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
export const reasignaPacientesAMedicoFamiliaArrays = (
    pacientes: Pacientes[]
): Pacientes[] => {
    const pacientesCopia = [...pacientes];
    let pacientesPediatria = pacientes.filter(paciente =>
        paciente.especialidad === 'Pediatra');

    pacientesPediatria.forEach((paciente) => {
        paciente.especialidad = 'Medico de familia';
        pacientes.push(paciente);
    })

    return pacientes
};


//? APARTADO 4 **************************
// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría
export const hayPacientesDePediatriaArrays = (pacientes: Pacientes[]): boolean => {
    return !pacientes.some(pacientes => pacientes.especialidad === 'Pediatra')
};


//? APARTADO 5 -> OPCIONAL **************************
// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
export const cuentaPacientesPorEspecialidadArrays = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    return pacientes.reduce((acumulador, paciente) => {
        if (paciente.especialidad === 'Medico de familia') {
            acumulador.medicoDeFamilia++;
        } else if (paciente.especialidad === 'Pediatra') {
            acumulador.pediatria++;
        } else if (paciente.especialidad === 'Cardiólogo') {
            acumulador.cardiologia++;
        }
        return acumulador;
    }, { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 });
};
