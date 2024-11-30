
export interface Character {
    id: string;
    nombre: string;
    apodo: string;
    especialidad: string;
    habilidades: string[];
    amigo: string;
    imagen: string;
}


export const urlApiCharacters: string = "http://localhost:3000/personajes";