import axios from "axios";
import { Character, urlApiCharacters } from "./caracter.model";

// Endpoint que trae todos los personajes del API
export const getAllCharacters = async(): Promise<Character[]> => {

    try{
        const {data} = await axios.get(urlApiCharacters);
        return data;
    } catch(error) {
        throw new Error("Error al obtener el listado de personajes");
    };

};


// Endpoint que trae un solo personaje basando la busqueda en su nombre
export const getCharacterByName = async(characterName: string): Promise<Character> => {

    try{
        const {data} = await axios.get(`${urlApiCharacters}?nombre_like=${characterName}`);
        return data[0]
    } catch(error){
        throw new Error(`Error al obtener el personaje ${characterName}`);
    };
    
};