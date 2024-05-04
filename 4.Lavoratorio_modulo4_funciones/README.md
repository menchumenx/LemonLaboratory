
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
## Detalles Técnicos

### Variables Principales

- `shiftElement`: Representa el elemento HTML que muestra el número de turno actual en la interfaz.
- `numberShift`: Almacena el número de turno actual como un entero, facilitando su manipulación.

### Funciones

#### updateShiftElement(shiftElement, numberShift)
Actualiza el contenido de `shiftElement` con el valor de `numberShift`, formateando el número para que siempre tenga dos dígitos (por ejemplo, "00", "01").

```JAVASCRIPT
function updateShiftElement(shiftElement, numberShift) {
    if (shiftElement && numberShift !== undefined && numberShift !== null) {
        shiftElement.innerHTML = numberShift.toString().padStart(2, '0');
    }
}
```



#### goBack()
Decrementa el número de turno en uno, con la condición de que este sea mayor a uno, manteniendo la actualización en la interfaz.
```JAVASCRIPT
    function goBack() {
    if (numberShift > 1) {
        numberShift -= 1;
        updateShiftElement(shiftElement, numberShift);
    }
}
```

#### modifyShift()
Permite la modificación manual del número de turno a través de un campo de entrada y actualiza la interfaz acordemente.
```JAVASCRIPT
function modifyShift() {
    const operatorShift = document.getElementById('operatorShift').value;
    const numberOpShift = parseInt(operatorShift);

    // Verificar si el input es un número válido y no negativo
    if (!isNaN(numberOpShift) && numberOpShift >= 0) {
        numberShift = numberOpShift;
        updateShiftElement(shiftElement, numberShift);
    } else {
        // Si el input no es válido, restablecer el turno a 0
        numberShift = 0;
        updateShiftElement(shiftElement, numberShift);
    }

    // Limpiar el campo de entrada después de su uso
    document.getElementById('operatorShift').value = '';
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
// Botones de la interfaz
const goBackButton = document.createElement('button');
goBackButton.innerText = '<';
goBackButton.addEventListener('click', goBack);

const resetButton = document.createElement('button');
resetButton.innerText = 'Reset';
resetButton.classList.add('reset-button');
resetButton.addEventListener('click', resetShift);

const goAheadButton = document.createElement('button');
goAheadButton.innerText = '>';
goAheadButton.addEventListener('click', goAhead);

// Agregar los botones a un contenedor en la interfaz
const buttonsContainer = document.getElementById('buttons');
buttonsContainer.appendChild(goBackButton);
buttonsContainer.appendChild(resetButton);
buttonsContainer.appendChild(goAheadButton);

// Asignar eventos a botones existentes
const updateButton = document.getElementById('update');
updateButton.addEventListener('click', modifyShift);

``