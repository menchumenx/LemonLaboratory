
export const calcularNotaFinalPesos = (
    notasMedias : number[],
    peso: number[]
): number => {

    const notaFinal = notasMedias.reduce((acc, notaMedia, index) => acc + notaMedia * peso[index], 0)

    return Number(notaFinal.toFixed(2))
}