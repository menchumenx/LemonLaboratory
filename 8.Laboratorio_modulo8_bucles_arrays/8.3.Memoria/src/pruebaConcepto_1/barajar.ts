

// * BARAJAR CARTAS -> algoritmo de Fisher-Yates (también conocido como algoritmo de mezcla aleatoria o shuffle). Este algoritmo es eficiente y garantiza una mezcla aleatoria del array.
// ? En este código, la función shuffleArray toma un array como entrada y devuelve un nuevo array con los elementos barajados. Utiliza un bucle que itera desde el final del array hasta el primer elemento. En cada iteración, elige un índice aleatorio entre 0 y el índice actual y realiza un intercambio de elementos entre el ítem actual y el ítem seleccionado aleatoriamente. Finalmente, devuelve el nuevo array barajado.

import { InfoCard } from "../pruebsConcepto_2y3/models";

export const shuffleCardsArray = (cardsArray : InfoCard[]
    ): InfoCard[] => {

        const shuffledArray = [...cardsArray]; // copiamos el array original, para evitar modificarlo.

        for(let i = shuffledArray.length - 1; i > 0; i--){
            const aleatoryCard = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[aleatoryCard]] = [shuffledArray[aleatoryCard], shuffledArray[i]];
        }
        
        return shuffledArray;
    }

// ---> Explicación del código :
// for (let i = shuffledArray.length - 1; i > 0; i--) {: Este bucle for itera sobre el array shuffledArray en orden inverso, comenzando desde el último emoji hasta el segundo. No necesitamos intercambiar el primer emoji con ningún otro, ya que no hay ningún otro emoji que pueda intercambiarse.

//     const j = Math.floor(Math.random() * (i + 1));: En cada iteración, generamos un número aleatorio j que representa la posición de otro emoji en el array. Utilizamos Math.random() para generar un número decimal pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo). Luego, multiplicamos este número por (i + 1) para asegurarnos de que j esté dentro del rango correcto de posiciones de emojis en el array. Finalmente, redondeamos hacia abajo con Math.floor() para obtener un número entero.
    
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];: Aquí intercambiamos los emojis en las posiciones i y j del array shuffledArray. Utilizamos la asignación de desestructuración en JavaScript para realizar este intercambio. Esencialmente, creamos un nuevo array con los emojis en las posiciones i y j intercambiados, y luego lo asignamos de vuelta al array original shuffledArray, lo que efectivamente intercambia los emojis en esas dos posiciones.


// verifica si los Id del objetos InfoCard es igual 
export const sameImage = (
    idImage1:number, idImage2:number
    ): boolean => (idImage1 === idImage2) 
