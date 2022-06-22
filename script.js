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
let lastButton;

const display = document.querySelector('#display');
display.textContent = displayValue;

const digitButtons = document.querySelectorAll('.digit-btn');
digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "." && displayValue.includes(".")) return;
        if (lastButton == "operator") displayValue = "";
        displayValue += button.id;
        updateDisplay(displayValue);
        lastButton = "digit";
    });
});

const operateButtons = document.querySelectorAll('.operate-btn');
operateButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (lastButton == "operator"); //Do nothing
        else if (currentOperator) equals();
        firstValue = displayValue;
        currentOperator = button.id;
        lastButton = "operator"
    });
});

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
    displayValue = answer.toString();
    firstValue = answer; 
    currentOperator = "";
    lastButton = "equals";
}

function back() {
    if (lastButton == "digit") {
        displayValue = displayValue.slice(0, -1);
        updateDisplay(displayValue);
    }
    else if (lastButton == "operator") {
        currentOperator = "";
    } 
    else if (lastButton == "equals") clear();
};

//TODO
//Prevent /0
//Check for bugs, edge cases