# MEMORY APP

## EJECUTA EL PROYECTO
- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a jugar! 

---

## INTRODUCCIÓN
Queremos implementar el clásico juego de las parejas ¿En que consiste esto?

- Mostramos al usuario 12 cartas boca abajo.
- El usuario pincha en una carta y se ve el contenido de la misma (por ejemplo un gatito).
- El usuario pincha en otra carta y se ve el contenido de la misma
    ->  Si por ejemplo es un perrito, ambas cartas se ocultan y vuelta a empezar.
    ->  Si es un gatito (y la carta origen era el mismo gatito), se quedan las dos cartas bocarriba y el usuario vuelve a jugar.
- Esto así hasta que el usuario encuentre todas las parejas.

---

## PRUEBAS CONCEPTO

### Pruebas concepto 1 -> **Baraja las cartas**
Se crea una funcion que nos ayuda a barajar los elementos que vamos a mostrar. Para ello se usa el ***algoritmo de Fisher-Yates*** (también conocido como algoritmo de mezcla aleatoria o shuffle), ya que este algoritmo es eficiente y garantiza una mezcla aleatoria del array.

> **Parámetros**
    Entrada -> cardsArray : string[]
    Salida -> string[]

```typescript
export const shuffleCardsArray = (cardsArray : string[]
    ): string[] => {

        const shuffledArray = [...cardsArray]; // copiamos el array original, para evitar modificarlo.

        for(let i = shuffledArray.length - 1; i > 0; i--){
            const aleatoryCard = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[aleatoryCard]] = [shuffledArray[aleatoryCard], shuffledArray[i]];
        }
        
        return shuffledArray;
    }
```


