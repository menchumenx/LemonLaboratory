

## Tipos de datos y Operadores - Laboratorio


### Cena de cumpleaños entre amigos
Tienes un grupo de 6 amigos y quieres invitarlos a cenar por tu cumpleaños.

- Solo puedes permitirte invitar a las bebidas, ya que estás un poco ajustado de dinero.
- Tienes un ticket de cena que cuesta 120 € y en el que ya se incluyen las bebidas por un valor de 18 €.
- Calcula cuánto tendría que pagar cada comensal para dividir los costos de manera equitativa.
- Utiliza JavaScript para hacer el cálculo y mostrar el resultado por consola.

---

### Implementación.

#### Impelentacion en JS
Las funciones ***calTotalPerPerson()*** y ***calTotalPerPersonStr()*** están diseñadas para manejar el escenario propuesto devolviendo ya sea un valor numérico o una cadena formateada, según su preferencia.

- ***calTotalPerPerson()***
```js
/**
 * Calculates the total amount per person to pay, returning a number.
 * 
 * @param {number} ticketAmount - The total amount of the ticket.
 * @param {number} n_friends - The number of friends sharing the ticket.
 * @param {number} drinksAmount - The total amount spent on drinks.
 * @returns {number} The total amount each person has to pay.
 */
function calTotalPerPerson(ticketAmount, n_friends, drinksAmount) {
    return (ticketAmount - drinksAmount) / n_friends;
}
```

- ***calTotalPerPersonStr()***
```js
/**
 * Calculates the total amount per person to pay, returning a formatted string.
 * 
 * @param {number} ticketAmount - The total amount of the ticket.
 * @param {number} n_friends - The number of friends sharing the ticket.
 * @param {number} drinksAmount - The total amount spent on drinks.
 * @returns {string} A string indicating the total amount each person has to pay.
 */
function calTotalPerPersonStr(ticketAmount, n_friends, drinksAmount) {
    let total = (ticketAmount - drinksAmount) / n_friends;
    return "Each diner will have to pay a total of ".concat(total, "€");
}
```



#### Impelentacion en TS
Las funciones ***ccalTotalPerPersonTS()*** y ***calTotalPerPersonString()*** están diseñadas para manejar el escenario propuesto devolviendo ya sea un valor numérico o una cadena formateada, según su preferencia.

Para este caso, los parámetros de entrad y de salida son los mismos que los implementados en las funciones de JS.


- #### USO

> **1. Compilación: **
> Para compilar los archivos TypeScript, puede utilizar el compilador TypeScript (tsc) de la siguiente manera:
```zsh
tsc index.ts
```

> **2. Ejecución: **
> Para ejecutar el archivo compilado con Node.js, puede usar el siguiente comando:
```zsh
node index.js
```
> Esto ejecutará el archivo JavaScript y mostrará los resultados en la consola.

