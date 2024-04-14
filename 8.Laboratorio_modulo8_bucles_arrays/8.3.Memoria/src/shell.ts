
import { startGameButton } from "./ui";


document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('initial-button') as HTMLDivElement    
    if(mainContainer) {
        startGameButton(mainContainer)
    } 
});
