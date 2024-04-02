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

const buttons = document.querySelectorAll("button");
let arrResult = [];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let x = button.value;
      arrResult.push(x);
      if (arrResult.length > 12){
        document.querySelector(".result").style.fontSize = "28px";
      }
      document.querySelector(".result").textContent = +arrResult.join('');
    });
  });