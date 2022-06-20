function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == '+') return add(a, b);
    else if (operator == '-') return subtract(a, b);
    else if (operator == '*') return multiply(a, b);
    else if (operator == '/') return divide(a, b);
}

let displayValue = "";
const display = document.querySelector('#display');
display.textContent = displayValue;

const digitButtons = document.querySelectorAll('.digit-btn');
digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.id);
    });
});


function updateDisplay(digit) {
    //TODO
    //update displayValue with button pressed
    //update display with new displayValue  
    displayValue += digit;
    display.textContent = displayValue;
}
