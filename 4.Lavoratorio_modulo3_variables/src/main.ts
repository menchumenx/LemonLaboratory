
import "./style.css";

console.log("Hello Typescript!");

// declaración de interface
interface MusicGroup {
    groupName : string,
    realiseYear: number,
    isActive: boolean,
    musicalGenre: string
}

// declaracion de variables para géreros musicales
const popRock = '🎵 Pop Rock';
const rock = '🎸 Rock';
const hardRock = '🤘 Hard Rock';
const clasica = '🎼 Clásica';


// declaración de objetos MusicGroup
const group1 : MusicGroup = {
    groupName : 'The Beatles', 
    realiseYear : 1960,
    isActive : true,
    musicalGenre: popRock
};
const group2 : MusicGroup = {
    groupName : 'Queen', 
    realiseYear : 1970,
    isActive : false,
    musicalGenre: rock
};
const group3 : MusicGroup = {
    groupName : 'AC DC', 
    realiseYear : 1973,
    isActive : true,
    musicalGenre: hardRock
};
const group4 : MusicGroup = {
    groupName : 'Ludwig van Beethoven', 
    realiseYear : 1770,
    isActive : false,
    musicalGenre: clasica
};
const group5 : MusicGroup = {
    groupName : 'The Rolling Stones ', 
    realiseYear : 1962,
    isActive : true,
    musicalGenre: rock
};


// función que imprime los grupos musicales 
function printGroups(musicArrGroups : MusicGroup[]): void{
    
    for(let group of musicArrGroups){

        let printData :string = `\n Año de fundación: ${group.realiseYear} \n ¿Esta en activo? : ${group.isActive} \n Genero musical: ${group.musicalGenre} \n`;

       console.log(`%c${group.groupName}`, 'font-weight: bold; background-color: green; font-size:16px', printData)
         
    } 
}

// definición de parámetro y llamada a la función
let musicalGroups : MusicGroup[] = [group1, group2, group3, group4, group5];
printGroups(musicalGroups)




