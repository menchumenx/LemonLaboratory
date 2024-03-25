
# Enunciado
Vamos a implementar el juego de cartas de las 7 1/2 en modo solitario.


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

# Juego de las Siete y Media
Este es un juego de cartas llamado "Siete y Media", donde el jugador recibe cartas y debe intentar alcanzar una puntuación total lo más cercana posible a 7.5 sin pasarse. 

A continuación se proporciona una descripción detallada de las funciones utilizadas en el juego "Siete y Media". Cada función está documentada con información sobre sus parámetros de entrada, su comportamiento y cualquier valor devuelto.

## Funciones
### `muestraPuntuacion(score)`

Esta función muestra la puntuación actual del jugador en la interfaz gráfica.

- **Parámetros de entrada:**
  - `score`: Puntuación actual del jugador.
- **Salida:** No devuelve ningún valor.

### `dameCarta()`

Esta función se llama cuando el jugador solicita una nueva carta. Genera un valor aleatorio para la carta, actualiza la visualización de la carta y la puntuación del jugador. Si la puntuación supera 7.5, llama a la función `gameOver()`.

- **Parámetros de entrada:** No recibe ningún parámetro.
- **Salida:** No devuelve ningún valor.

### `getRealValue(random)`

Esta función evalúa si la carta recibida suma 0.5 puntos a la puntuación del jugador, y actualiza la puntuación en consecuencia.

- **Parámetros de entrada:**
  - `random`: Valor de la carta recibida.
- **Salida:** No devuelve ningún valor.

### `gameOver(finalScore)`

Esta función determina el mensaje y el emoticono a mostrar según la puntuación final del jugador. También deshabilita el botón "Dame Carta" y oculta las cartas si corresponde.

- **Parámetros de entrada:**
  - `finalScore`: Puntuación final del jugador.
- **Salida:** No devuelve ningún valor.

### `newGame()`

Esta función se llama cuando se reinicia el juego. Restablece la puntuación del jugador, muestra la carta inicial y restablece la vista del juego.

- **Parámetros de entrada:** No recibe ningún parámetro.
- **Salida:** No devuelve ningún valor.

### `mostrarCarta(random)`

Esta función muestra la carta correspondiente al valor recibido en la interfaz gráfica.

- **Parámetros de entrada:**
  - `random`: Valor de la carta a mostrar.

- **Salida:** No devuelve ningún valor.

### `resetGameView()`

Esta función restablece la vista del juego, mostrando u ocultando elementos y restableciendo estilos.

- **Parámetros de entrada:** No recibe ningún parámetro.
- **Salida:** No devuelve ningún valor.




