
import { describe, it, expect } from 'vitest';
import { calculaNotaMedia,
         FichaAlumno,
         Notas,
         caluclarNotaMediaAlumnos,
         calcularNotaFinal,
         FichaFinalAlumno,
         calcularCalificacionFinalAlumnos,
         CalificacionesAlumno
 } from './main';

 
// ? **********************************
// ? TEST CASO 1
// ? **********************************
describe('calcularNotaMedia', () => {
    it("debería devolver la nota media de un alumno", () => {
        // Arrange 
        const notas: number[] = [6,7,8];

        // Act
        const result = calculaNotaMedia(notas);

        // Assert
        const nota_media = 7;

        expect(result).toEqual(nota_media);
    })

    it("debería devolver la nota media de un alumno", () => {
        // Arrange 
        const notas: number[] = [7,8,9];

        // Act
        const result = calculaNotaMedia(notas);

        // Assert
        const nota_media = 8;

        expect(result).toEqual(nota_media);
    })

    it("debería devolver la nota media de un alumno", () => {
        // Arrange 
        const notas: number[] = [3,2,6];

        // Act
        const result = calculaNotaMedia(notas);

        // Assert
        const nota_media = 3.67;

        expect(result).toEqual(nota_media);
    })

    // Si el array esta vacío
    it("debería devolver 0 si el array de notas está vacío", () => {
        // Arrange 
        const notas: number[] = [];

        // Act
        const result = calculaNotaMedia(notas);

        // Assert
        const nota_media = 0;

        expect(result).toEqual(nota_media);
    });
})


describe('CalcularNotaMediaDelAlumnos', () => {
    it("debería devolver la nota media de todos los alumnos", () => {
        // Arrange 
        const fichaAlumnos: FichaAlumno[] = [
            {
                alumno: 'Juan de Dios',
                notas: [6,7,8]
            },
            {
                alumno: 'Laura Martin',
                notas: [7,8,9]
            },
            {
                alumno: 'Pepe Martin',
                notas: [6,3,2]
            }
        ]

        // Act
        const result: Notas[] = caluclarNotaMediaAlumnos(fichaAlumnos)

        // Assert
        const notasMedias: Notas[] = [
            {
                nombre_alumno: 'Juan de Dios',
                nota_media: 7
            },
            {
                nombre_alumno: 'Laura Martin',
                nota_media: 8
            },
            {
                nombre_alumno: 'Pepe Martin',
                nota_media: 3.67
            }
        ]

        expect(result).toEqual(notasMedias);


    })
})


// ? **********************************
// ? TEST CASO 2 
// ? **********************************
describe("calcularNotaFinal", () => {
    it("debería devolver al nota final de un alumno", () => {
        // Arrange
        const notaMediaPracticas = 8;
        const notaMediaExamenes = 7;

        // Act
        const result = calcularNotaFinal(notaMediaPracticas, notaMediaExamenes);

        // Assert
        const notaFinal = 7.6;
        expect(result).toEqual(notaFinal);
    })

    it("debería devolver al nota final de un alumno", () => {
        // Arrange
        const notaMediaPracticas = 6;
        const notaMediaExamenes = 7;

        // Act
        const result = calcularNotaFinal(notaMediaPracticas, notaMediaExamenes);

        // Assert
        const notaFinal = 6.4;
        expect(result).toEqual(notaFinal);
    })

    it("debería devolver al nota final de un alumno", () => {
        // Arrange
        const notaMediaPracticas = 3;
        const notaMediaExamenes = 2;

        // Act
        const result = calcularNotaFinal(notaMediaPracticas, notaMediaExamenes);

        // Assert
        const notaFinal = 2.6;
        expect(result).toEqual(notaFinal);
    })
})


describe("calcularCalificacionFinalAlumnos", () => {
    it('debería devolver la nota final de todos los aumnos', () => {
        // Arrange
        const fichaFinalAlumnos : FichaFinalAlumno[] = [
            {
                alumno: 'Paco Leon',
                notasPracticas: [3, 0],
                notasExamenes: [6,7,8]            
            },
            {
                alumno: 'Adrian Generoso',
                notasPracticas: [7, 8],
                notasExamenes: [7,8,9]
            }
        ]

        // Act
        const result = calcularCalificacionFinalAlumnos(fichaFinalAlumnos);

        // Assert
        const notasFinales: CalificacionesAlumno[] = [
            {
                alumno: 'Paco Leon',
                notaFinal: 3.7
            },
            {
                alumno: 'Adrian Generoso',
                notaFinal: 7.7
            }
        ]

        expect(result).toEqual(notasFinales);

    });
})