

// ? **********************************
// ? CASO 1
// ? **********************************
 export interface FichaAlumno {
  alumno: string;
  notas: number[]
}

export interface Notas {
  nombre_alumno: string;
  nota_media: number
}


export const caluclarNotaMediaAlumnos = (
  fichaAlumnos : FichaAlumno[]
) : Notas[] => {
  
  const notasMediasAlumnos : Notas[] = fichaAlumnos.map((alumno) => {
    const result : Notas = {
      nombre_alumno : alumno.alumno,
      nota_media : calculaNotaMedia(alumno.notas)
    }
    return result
    }
  )
  return notasMediasAlumnos;
}

export const calculaNotaMedia = (
  notas: number[]
) :number => {

  const notaMedia = notas.length > 0 ? notas.reduce((acumulator, notaActual) => acumulator + notaActual, 0) / notas.length : 0;

  return Number(notaMedia.toFixed(2));
}


// ? **********************************
// ? CASO 2 
// ? **********************************
export interface FichaFinalAlumno  {
  alumno: string,
  notasPracticas: number[],
  notasExamenes: number[]
}
export interface CalificacionesAlumno {
  alumno: string,
  notaFinal: number
}

// implementacion
export const calcularCalificacionFinalAlumnos = ( 
  fichaAlumno : FichaFinalAlumno []
): CalificacionesAlumno[] => {

  const calificacioneFinales: CalificacionesAlumno[] = fichaAlumno.map((fichaAlumno) => {
    
    const mediaPraticas: number = calculaNotaMedia(fichaAlumno.notasPracticas);
    const mediaExamenes: number = calculaNotaMedia(fichaAlumno.notasExamenes)
    const notaFinal = calcularNotaFinal(mediaPraticas, mediaExamenes);

    const calificacionesFinalesPorAlumno: CalificacionesAlumno = {
      alumno: fichaAlumno.alumno,
      notaFinal
    }
    
    return calificacionesFinalesPorAlumno;
  })

  return calificacioneFinales;
}

// * a tener en cuenta:
// - Para calcular la nota final, multiplicamos la nota media de los ejecicios prácticos por 0.6, ya que cosntituye un 60% de la nota y la nota media de los exmanes por un 0.4 (40%) y despues sumamos las cantidades.
export const calcularNotaFinal = (
  notaMediaPracticas: number,
  notaMediaExamenes: number
): number => {
  const notaFinal = (notaMediaPracticas * 0.60) + (notaMediaExamenes * 0.40);
  return Number(notaFinal.toFixed(2));

}