

# Índice

1. [Juego de las Siete y Media](#juego-de-las-siete-y-media)
2. [Explicación de archivos](#explicación-de-archivos)
   - [main.js](#mainjs)
      - [Importaciones](#importaciones)
      - [Variables globales](#variables-globales)
      - [Elementos del DOM](#elementos-del-dom)
      - [Eventos de Click](#eventos-de-click)
         - [Dar Carta](#dar-carta)
         - [Detener el Juego](#detener-el-juego)
         - [Reiniciar el Juego](#reiniciar-el-juego)
         - [Función gameOver](#función-gameover)
   - [modelo.js](#modelojs)
   - [motor.js](#motorjs)
   - [ui.js](#uijs)


---

# Enunciado
Vamos a implementar el juego de cartas de las 7 1/2 en modo solitario.

---

## A implementar:

## Implementado 
### 1. Mostrar puntuación:
Arranca por crear una variable que almacena la puntuación que lleve el usuario:

Crea una variable para almacenar la puntuación, inicialmente será 0.
Crea un div en el HTML en el que podamos mostrar la puntuación.
Crea una función que se llame muestraPuntuacion que muestre la puntuación actual en el div.
Invoca a la función en cuanto este disponible el DOM.

### 2. Pedir carta:
Implementa la funcionalidad de pedir carta, ¿En qué consiste?

Hay que generar una función que nos devuelva una carta aleatoria, la podemos llamar dameCarta.
Para ello exponemos un botón en el HTML que al pulsarlo llame a la función dameCarta.
Para probar este caso, de momento muestra la carta elegida por consola.

### 3. Mostrar carta:
Crea una función que se llame muestraCarta que muestre la carta que le pasemos por parámetro

### 4. Sumar puntuación:
Una vez que le hemos dado la carta al usuario, tenemos que sumar la puntuación de la carta a la puntuación total.

### 5. Game over:
Si el usuario se pasa de 7,5 puntos, el juego termina y se muestra un mensaje de Game Over, además el usuario no puede seguir pidiendo cartas.

### 6. Me planto:
Una vez que el usuario ha terminado la partida (sea porque se ha plantado o porque ha perdido), se le muestra un botón para que pueda empezar una nueva partida.

### 7. Estila la aplicación:
Utilizando CSS, estila la aplicación (margenes, espacios, colores, etc...) para que tenga el mejor aspecto posible

## Sin Implementar 
### Apartado opcional -> Saber lo que habría pasado
Una vez que el usuario ya se ha plantado, se le muestra un botón para que pueda saber lo que habría pasado si hubiera seguido pidiendo cartas.


---

# IMPLEMENTACIÓN 

# 1. Juego de las Siete y Media
Este es un juego de cartas llamado "Siete y Media", donde el jugador recibe cartas y debe intentar alcanzar una puntuación total lo más cercana posible a 7.5 sin pasarse. 

A continuación se proporciona una descripción detallada de las funciones utilizadas en el juego "Siete y Media". Cada función está documentada con información sobre sus parámetros de entrada, su comportamiento y cualquier valor devuelto.

# 2. Explicación de archivos
  - ## main.js
    Este archivo forma parte de un juego interactivo construido con JavaScript, HTML y CSS. Se encarga de la lógica principal del juego, incluyendo la interacción del usuario a través de botones y la actualización del estado del juego. A continuación, se detalla cada parte del archivo:

    ### Importaciones:
    Las funciones importadas desde motor.js y ui.js proporcionan la lógica del juego y la manipulación de la interfaz de usuario, respectivamente.
    ```JAVASCRIPT
    import { dameCarta, getRealValue, gameOverLogic} from './motor.js';
    import { muestraPuntuacion, mostrarCarta, resetGameView, updateGameOverUI } from './ui.js';
    ```
    **dameCarta:** Selecciona una carta al azar.
    **getRealValue: **Obtiene el valor real de la carta seleccionada.
    **gameOverLogic:** Define la lógica para determinar el fin del juego.
    **muestraPuntuacion:** Muestra la puntuación del jugador.
    **mostrarCarta:** Muestra la carta seleccionada en la interfaz de usuario.
    **resetGameView:** Restablece la vista del juego para una nueva partida.
    **updateGameOverUI:** Actualiza la interfaz de usuario cuando el juego termina.

    ## Variables globales 
      ```JAVASCRIPT
      let userScore = 0;
      ```
    **userScore:** Almacena la puntuación actual del usuario. Se inicializa en 0.

    ## Elementos del DOM
      ```JAVASCRIPT
      const cartaDada = document.getElementById('mostrarCarta');
      const giveCard = document.getElementById('carta');
      const stop = document.getElementById('stop');
      const reset = document.getElementById('reset');
      const cardsBox = document.querySelector('.cards');
      const currentDisplay = getComputedStyle(cardsBox).display;
      ```
    **cartaDada:** El elemento donde se mostrará la carta actual.
    **giveCard:** El botón para "dar" una nueva carta al jugador.
    s**top:**El botón para detener el juego con la puntuación actual.
    **reset:** El botón para reiniciar el juego.
    **cardsBox:** El contenedor de las cartas mostradas.
    **currentDisplay:** Captura el estado de visualización actual del cardsBox.

    Claro, aquí tienes el contenido en formato Markdown listo para copiar:

    ## Eventos de Click
    Se añaden eventos de click a los botones para controlar el flujo del juego.

    ### Dar Carta
    ```javascript
    giveCard ? giveCard.addEventListener('click', () => {
        const random = dameCarta();
        mostrarCarta(random);
        const realValue = getRealValue(random);
        userScore += realValue;
        muestraPuntuacion(userScore);
        if (userScore > 7.5) gameOver(userScore);
    }) : null;
    ```
    Al hacer clic en "Dar Carta", se obtiene una carta aleatoria, se muestra, se actualiza la puntuación del usuario y se verifica si el usuario ha superado el límite de puntuación para terminar el juego.

    ### Detener el Juego
    ```javascript
    stop ? stop.addEventListener('click', () => gameOver(userScore)) : null;
    ```
    Al hacer clic en "Detener", se termina el juego con la puntuación actual del usuario.

    ### Reiniciar el Juego
    ```javascript
    reset ? reset.addEventListener('click', () => {
        userScore = 0;
        muestraPuntuacion(userScore);
        mostrarCarta(userScore);
        resetGameView(currentDisplay);
    }) : null;
    ```
    Al hacer clic en "Reiniciar", se restablecen todos los valores y la vista del juego para empezar de nuevo.

    ### Función gameOver
    ```javascript
    function gameOver(finalScore) {
        giveCard ? giveCard.disabled = true : null;
        const { mensaje, icono } = gameOverLogic(finalScore);
        updateGameOverUI(mensaje, icono);
    }
    ```
    Esta función se llama cuando el juego termina, ya sea por superar el límite de puntuación o por decisión del jugador. Deshabilita el botón "Dar Carta", evalúa el resultado final y actualiza la interfaz de usuario con un mensaje y un icono correspondientes al resultado del juego.
   

  - ## modelo.js
  - ## motor.js
  - ## ui.js






