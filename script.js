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
let firstValue;
let secondValue;
let currentOperator;

const display = document.querySelector('#display');
display.textContent = displayValue;

const digitButtons = document.querySelectorAll('.digit-btn');
digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue += button.id;
        updateDisplay(displayValue);
    });
});

const operateButtons = document.querySelectorAll('.operate-btn');
operateButtons.forEach((button) => {
    button.addEventListener('click', () => {
        firstValue = displayValue;
        displayValue = "";
        currentOperator = button.id;
        
    });
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    secondValue = displayValue;
    //'* 1' below converts string to number
    updateDisplay(operate(currentOperator,firstValue * 1, secondValue * 1)); 
});

function updateDisplay(value) {
    display.textContent = value;
}
