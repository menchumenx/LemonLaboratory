import { cardsCollection } from "./data";
import { createInitialBoard } from "./model";
import { shuffleCards } from "./motor";
import { createGridCard } from "./ui";



document.addEventListener('DOMContentLoaded', () => {
    const cardsMainContainer = document.getElementById('main-cards-container') as HTMLDivElement;
    if (cardsMainContainer) {
        const initialBoard = createInitialBoard(cardsCollection); //creamos tablero
        shuffleCards(cardsCollection); //barajamos
        console.log(initialBoard);

        // creamos el grid
        createGridCard(cardsCollection, cardsMainContainer.id)
        
    }
});
