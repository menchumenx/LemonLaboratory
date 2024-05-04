
// **** ELEMENTOS Y EVENTOS ******************************************
const shiftElement = document.getElementById('shift');

const updateButton = document.getElementById('update');
if(updateButton){
    updateButton.addEventListener('click', modifyShift)
}

const goBackButton = document.createElement('button');
if (goBackButton) {
    goBackButton.innerText = '<';
    goBackButton.addEventListener('click', goBack);
}

const resetButton = document.createElement('button');
if (resetButton) {
    resetButton.innerText = 'Reset';
    resetButton.classList.add('reset-button')
    resetButton.addEventListener('click', resetShift)
}

const goAheadButton = document.createElement('button');
if (goAheadButton) {
    goAheadButton.innerText = '>';
    goAheadButton.addEventListener('click', goAhead);
}

const buttonsContainer = document.getElementById('buttons');
if (buttonsContainer) {
    buttonsContainer.appendChild(goBackButton);
    buttonsContainer.appendChild(resetButton);
    buttonsContainer.appendChild(goAheadButton);
}


// *** Estado de la App ***********************************
let numberShift = 0;
// Actualiza shiftElement con el valor inicial de numberShift
updateShiftElement(shiftElement, numberShift)



// *** FUNCIONES 
function updateShiftElement(shiftElement, numberShift) {
    if (shiftElement && numberShift !== undefined && numberShift !== null) {
        shiftElement.innerHTML = numberShift.toString().padStart(2, '0');
    }
}

// ****************** 
// funcion de avance
// ****************** 
function goAhead() {
    numberShift += 1;
    updateShiftElement(shiftElement, numberShift)
}

// ****************** 
// funcion de retroceso
// ****************** 
function goBack() {
    if (numberShift > 1) { // Solo decrementar si numberShift es mayor que 1
        numberShift -= 1;
        updateShiftElement(shiftElement, numberShift)
    }
}

// ****************** 
// funcion que modifica el turno por el operador
// ****************** 
function modifyShift() {
    const operatorShift = document.getElementById('operatorShift').value;
    const numberOpShift = parseInt(operatorShift);
 
    // Verificar si el input es un número válido
    if (!isNaN(numberOpShift) && numberOpShift >= 0) {
        numberShift = numberOpShift;
        updateShiftElement(shiftElement, numberShift);
    } else {
        // Si el input no es válido, restablecer el turno a 0
        numberShift = 0;
        updateShiftElement(shiftElement, numberShift);
    }
    // Limpiar el input después de su uso
    document.getElementById('operatorShift').value = '';
}

// ****************** 
// funcion que resetea el turno
// ****************** 
function resetShift() {
    numberShift = 0;
    updateShiftElement(shiftElement, numberShift)
}

// ****************** 
// funcion para controlar el valor minimo del turno
// ****************** 
function minShiftValue(value) {
    const minValue = 0;
    return value < minValue ? minValue : value;
}










