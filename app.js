


const currentNumber = document.querySelector(".currentNumber p");

const perviousNumber = document.querySelector(".previousNumber p");

const mathSign = document.querySelector(".mathSign");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operaotr");

const equalsButton = document.querySelector(".equals");

const clearButton = document.querySelector(".clear");

const calculatorHistory = document.querySelector('.history');

let result=" ";



function displayNumbers(){
  // if(this.textContent ==="." && currentNumber.innerHTML.includes('.')) return;
  // if(this.textContent ==="." && currentNumber.innerHTML ==="")return currentNumber.innerHTML =".0";

  currentNumber.innerHTML += this.textContent;

}

function operate(){
  
}
function showResult(){
  
}

function clearScreen(){
  
}



























operatorButtons.forEach((button) => button.addEventListener('click',operate))

equalsButton.addEventListener('click',showResult);

clearButton.addEventListener('click',clearScreen);

numberButtons.forEach((button) => {
  button.addEventListener('click',displayNumbers);
});


















