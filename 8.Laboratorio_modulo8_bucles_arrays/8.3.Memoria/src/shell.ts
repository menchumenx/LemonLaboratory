
import { initializeOrRestartGame, titleAnimation } from "./ui";


document.addEventListener('DOMContentLoaded', () => {
    titleAnimation(); // animación del título
    const mainContainer = document.getElementById('initial-button') as HTMLDivElement    
    if(mainContainer) {
        initializeOrRestartGame() // ceación de tableto de juego
    } 
});
