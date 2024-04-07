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
    });
});

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    if (firstNumber === undefined) {
        firstNumber = parseFloat(result.textContent);
        arrResult = []; 
    } else if (secondNumber === undefined) {
        secondNumber = parseFloat(result.textContent);
        arrResult = []
        if (firstNumber !== undefined && secondNumber !== undefined) {
            result.textContent = firstNumber + secondNumber;
            firstNumber = parseFloat(result.textContent);
            secondNumber = undefined;
        }
    }
});

function add () {
    console.log(firstNumber + secondNumber);
};

function subtract () {
    console.log(+firstNumber - +secondNumber);
};

function multiply () {
	console.log(+firstNumber * +secondNumber);
};

function divide () {
    console.log(+firstNumber / +secondNumber);
};

function operate (operator) {

    if (operator == "+"){
        add();
    } else if (operator == "-"){
        subtract();
    } else if (operator == "*"){
        multiply();
    } else if (operator == "/"){
        divide();
    }
}
