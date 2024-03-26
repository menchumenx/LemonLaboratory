export type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

export interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

export interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

export const pacientes: Pacientes[] = [
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
      especialidad: "Pediatra",
      edad: 8,
    },
    {
      id: 4,
      nombre: "Mary",
      apellidos: "Wien",
      sexo: "Female",
      temperatura: 36.8,
      frecuenciaCardiaca: 120,
      especialidad: "Medico de familia",
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