
# Máquina de cambio

Seguramente te hayas encontrado en más de una tienda, una máquina en la que pagas con un billete o monedas y ésta te devuelve el cambio exacto, con los billetes y monedas más grandes posibles. ¿Cómo podemos implementar esto?

## Enunciado (basado en caso real)

En la panadería de tu barrio, no quieren que las mismas personas que manipulan los alimentos toquen el dinero, para ello los clientes tendrán que pagar utilizando una máquina. Dicha máquina:

- Admite billetes de 5, 10, 20 y 50 €
- Admite monedas de 1, 2, 5, 10, 20, 50 céntimos, 1 y 2 €

Cuando el usuario ha introducido las monedas o billetes pertinentes, la máquina calcula el cambio y lo devuelve, dando prioridad a los billetes y monedas más grandes.

### Ejemplo A:

- La compra son 2,50 €
- El usuario paga con un billete de 50 €
- La máquina devuelve 47,50 € en billetes y monedas:
  - 2 billetes de 20 €
  - 1 billete de 5 €
  - 1 moneda de 2 €
  - 1 moneda de 0,50 €

### Ejemplo B:

- La compra son 4,82 €
- El usuario paga 5,32 €
- La máquina devuelve 0,50 € en monedas:
  - 1 moneda de 0,50 €

### Ejemplo C:

- La compra son 2 €
- El usuario paga 6 €
- La máquina devuelve 4 € en monedas:
  - 2 monedas de 2 €

## ¿Cómo se puede resolver esto?

Primero, tengo un array de billetes y monedas ordenados de mayor a menor. Empiezo por el billete más grande: divido la cantidad que tengo por el billete.

1. Si el cociente es mayor que cero, ya sé cuántos billetes tengo que devolver (si el cociente es cero quiere decir que el billete es más grande que la cantidad a devolver).
2. El resto me indica cuánta cantidad me queda por devolver (si no es cero, necesito billetes o monedas más pequeños). Esta cantidad restante me sirve para:
   - Si el resto es cero, detener el algoritmo (ya tengo el cambio calculado).
   - Si el resto no es cero:
     - Avanzar al siguiente billete en el array (o moneda más pequeña).
     - Volver al paso inicial (dividir la cantidad que me queda por el billete actual), y repetir el proceso hasta que el resto sea cero.
