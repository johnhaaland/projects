const display = document.getElementById('calculator-result');
const buttons = document.querySelectorAll('button');

let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetScreen = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (button.classList.contains('calc-number-btn') || 
            button.classList.contains('calc-second-number-btn') || 
            button.classList.contains('calc-third-number-btn') ||
            button.classList.contains('zero-btn')) {
            appendNumber(value);
        } else if (button.classList.contains('decimal-btn')) {
            appendDecimal();
        } else if (button.classList.contains('clear-btn')) {
            clear();
        } else if (button.classList.contains('plus-or-minus-btn')) {
            toggleSign();
        } else if (button.classList.contains('percentage-btn')) {
            percentage();
        } else if (button.classList.contains('addition-btn') || 
                   button.classList.contains('subtraction-btn') || 
                   button.classList.contains('multiplication-btn') || 
                   button.classList.contains('division-btn')) {
            setOperator(value);
        } else if (button.classList.contains('equalto-btn')) {
            evaluate();
        }

        updateDisplay();
    });
});

function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
}

function appendDecimal() {
    if (shouldResetScreen) {
        currentInput = '0.';
        shouldResetScreen = false;
        return;
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
}

function clear() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetScreen = false;
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
}

function percentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
}

function setOperator(op) {
    if (operator !== null) {
        evaluate();
    }
    previousInput = currentInput;
    operator = op;
    shouldResetScreen = true;
}

function evaluate() {
    if (operator === null || shouldResetScreen) return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            if (current === 0) {
                alert('Cannot divide by zero');
                clear();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    shouldResetScreen = true;
}

function updateDisplay() {
    // To handle very long numbers or decimals gracefully
    let displayValue = currentInput;
    if (displayValue.length > 12) {
        displayValue = parseFloat(displayValue).toPrecision(8);
    }
    display.value = displayValue;
}
