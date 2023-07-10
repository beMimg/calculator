const previousScreenNumber = document.querySelector(".previous_number");
const currentScreenNumber = document.querySelector(".current_number");
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const decimalButton = document.querySelector('.decimal');
const equalButton = document.querySelector(".equal");

let currentNum = "";
let operator = "+";
let previousNum = "";

function addNumbers (num1, num2){
  return num1 + num2;
}

function subNumbers (num1, num2){
  return num1 - num2;
}

function multiplyNumbers(num1, num2){
  return num1 * num2;
}

function divideNumbers(num1, num2){
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === "+"){
    return addNumbers(num1, num2);
  
  } else if (operator === "-"){
    return subNumbers(num1, num2);
  
  } else if (operator === "*"){
    return multiplyNumbers(num1, num2); 
  
  } else if (operator === "/"){
    return divideNumbers(num1, num2);
  
  } else {
    console.log("invalid operator");
    return null;
  }
}

numberButton.forEach(btn => {
  btn.addEventListener("click", () => handleNumber(btn.textContent));
});

function handleNumber(number){
  if(currentNum.length <= 10){
  currentNum += number;
  currentScreenNumber.textContent = currentNum;
  }  
}

operatorButton.forEach(btn => {
  btn.addEventListener("click", () => handleOperator(btn.textContent));
});

function handleOperator(op){
  operator = op;
  previousNum = currentNum;
  previousScreenNumber.textContent = previousNum + operator;
  currentNum = "";
  currentScreenNumber = "";
}