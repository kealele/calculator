let firstNumber;
let secondNumber;
let operator;
let arrResult = [];

const AC = document.querySelector(".AC")
AC.addEventListener("click", () => {
    firstNumber = undefined;
    secondNumber = undefined;
    arrResult = [];
    result.textContent = 0;
});

const numberButtons = document.querySelectorAll(".number");
let result = document.querySelector('.result');

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let x = button.value;
        arrResult.push(x);
        if (arrResult.length > 12) {
            result.style.fontSize = "28px";
        }
        result.textContent = arrResult.join('');
    });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber === undefined) {
            firstNumber = parseFloat(arrResult.join(''));
            arrResult = [];
        } else {
            secondNumber = parseFloat(arrResult.join(''));
            arrResult = [];
            performOperation();
        }
        operator = button.value;
    });
});

const equalButton = document.querySelector(".equal")
equalButton.addEventListener("click", () => {
    secondNumber = parseFloat(arrResult.join(''));
    arrResult = [];
    performOperation();
});

function performOperation() {

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        if (operator === '/' && secondNumber === 0) {
            result.textContent = "Error: Division by zero";
        } else {
            if (operator === '+') {
                result.textContent = firstNumber + secondNumber;
            } else if (operator === '-') {
                result.textContent = firstNumber - secondNumber;
            } else if (operator === '*') {
                result.textContent = firstNumber * secondNumber;
            } else if (operator === '/') {
                result.textContent = firstNumber / secondNumber;
            }
            firstNumber = parseFloat(result.textContent);
        }
    } 
    secondNumber = undefined;
}
