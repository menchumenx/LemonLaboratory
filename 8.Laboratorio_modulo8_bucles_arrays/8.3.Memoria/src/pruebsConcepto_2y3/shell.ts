import { animalList } from "../pruebsConcepto_2y3/data";

import { shuffleCardsArray } from "../pruebaConcepto_1/barajar";
import { printAnimalList} from "../pruebsConcepto_2y3/ui";

// Cartas barajadas
// const shuffledCards =  shuffleCardsArray(animalEmojis);
// console.log(shuffledCards);

// const cardContainer = document.getElementById('card-container');
// if(cardContainer){
//     cardContainer.addEventListener('click', () => showAnimal('https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/share/1f986.jpg', cardContainer))
// }
const shuffleAnimalList = shuffleCardsArray(animalList)

document.addEventListener('DOMContentLoaded', () => {
    const cardsMainContainer = document.getElementById('main-cards-container') as HTMLDivElement;
    if (cardsMainContainer) {
        printAnimalList(shuffleAnimalList, cardsMainContainer);
    }
});


