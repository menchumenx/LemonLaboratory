


// recogida de valor para h1
let shift = document.getElementById('shift').innerText;
shift.padStart(2, '0')
let numberShift = parseInt(shift);

// *** FUNCIONES ***********************************

// ****************** 
// funcion de avance
// ****************** 
function goAhead() {
    numberShift += 1;
    document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
}

// ****************** 
// funcion de retroceso
// ****************** 
function goBack() {
    if (numberShift > 1) { // Solo decrementar si numberShift es mayor que 1
        numberShift -= 1;
    }
    document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
}

// ****************** 
// funcion que modifica el turno por el operador
// ****************** 
function modifyShift() {
    let operatorShift = document.getElementById('operatorShift').value
    let numberOpShift = parseInt(operatorShift);
    numberShift = numberOpShift;

    if (operatorShift != '') {
        document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
        document.getElementById('operatorShift').value = '';
    } else {
        document.getElementById('operatorShift').value = '';
        numberShift = 0;
        document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
    }
}

// ****************** 
// funcion que resetea el turno
// ****************** 
function resetShift() {
    numberShift = 0;
    document.getElementById('shift').innerHTML = numberShift.toString().padStart(2, '0');
}

// ****************** 
// funcion para controlar el valor minimo del turno
// ****************** 
function minShiftValue(value) {
    console.log(value);
    const minValue = 0;
    return value < minValue ? minValue : value;
}




// **** EVENTOS ******************************************
// creacion de evento para resetear
const reset = document.getElementById('reset');
reset.addEventListener('click', resetShift)

const update = document.getElementById('update');
update.addEventListener('click', modifyShift)







