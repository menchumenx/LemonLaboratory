# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:

---

# IMPLEMENTACIÓN DE SANDBOX EN REPOSITORIO PERSONAL

```bash
git clone https://github.com/menchumenx/LemonLaboratory.git
cd LemonLaboratory
git remote add sandbox https://github.com/menchumenx/4.laboratorio_modulo3_variables.git
git remote -v
git fetch sandbox
git checkout -b sandbox-practice sandbox/main

# despues de realizar las modificaciones y prácticas en la rama sandbox-practice
git add .
git commit -m "Mensaje descriptivo de tus cambios"
git push origin sandbox-practice

# fusión con rama principal
git checkout main
git merge sandbox-practice --allow-unrelated-histories
git add .
git commit -m "Merge sandbox-practice into main"
git push origin main
```

---

# LAVORATORIO MODULO 3 VARIABLES

### Grupos musicales
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

#### La información de los grupos que queremos mostrar:

- Nombre del grupo / cantante / compositor (string).
- Año de fundación: cuando se formó el grupo (numero).
- Si está en activo (booleano).
- Género musical (string).
- Cada género queremos tenerlo en una variable.

#### Los grupos que vamos a mostrar:

- The Beatles / 1960 / Activo: true / 🎵 Pop Rock
- Queen / 1970 / Activo: false / 🎸 Rock
- AC DC / 1973 / Activo: true / 🤘 Hard Rock
- Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
- The Rolling Stones / 1962 / Activo: true / 🎸 Rock

Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.

---

## DESARROLLO DE PRACTICA : Grupos Musicales

En esta práctica, se ha desarrollado un programa en TypeScript para mostrar información sobre varios grupos musicales. A continuación, se detallan los pasos seguidos para su desarrollo:

### Paso 1: Definición de la Interfaz `MusicGroup`

Se creó una interfaz TypeScript llamada `MusicGroup`, que define la estructura de los objetos que representan los grupos musicales. La interfaz tiene los siguientes campos:

- `groupName`: Nombre del grupo de música (string).
- `realiseYear`: Año de fundación del grupo (number).
- `isActive`: Indica si el grupo está en activo (boolean).
- `musicalGenre`: Género musical del grupo (string).

### Paso 2: Declaración de Variables para Géneros Musicales

Se declararon constantes para representar los diferentes géneros musicales que pueden tener los grupos. Estas constantes se utilizaron al definir los objetos `MusicGroup`.

### Paso 3: Declaración de Objetos `MusicGroup`

Se crearon varios objetos `MusicGroup`, cada uno representando un grupo musical distinto. Cada objeto se inicializó con los campos correspondientes utilizando la interfaz `MusicGroup` y las constantes de género musical declaradas anteriormente.

### Paso 4: Función `printGroups` para Imprimir los Grupos Musicales

Se definió una función llamada `printGroups` que recibe un array de objetos `MusicGroup` como parámetro. Esta función recorre cada grupo musical en el array y construye una cadena de texto con la información relevante de cada grupo. La información se imprime en la consola con **formato especial**, donde el nombre del grupo se muestra en negrita, con fuente más grande y fondo verde.

En la función `printGroups`, `console.log` se utiliza para imprimir la información de cada grupo musical en la consola del navegador. Se usa para mostrar el nombre del grupo musical de manera especial, resaltando visualmente su importancia, así como para mostrar información adicional sobre el grupo.

```javascript
console.log(`%c${group.groupName}`, 'font-weight: bold; background-color: green; font-size:16px', printData);
```

<a href='https://www.freecodecamp.org/espanol/news/ejemplo-de-console-log-en-javascript-como-imprimir-en-la-consola-en-js/' style='color:yellow;'>Mas Info sobre console.log()</a>

### Paso 5: Llamada a la Función `printGroups`

Se creó un array que contiene todos los grupos musicales definidos previamente. Luego, se llamó a la función `printGroups` pasando este array como parámetro para imprimir la información de los grupos musicales en la consola.

### Resultado

El resultado final es un programa TypeScript que muestra información detallada sobre varios grupos musicales en la consola, con un formato especial para resaltar el nombre del grupo y otros detalles importantes.

Este documento ha sido creado como parte de la documentación del proyecto para facilitar la comprensión del código y el proceso de desarrollo.


#### Ejemplo de Uso

```typescript
// Definición de parámetro y llamada a la función
let musicalGroups : MusicGroup[] = [group1, group2, group3, group4, group5];
printGroups(musicalGroups);```
