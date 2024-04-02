let firstNumber;
let secondNumber;
let operator;

function add () {
	console.log(+firstNumber + +secondNumber);
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

    firstNumber = prompt("First Number");
    secondNumber = prompt("Second Number");
    operator = prompt("Operator");

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
