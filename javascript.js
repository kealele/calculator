let firstNumber;
let secondNumber;
let operator;
let arrResult = [];
const maxLength = 12;

const AC = document.querySelector(".AC")
AC.addEventListener("click", () => {
    firstNumber = undefined;
    secondNumber = undefined;
    arrResult = [];
    result.textContent = 0;
});

const pointButton = document.querySelector(".point")
pointButton.addEventListener("click", () => {
    pointButton.setAttribute('disabled', true);
});

const numberButtons = document.querySelectorAll(".number");
let result = document.querySelector('.result');

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let x = button.value;
        if (arrResult.length < maxLength) {
            arrResult.push(x);
            result.textContent = arrResult.join('');
        }
    });
});
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        pointButton.removeAttribute('disabled');
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
            let operationResult;
            if (operator === '+') {
                operationResult = firstNumber + secondNumber;
            } else if (operator === '-') {
                operationResult = firstNumber - secondNumber;
            } else if (operator === '*') {
                operationResult = firstNumber * secondNumber;
            } else if (operator === '/') {
                operationResult = firstNumber / secondNumber;
            }

            let resultString = String(operationResult);
            if (resultString.length > maxLength) {
                resultString = resultString.substring(0, maxLength);
            }

            result.textContent = resultString;
            firstNumber = parseFloat(result.textContent);
        }
    } 
    secondNumber = undefined;
    
}