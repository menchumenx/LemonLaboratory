## README.md

# Mortadelo y Filemón - Aplicación de Personajes

## Tabla de Contenidos
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Descripción del Programa](#descripción-del-programa)
- [Documentación de Código](#documentación-de-código)
  - [Interfaces](#interfaces)
  - [Funciones Principales](#funciones-principales)
- [Pruebas](#pruebas)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

---

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio en tu sistema.
   ```bash
   git clone <https://github.com/menchumenx/LemonLaboratory.git>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd mortadelo-y-filemon
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Instala `axios` para realizar las peticiones a la API:
   ```bash
   npm install axios
   ```

---

## Ejecución

### Paso 1: Ejecuta la API localmente

Es necesario tener una API activa en `http://localhost:3000/personajes`. 
Puedes encontrarla en la carpeta :**[text](../06-lab-asincronia)**


1. Instala dependencias:
   ```bash
   npm install
   ```

2. Ejecuta el servidor:
   ```bash
   npm start
   ```

### Paso 2: Ejecuta la Aplicación

1. Ejecuta el servidor de desarrollo de Vite:
   ```bash
   npm run dev
   ```

2. Abre tu navegador en `http://localhost:5173`.

---

## Estructura de Carpetas

```
mortadelo-y-filemon/
│
├── node_modules/          # Dependencias del proyecto
├── public/                # Archivos públicos como imágenes
├── src/                   # Código fuente
│   ├── character.model.ts # Modelo de datos para los personajes
│   ├── find-character.api.ts # Lógica para realizar peticiones a la API
│   ├── find-character.ts  # Funciones principales para mostrar personajes
│   ├── index.html         # Archivo principal HTML
│   ├── resset.styles.css  # Estilos para reiniciar estilos base
│   ├── style.css          # Estilos personalizados
│   └── vite-env.d.ts      # Tipos de Vite
├── package.json           # Configuración del proyecto y dependencias
├── tsconfig.json          # Configuración de TypeScript
└── vite.config.ts         # Configuración de Vite
```

---

## Descripción del Programa

Esta aplicación web permite:

1. Visualizar una lista de personajes de la serie "Mortadelo y Filemón".
2. Buscar personajes específicos por su nombre.
3. Mostrar detalles de un personaje en formato de tarjeta.
4. Manejar eventos de selección y navegación.

---

## Documentación de Código

### Interfaces

#### `Character`
Representa la estructura de datos para un personaje:
```typescript
export interface Character {
    id: string;
    nombre: string;
    apodo: string;
    especialidad: string;
    habilidades: string[];
    amigo: string;
    imagen: string;
}
```

---

### Funciones Principales

1. **`getAllCharacters`**:
   Realiza una petición a la API para obtener todos los personajes.
   ```typescript
   export const getAllCharacters = async (): Promise<Character[]> => {
       const { data } = await axios.get(urlApiCharacters);
       return data;
   };
   ```

2. **`getCharacterByName`**:
   Obtiene un personaje específico por su nombre.
   ```typescript
   export const getCharacterByName = async (characterName: string): Promise<Character> => {
       const { data } = await axios.get(`${urlApiCharacters}?nombre_like=${characterName}`);
       return data[0];
   };
   ```

3. **`createCharacterContainer`**:
   Genera un contenedor HTML para mostrar un personaje en pantalla.
   ```typescript
   const createCharacterContainer = (character: Character): HTMLDivElement => {
       const characterElement = document.createElement("div");
       // ... Genera los elementos y retorna el contenedor ...
       return characterElement;
   };
   ```

4. **`printCards`**:
   Decide si mostrar todos los personajes o uno específico basado en un evento.
   ```typescript
   const printCards = (event?: Event) => {
       if (event) {
           printCharacterByName(event);
       } else {
           prinCharacters();
       }
   };
   ```

5. **`populateCharacterSelect`**:
   Llena un elemento `<select>` con los nombres de los personajes.
   ```typescript
   const populateCharacterSelect = async () => {
       const characters = await getAllCharacters();
       characters.forEach((character) => {
           const option = document.createElement("option");
           option.value = character.nombre;
           option.textContent = character.nombre;
           selectElement.appendChild(option);
       });
   };
   ```

---

## Pruebas

1. Asegúrate de que la API esté sirviendo los datos correctamente.
2. Prueba funcionalidades en el navegador:
   - Carga inicial de personajes.
   - Selección y visualización de un personaje específico.
  
---

## Tecnologías Utilizadas

- **Vite**: Herramienta para el desarrollo rápido de aplicaciones web.
- **TypeScript**: Añade tipado estático al código JavaScript.
- **CSS**: Para el diseño visual.
- **Axios**: Para realizar peticiones HTTP a la API.
- **json-server**: Simulación de una API RESTful.