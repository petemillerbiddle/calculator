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
    else if (operator == 'x') return multiply(a, b);
    else if (operator == '/') return divide(a, b);
}

let displayValue = "";
let firstValue;
let secondValue;
let currentOperator;
let answer;

const display = document.querySelector('#display');
display.textContent = displayValue;

const digitButtons = document.querySelectorAll('.digit-btn');
digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "." && displayValue.includes(".")) return;
        displayValue += button.id;
        updateDisplay(displayValue);
    });
});

const operateButtons = document.querySelectorAll('.operate-btn');
operateButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentOperator) equals();
        firstValue = displayValue;
        displayValue = "";
        currentOperator = button.id;
    });
});

//TODO add Clear and Back buttons here, just call differenct fxns with IDs
const fxnButtons = document.querySelectorAll('.fxn-buttons');
fxnButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "clear") clear();
        else if (button.id == "equals") equals();
        else if (button.id == "back") back();
    });
});

function updateDisplay(value) {
    display.textContent = value;
}

function clear() {
    displayValue = "";
    firstValue = "";
    secondValue = "";
    currentOperator = "";
    answer = "";
    updateDisplay(displayValue);
}

function equals() {
    secondValue = displayValue;
    //'* 1' below converts string to number
    answer = operate(currentOperator,firstValue * 1, secondValue * 1);
    updateDisplay(answer);
    displayValue = answer;
    firstValue = answer; 
    currentOperator = "";
}

//TODO finish
function back() {
    console.log("before back(): " + displayValue);
    displayValue = displayValue.slice(displayValue.length);
    console.log("after back(): " + displayValue);
    updateDisplay(displayValue);
};

//TODO
//Add Clear functionality
//Add Back functionality
//Prevent consecutive operators
//Prevent multiple dec pts
//Prevent /0
//Check for bugs, edge cases