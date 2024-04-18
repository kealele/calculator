let firstNumber;
let secondNumber;
let operator;

const numberButtons = document.querySelectorAll(".number");
let result = document.querySelector('.result');
let arrResult = [];

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let x = button.value;
      arrResult.push(x);
      if (arrResult.length > 12){
        result.style.fontSize = "28px";
      }
      result.textContent = arrResult.join('');
      if (firstNumber !== undefined && secondNumber === undefined) {
        secondNumber = parseFloat(result.textContent);
        arrResult = []}
    });
});

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    if (operator === undefined){
        operator = '+'
    } else if (operator == "-"){
        result.textContent = firstNumber - secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "+"
    } else if (operator == "*"){
        result.textContent = firstNumber * secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "+"
    } else if (operator == "/"){
        result.textContent = firstNumber / secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "+"
    }
    
    if (operator == "+"){
        if (firstNumber === undefined) {
            firstNumber = parseFloat(result.textContent);
            arrResult = []; 
        }
        if (firstNumber !== undefined && secondNumber !== undefined) {
            result.textContent = firstNumber + secondNumber;
            firstNumber = parseFloat(result.textContent);
            secondNumber = undefined;
        }
    }
});

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", () => {
    if (operator === undefined){
        operator = '-'
    } else if (operator == "+"){
        result.textContent = firstNumber + secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "-"
    } else if (operator == "*"){
        result.textContent = firstNumber * secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "-"
    } else if (operator == "/"){
        result.textContent = firstNumber / secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "-"
    }
    
    if (operator == "-"){
        if (firstNumber === undefined) {
            firstNumber = parseFloat(result.textContent);
            arrResult = []; 
        }
        if (firstNumber !== undefined && secondNumber !== undefined) {
            result.textContent = firstNumber - secondNumber;
            firstNumber = parseFloat(result.textContent);
            secondNumber = undefined;
        }
    }
});

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", () => {
    if (operator === undefined){
        operator = '*'
    } else if (operator == "-"){
        result.textContent = firstNumber - secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "*"
    } else if (operator == "+"){
        result.textContent = firstNumber + secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "*"
    } else if (operator == "/"){
        result.textContent = firstNumber / secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "*"
    }
    
    if (operator == "*"){
        if (firstNumber === undefined) {
            firstNumber = parseFloat(result.textContent);
            arrResult = []; 
        }
        if (firstNumber !== undefined && secondNumber !== undefined) {
            result.textContent = firstNumber * secondNumber;
            firstNumber = parseFloat(result.textContent);
            secondNumber = undefined;
        }
    }
});

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", () => {
    if (operator === undefined){
        operator = '/'
    } else if (operator == "-"){
        result.textContent = firstNumber - secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "/"
    } else if (operator == "*"){
        result.textContent = firstNumber * secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "/"
    } else if (operator == "+"){
        result.textContent = firstNumber + secondNumber;
        firstNumber = parseFloat(result.textContent);
        secondNumber = undefined;
        return operator = "/"
    }
    
    if (operator == "/"){
        if (firstNumber === undefined) {
            firstNumber = parseFloat(result.textContent);
            arrResult = []; 
        }
        if (firstNumber !== undefined && secondNumber !== undefined) {
            result.textContent = firstNumber / secondNumber;
            firstNumber = parseFloat(result.textContent);
            secondNumber = undefined;
        }
    }
});

const equalButton = document.querySelector(".equal")
equalButton.addEventListener("click", () => {
    if (operator == "+"){
        add();
        operator = undefined;
    } else if (operator == "-"){
        subtract();
        operator = undefined;
    } else if (operator == "*"){
        multiply();
        operator = undefined;
    } else if (operator == "/"){
        divide();
        operator = undefined;
    }
});

function add () {
    if (secondNumber === undefined) {
        secondNumber = parseFloat(result.textContent);
        arrResult = []}
    result.textContent = firstNumber + secondNumber;
    firstNumber = parseFloat(result.textContent);
    secondNumber = undefined;
};

function subtract () {
    if (secondNumber === undefined) {
        secondNumber = parseFloat(result.textContent);
        arrResult = []}
    result.textContent = firstNumber - secondNumber;
    firstNumber = parseFloat(result.textContent);
    secondNumber = undefined;
};

function multiply () {
    if (secondNumber === undefined) {
        secondNumber = parseFloat(result.textContent);
        arrResult = []}
    result.textContent = firstNumber * secondNumber;
    firstNumber = parseFloat(result.textContent);
    secondNumber = undefined;
};

function divide () {
    if (secondNumber === undefined) {
        secondNumber = parseFloat(result.textContent);
        arrResult = []}
    result.textContent = firstNumber / secondNumber;
    firstNumber = parseFloat(result.textContent);
    secondNumber = undefined;
};
