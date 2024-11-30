import { Character } from "./character.model";
import { getAllCharacters, getCharacterByName } from "./find-character.api";



// CREAR ELEMENTO IMAGEN
const createImageElement = (
    cover: string,
    title: string
): HTMLImageElement => {
    const image = document.createElement("img");
    if (image) {
        image.src = cover
        image.alt = title;
    } else {
        throw new Error("Error al crear elemento imagen")
    }
    return image;
};


// CREAR ELEMENTO PARRAFO
const createParagraphElement = (
    text: string,
    title?: string,
): HTMLParagraphElement => {
    const paragraph = document.createElement("p");
    if (paragraph) {
        if (title) {
            paragraph.innerHTML = `<span class="highlight">${title}:</span> ${text}`;
        } else {
            paragraph.textContent = text;
        }
    }
    return paragraph;
};


// CREAR CONTENEDOR PARA MOSTRAR INFORMACION DE LOS CADA PERSONAJE
const createCharacterInfoContainer = (character: Character) => {

    const characterInfoContainer = document.createElement("div");

    if (characterInfoContainer) {

        characterInfoContainer.classList.add('character-info-container');

        // Creacion de parrafo Nombre
        const characterName = createParagraphElement(character.nombre.toUpperCase());
        if (characterName) {
            characterName.classList.add("character-name")
            characterInfoContainer.appendChild(characterName);
        } else { console.log("Error al crear elemento characterName") };

        // Creacion de parrafo especialidad
        const characterSpeciality = createParagraphElement(character.especialidad, "Especialidad");
        if (characterSpeciality) {
            characterSpeciality.classList.add("character-speciality")
            characterInfoContainer.appendChild(characterSpeciality);
        } else { console.log("Error al crear elemento characterSpeciality") };

        // Creacion de parrafo habilidades
        const characterSkills = document.createElement("div");
        if (characterSkills) {

            characterSkills.classList.add('character-skills-container');
            // Validar si "habilidades" existe y es un array
            if (Array.isArray(character.habilidades)) {
                // Concatenar todas las habilidades en un solo texto
                const skillsText = character.habilidades.join(", ");
                // Crear el párrafo con el texto combinado
                const skillsParagraph = createParagraphElement(skillsText, "Habilidades");
                characterSkills.appendChild(skillsParagraph);
            } else {
                console.error(`El personaje ${character.nombre} no tiene habilidades válidas.`);
                const skillsParagraph = createParagraphElement("Sin habilidades", "Habilidades");
                characterSkills.appendChild(skillsParagraph);
            }
            characterInfoContainer.appendChild(characterSkills);
        };

    } else {
        throw new Error(`No se ha encontrado el contenedor characterInfoContainer`)
    };

    return characterInfoContainer
}


// CREAR CONTENEDOR PARA MOSTRAR PERSONAJES
const createCharacterContainer = (character: Character): HTMLDivElement => {

    // creacion CARD DIV (contiene toda la informacion del personaje)
    const characterElement = document.createElement("div");

    if (characterElement) {
        characterElement.classList.add("personaje-card")

        // Creacion de imagen 
        const characterImage = createImageElement(`http://localhost:3000/${character.imagen}`, character.nombre);
        if (characterImage) {
            characterElement.appendChild(characterImage);
        } else { console.log("error al crear elemento characterImage") };

        // Contenedor de información en texto
        const characterInfoContainer = createCharacterInfoContainer(character)
        characterElement.appendChild(characterInfoContainer)

    } else { console.log("error al crear characterElement") };

    return characterElement;
}


// METODO PARA LLENAR EL SELECT CON LOS NOMBRE DE LOS PERSONAJES
const populateCharacterSelect = async () => {
    try {
        const characters = await getAllCharacters();
        const selectElement = document.querySelector("#nameCharacter");

        if (selectElement && selectElement instanceof HTMLSelectElement) {
            characters.forEach((character) => {
                const option = document.createElement("option");
                option.value = character.nombre;
                option.textContent = character.nombre;
                selectElement.appendChild(option);
            });
        } else {
            throw new Error("El elemento select no se encontró");
        }
    } catch (error) {
        console.error("Error al poblar el select:", error);
    }
};

// METODO PARA LEER EL VALOR DEL SELECT
const readSelectValue = (selectId: string): string => {
    const selectElement = document.querySelector(`#${selectId}`);

    if (selectElement && selectElement instanceof HTMLSelectElement) {
        return selectElement.value;
    } else {
        throw new Error(`Error al leer el valor del campo select ${selectId}`);
    }
};


// MÉTODO PARA IMPRIMIR TODS LOS PERSONAJES EN LA VISTA
const prinCharacters = async () => {

    try {
        const characters = await getAllCharacters();
        const characterListElement = document.getElementById("listado-personajes");

        if (characterListElement && characterListElement instanceof HTMLDivElement) {
            characterListElement.innerHTML = "";
            characters.forEach(character => {
                const characterConatainer = createCharacterContainer(character);

                if (characterConatainer) {
                    characterListElement.appendChild(characterConatainer);
                }
            });
        } else {
            throw new Error("No se ha encontrado el contenedor characterListElement")
        };

    } catch (error) {
        throw new Error(`Erros en printCharacters : ${error}`);
    }
}


// MÉTODO QUE IMPRIME EL PERSONAJE RECIBIDO POR PARÁMETRO EN LA VISTA
const printCharacterByName = async (event: Event) => {
    event.preventDefault(); 

    try {
        const characterName = readSelectValue("nameCharacter");

        const character = await getCharacterByName(characterName);

        const characterListElement = document.getElementById("listado-personajes");

        if (characterListElement && characterListElement instanceof HTMLDivElement) {
            characterListElement.innerHTML = "";
            const characterContainer = createCharacterContainer(character);
            characterListElement.appendChild(characterContainer);
        } else {
            throw new Error("No se ha encontrado el contenedor characterListElement");
        };

    } catch (error) {
        alert(error);
    }
};



// METODO PARA GESTIONAR QUE MOSTRAR SEGUN SI SE RECIBE UN EVENTO O NO
const printCards = (event?: Event) => {
    if (event) {
        printCharacterByName(event);
    } else {
        prinCharacters();
    };
};


// CARGA INICIAL
document.addEventListener("DOMContentLoaded", () => {
    populateCharacterSelect();

    const form = document.querySelector("#characterForm");
    if (form) {
        form.addEventListener("submit", printCharacterByName);
    }

    const printAllButton = document.querySelector("#getAllButton");
    if (printAllButton) {
        printAllButton.addEventListener("click", (event) => {
            event.preventDefault(); 
            prinCharacters();
        });
    };

    printCards(); // Carga inicial de personajes.
});



