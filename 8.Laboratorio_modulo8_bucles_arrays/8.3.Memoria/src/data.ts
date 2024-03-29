
import { InfoCard, createCardCollection, createInitialBoard } from "./model"


export const animalList : InfoCard[] = [
    {
        id: 0,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true'
    },
    {
        id: 1,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true'
    },
    {
        id: 2,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/3.png?raw=true'
    },
    {
        id: 4,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/4.png?raw=true'
    },
    {
        id: 5,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/5.png?raw=true',
    },
    {
        id: 6,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/6.png?raw=true',
    },
    {
        id: 0,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true'
    },
    {
        id: 1,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true'
    },
    {
        id: 2,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/3.png?raw=true'
    },
    {
        id: 4,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/4.png?raw=true'
    },
    {
        id: 5,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/5.png?raw=true',
    },
    {
        id: 6,
        image: 'https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/6.png?raw=true',
    }
]

// creacion de coleccion de cartas y tablero
export let cardsCollection = createCardCollection(animalList);
export let initialBoard = createInitialBoard(cardsCollection);