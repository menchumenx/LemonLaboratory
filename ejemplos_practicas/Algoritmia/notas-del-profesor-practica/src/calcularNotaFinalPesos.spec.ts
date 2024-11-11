import { describe, it, expect } from 'vitest';
import { calcularNotaFinalPesos } from './calcularNotaFinalPesos';


describe('calcularNotaFinalPesos', () => {
    it('debería devolver la nota final se un alumno segun el peso de cada nota', ()=> {
        // Arrange
        const mediaNotasFinales: number[] = [8,7];
        const peso: number[] = [0.6, 0.4];
        
        // Act
        const result = calcularNotaFinalPesos(mediaNotasFinales, peso);

        // Assert
        const notaFinal = 7.6;

        expect(result).toEqual(notaFinal);
    })

    it('debería devolver la nota final se un alumno segun el peso de cada nota', ()=> {
        // Arrange
        const mediaNotasFinales: number[] = [3,2];
        const peso: number[] = [0.6, 0.4];
        
        // Act
        const result = calcularNotaFinalPesos(mediaNotasFinales, peso);

        // Assert
        const notaFinal = 2.6;

        expect(result).toEqual(notaFinal);
    })
})