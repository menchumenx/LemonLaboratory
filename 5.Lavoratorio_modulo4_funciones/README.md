
# Enunciado
Queremos implementar una pantalla en la que aparezca un display con el turno actual de una clínica y un botón para pasar al siguiente turno y otro para volver al anterior.

## A implementar:

### Básico:
En grande se muestra el turno.
El operario puede ir dándole a siguiente o anterior y el turno cambia.
Además de esto vamos a añadir un botón de reset que pone el turno a 0.
### Avanzado:
Como challenge puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario.
### Challenge:
Sea el número que sea, lo quiero mostrar siempre con dos digitos (es decir el 1 -> 01, el 2 -> 02, el 10 -> 10, el 11 -> 11, etc), investiga como puedes formatear un número para que siempre tenga dos dígitos.

---
# IMPLEMENTACÍON

Documentación de Código para Gestión de Turnos

## Descripción General
Este script JavaScript facilita la gestión de turnos a través de una interfaz de usuario, permitiendo operaciones como el avance, retroceso, modificación directa y el reseteo del número de turno actual.


## Detalles Técnicos

### Variables Principales
- `shift`: Captura el valor actual del turno desde el contenido del elemento HTML identificado por `shift`.
- `numberShift`: Almacena el número de turno actual como un entero, facilitando su manipulación.


### Funciones

#### goAhead()
Incrementa el número de turno en uno y actualiza la visualización en la interfaz.

```JAVASCRIPT
function goAhead() {
    numberShift += 1;
    document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
}
```

#### goBack()
Decrementa el número de turno en uno, con la condición de que este sea mayor a uno, manteniendo la actualización en la interfaz.
```JAVASCRIPT
function goBack() {
    if (numberShift > 1) {
        numberShift -= 1;
    }
    document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
}

```

#### modifyShift()
Permite la modificación manual del número de turno a través de un campo de entrada y actualiza la interfaz acordemente.
```JAVASCRIPT
function modifyShift() {
    let operatorShift = document.getElementById('operatorShift').value
    let numberOpShift = parseInt(operatorShift);
    numberShift = numberOpShift;

    if (operatorShift != '') {
        document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
    } else {
        document.getElementById('operatorShift').value = '';
        numberShift = 0;
        document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
    }
}
```

#### setShift()
Resetea el número de turno a cero y refleja este cambio en la interfaz.
```JAVASCRIPT
function resetShift() {
    numberShift = 0;
    document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
}
```

#### minShiftValue(value)
Valida el valor mínimo aceptable para el número de turno, asegurando que no sea menor a cero.
```JAVASCRIPT
function minShiftValue(value) {
    const minValue = 0;
    return value < minValue ? minValue : value;
}
```

### Eventos
Implementa escuchas de eventos para interactuar con botones específicos de la interfaz, vinculándolos a las funciones correspondientes.

```JAVASCRIPT
const reset = document.getElementById('reset');
reset.addEventListener('click', resetShift)

const update = document.getElementById('update');
update.addEventListener('click', modifyShift)
``